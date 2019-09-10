import * as React from 'react'
import { PureComponent } from 'react'
import * as ReactDOM from 'react-dom'
import memoizeOne from 'memoize-one'
import PortalContent from './PortalContent'
import * as PropTypes from 'prop-types';
import { canUseDOM } from '../../utils/index';

export interface ProtalProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 容器的 css 选择器 */
  selector?: string;
  /** 子元素 */
  children?: React.ReactNode;
  /** 弹层是否可见 */
  visible?: boolean;
  /** 返回传送门需要渲染的内容，优先级高于children */
  render?: () => {};
  /** children 被 mount 之后的回调函数 */
  onMount?: () => {};
  /** children 被 unmount 之后的回调函数 */
  onUnmount?: () => {};
}

/**
 * 传送门，底层的弹出层组件，不含样式
 */

class Portal extends PureComponent<ProtalProps, any> {
  static propTypes = {
    /**
     * 容器的 css 选择器
     * 默认：'body'
     */
    selector: PropTypes.string,

    /**
     * 弹层是否显示
     * 默认：-
     */
    visible: PropTypes.bool.isRequired,

    /**
     * 返回 Portal 需要渲染的内容，优先级高于 children
     * 默认：-
     */
    render: PropTypes.func,

    /**
     * children 被 mout 后的回调
     * 默认：-
     */
    onMount: PropTypes.func,

    /**
     * children 被 unmount 后的回调
     * 默认：-
     */
    onUnmount: PropTypes.func,
  }


  static defaultProps = {
    selector: 'body'
  }

  constructor(props: ProtalProps) {
    super(props)
    this.state = {
      isInited: false
    }
  }

  componentDidMount() {
    const { visible } = this.props
    if (visible) {
      this.setState({ isInited: true })
    }
  }

  componentDidUpdate(prevProps: ProtalProps) {
    const isNotEqual = prevProps.visible !== this.props.visible
    if (this.props.visible && isNotEqual) {
      this.setState({ isInited: true })
    }
  }

  getContainer = (selector: string): HTMLElement => {
    let domNode: HTMLElement
    if (selector) {
      domNode = document.querySelector(selector)
    }
    return domNode || document.body
  }

  render() {
    // 在服务端不渲染
    if (!canUseDOM()) {
      return null
    }
    const { selector, onMount, onUnmount, render, visible, children } = this.props
    const { isInited } = this.state

    const domNode = this.getContainer(selector)
    const content = render ? render() : children

    // 初始化组件时，若 visible 为 false，isInited 表示 Portal 未初始化过，不用挂载组件到 DOM 上
    if (!visible && !isInited) { return null }
    if (!domNode) { return null }

    return ReactDOM.createPortal(
      <PortalContent visible={visible} onMount={onMount} onUnmount={onUnmount}>
        {content}
      </PortalContent>,
      domNode
    )
  }
}

export default Portal
