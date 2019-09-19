import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import classNames from 'classnames';
import { StyledDrawer } from './styled';
import * as PropTypes from 'prop-types';
import getScrollBarSize from '../../utils/getScrollBarSize';
import { canUseDOM } from '../../utils/index';
import { CSSTransition } from 'react-transition-group';


export type PlacementType = 'right'

export interface DrawerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否显示 */
  visible?: boolean;
  /** 获取抽屉所在的 dom 节点 */
  getContainer?: () => HTMLElement;
  /** children */
  children?: React.ReactChildren | string;
  /** 类名前缀 */
  prefix?: string;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 关闭的回调 */
  onClose?: () => void;
  /** 抽屉所在的位置 */
  placement?: PlacementType;
  /** 关闭时是否销毁 Drawer 里的子元素 */
  destroyOnClose?: boolean;
}

export interface DrawerStateInterface {
  parentDOM: HTMLElement | null;
  originStyles: Object | null;
}

const TIMEOUT = 300;


class Drawer extends Component<DrawerProps, DrawerStateInterface> {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    getContainer: PropTypes.func,
    onClose: PropTypes.func,
    destroyOnClose: PropTypes.bool,
  }

  static defaultProps = {
    getContainer: () => document.body,
    prefix: 'hmly',
    mask: true,
    placement: 'right',
    destroyOnClose: false
  }

  readonly state: DrawerStateInterface = {
    parentDOM: null,
    originStyles: null
  }

  handleClose = () => {
    const { onClose } = this.props;
    onClose && onClose();
  }

  componentDidMount = () => {
    const { getContainer } = this.props
    const parentDOM = getContainer();
    const styles = getComputedStyle(parentDOM, null);
    this.setState({
      parentDOM,
      originStyles: { position: styles.position, overflow: styles.overflow, overflowY: styles.overflowY }
    })
  }

  render() {
    if (!canUseDOM()) {
      return null
    }

    const { parentDOM } = this.state
    const { prefix, visible, destroyOnClose, children, style, mask, placement, className } = this.props

    if (!parentDOM) {
      return null;
    }

    const content = (
      <StyledDrawer className={classNames(`${prefix}-drawer`)}>
        {mask && (
          <CSSTransition
            timeout={TIMEOUT}
            in={visible}
            classNames={`${prefix}-drawer__mask`}
            unmountOnExit
            mountOnEnter
            appear
          >
            <div
              className={`${prefix}-drawer__mask`}
              onClick={this.handleClose}
            />
          </CSSTransition>
        )}

        <CSSTransition
          timeout={TIMEOUT}
          in={visible}
          classNames={`${prefix}-drawer__content`}
          unmountOnExit={destroyOnClose}
          mountOnEnter
          appear
        >
          <div
            className={classNames(className, `${prefix}-drawer__content`, {
              [`${prefix}-drawer__content--${placement}`]: true,
            })}
            style={style}

          >
            {children}
          </div>
        </CSSTransition>

      </StyledDrawer>
    )

    return ReactDOM.createPortal(content, parentDOM)
  }
}

export default Drawer
