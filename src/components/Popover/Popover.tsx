import * as React from 'react';
import { Component, Children, cloneElement } from 'react';
import classNames from 'classnames';
import { genChildProps } from './interface';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
import kindOf from '../../utils/kindOf';
import PropTypes from 'prop-types';
import {
  ModeType,
  getModeArray,
  HorizontalPosition,
  VerticalPosition
} from './utils';

export interface PopoverProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
  /** 触发类型 */
  mode: ModeType;
  /**
   * 触发元素方位
   */
  triggerPosition: [HorizontalPosition, VerticalPosition];

  /**
   * 内容方位
   */
  contentPosition: [HorizontalPosition, VerticalPosition];

  /** X轴的偏移量 */
  offsetX?: number;
  /** X轴的偏移量 */
  offsetY?: number;
  /** 打开或关闭的回调函数 */
  onChange?: any;
  selector: string;
}

export interface PopoverState {
  visible: boolean;
}

/**
 * 弹层
 */
class Popover extends Component<PopoverProps, PopoverState> {
  private popoverRef: any;
  private triggerRef: any;
  static Trigger: typeof PopoverTrigger;
  static Content: typeof PopoverContent;

  static propTypes = {
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(['click', 'touch', 'hover']),
      PropTypes.array
    ]),
    position: PropTypes.oneOf([
      'bottomLeft',
      'bottomCenter',
      'bottomRight',
      'topLeft',
      'topCenter',
      'topRight'
    ]),
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    triggerPosition: PropTypes.array,
    contentPosition: PropTypes.array
  };

  static defaultProps = {
    mode: 'click',
    position: 'bottomLeft',
    offsetX: 0,
    offsetY: 0,
    triggerPosition: ['left', 'bottom'],
    contentPosition: ['left', 'top'],
    selector: 'body'
  };

  static getDerivedStateFromProps(nextProps: PopoverProps) {
    if ('visible' in nextProps) {
      return {
        visible: nextProps.visible
      };
    }
    return null;
  }

  constructor(props: PopoverProps) {
    super(props);
    this.popoverRef = React.createRef();
    this.triggerRef = React.createRef();
  }

  state = {
    visible: false
  };

  componentDidMount() {
    if (this.state.visible) {
      this.removePopoverEventListener();
    }
  }

  componentDidUpdate() {
    if (this.state.visible) {
      this.removePopoverEventListener();
    } else {
      this.removePopoverRemoveEventListener();
    }
  }

  componentWillUnmount() {
    this.removePopoverRemoveEventListener();
  }

  removePopoverEventListener = () => {
    const modeArray = getModeArray(this.props.mode);
    modeArray.forEach(item => {
      document.addEventListener(item, this.removePopover);
    });
  };

  removePopoverRemoveEventListener = () => {
    const modeArray = getModeArray(this.props.mode);
    modeArray.forEach(item => {
      document.removeEventListener(item, this.removePopover);
    });
  };

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

  getTriggerDOM = (triggerDOM: HTMLElement) => {
    return triggerDOM;
  };

  renderTrigger = (trigger: any) => {
    const { mode } = this.props;
    return React.cloneElement(trigger, {
      mode: mode,
      getRef: this.triggerRef,
      toggleVisible: this.toggleVisible,
      getTriggerDOM: this.getTriggerDOM
    });
  };

  renderContent = (content: any) => {
    const {
      mode,
      triggerPosition,
      contentPosition,
      offsetX,
      offsetY,
      selector
    } = this.props;
    const { visible } = this.state;
    return React.cloneElement(content, {
      visible,
      mode,
      triggerPosition,
      contentPosition,
      offsetX,
      offsetY,
      selector,
      triggerDOM: this.popoverRef.current,
      toggleVisible: this.toggleVisible
    });
  };

  render() {
    const { className, style } = this.props;
    const classes = classNames('cat-popover', className);
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
