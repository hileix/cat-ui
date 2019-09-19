import * as React from 'react';
import { Component, Children, cloneElement } from 'react';
import classNames from 'classnames';
import { genChildProps } from './interface';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
import kindOf from '../../utils/kindOf';

export interface PopoverProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
  /** 触发类型 */
  mode: 'click' | 'hover';
  /** 定位的方向 */
  position?:
    | 'bottomLeft'
    | 'bottomCenter'
    | 'bottomRight'
    | 'topLeft'
    | 'topCenter'
    | 'topRight';
  /** X轴的偏移量 */
  offsetX?: number;
  /** X轴的偏移量 */
  offsetY?: number;
  /** 打开或关闭的回调函数 */
  onChange?: any;
}

/**
 * 弹层
 */
class Popover extends Component<PopoverProps, any> {
  private popoverRef: any;
  static Trigger: typeof PopoverTrigger;
  static Content: typeof PopoverContent;
  static defaultProps = {
    mode: 'click',
    position: 'bottomLeft',
    offsetX: 0,
    offsetY: 0
  };

  constructor(props: PopoverProps) {
    super(props);
    this.state = {
      visible: false
    };
    this.popoverRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps: PopoverProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    const { visible } = this.state;
    if (visible) {
      window.addEventListener('click', this.removePopover);
    }
  }

  componentDidUpdate() {
    const { visible } = this.state;
    if (visible) {
      window.addEventListener('click', this.removePopover);
    } else {
      window.removeEventListener('click', this.removePopover);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.removePopover);
  }

  open = () => {};

  close = () => {};

  toggleVisible = (value: boolean) => {
    const { onChange } = this.props;
    this.setState({ visible: value });
    onChange && onChange(value);
  };

  removePopover = (e: any) => {
    const { visible } = this.state;
    const node = e.target;
    const fixedNode = node.closest('[data-fixed]');
    const triggerDOM = this.popoverRef.current;
    const isNotFixed = fixedNode ? fixedNode.dataset.fixed !== 'true' : true;
    const isNotContains = triggerDOM.contains(node) === false;

    // // 如果点击的节点不在popup中或者有fixed属性
    if (visible && isNotContains && isNotFixed) {
      this.toggleVisible(false);
    }
  };

  genTriggerContent = () => {
    const { children } = this.props;
    const childArray = Children.toArray(children);
    if (childArray.length !== 2) {
      throw new Error(
        'There must be one and only one trigger and content in Popover'
      );
    }
    const { trigger, content } = childArray.reduce<genChildProps>(
      (result, child: React.ReactElement<any>) => {
        const type = child.type;
        if (kindOf(type, PopoverTrigger)) {
          result.trigger = child;
        } else if (kindOf(type, PopoverContent)) {
          result.content = child;
        }

        return result;
      },
      { trigger: null, content: null }
    );
    return { trigger, content };
  };

  renderTrigger = (trigger: any) => {
    const { mode } = this.props;
    const { visible } = this.state;
    return React.cloneElement(trigger, {
      mode: mode,
      open: this.open,
      close: this.close,
      toggleVisible: this.toggleVisible
    });
  };

  renderContent = (content: any) => {
    const { mode, position, offsetX, offsetY } = this.props;
    const { visible } = this.state;
    return React.cloneElement(content, {
      visible: visible,
      mode: mode,
      position: position,
      offsetX: offsetX,
      offsetY: offsetY,
      open: this.open,
      close: this.close,
      triggerDOM: this.popoverRef.current,
      toggleVisible: this.toggleVisible
    });
  };

  render() {
    const { className, style, children } = this.props;
    const { visible } = this.state;
    const classes = classNames('hmly-popover', className);
    const { trigger, content } = this.genTriggerContent();

    return (
      <div ref={this.popoverRef} className={classes} style={style}>
        {this.renderTrigger(trigger)}
        {this.renderContent(content)}
      </div>
    );
  }
}

export default Popover;
