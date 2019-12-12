import React from 'react';
import ReactDOM from 'react-dom';
import { Component, Children } from 'react';
import { genChildProps } from './interface';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
import kindOf from '../../utils/kindOf';
import PropTypes from 'prop-types';
import { getModeArray } from './utils';
import { HorizontalPosition, VerticalPosition, ModeType } from './interface';
import noop from 'lodash/noop';

export interface PopoverProps {
  /**
   * 弹层所在容器的 css 选择器
   */
  selector: string;
  /**
   * 弹层是否可见
   */
  visible?: boolean;
  /**
   * 触发类型
   */
  mode: ModeType;
  /**
   * 触发元素方位
   */
  triggerPosition: [HorizontalPosition, VerticalPosition];
  /**
   * 内容方位
   */
  contentPosition: [HorizontalPosition, VerticalPosition];
  /**
   * X轴的偏移量
   *
   */
  offsetX: number;
  /**
   * X轴的偏移量
   */
  offsetY: number;
  /**
   * 打开或关闭的回调函数
   */
  onChange: (visible: boolean) => void;
}

export interface PopoverState {
  visible: boolean;
  triggerDOM: Element;
}

/**
 * popover
 */
class Popover extends Component<PopoverProps, PopoverState> {
  static Trigger: typeof PopoverTrigger;
  static Content: typeof PopoverContent;

  static propTypes = {
    selector: PropTypes.string,
    visible: PropTypes.bool,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(['click', 'touch', 'hover']),
      PropTypes.array
    ]),
    triggerPosition: PropTypes.array,
    contentPosition: PropTypes.array,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    onChange: PropTypes.func
  };

  static defaultProps = {
    selector: 'body',
    mode: 'click',
    triggerPosition: ['left', 'bottom'],
    contentPosition: ['left', 'top'],
    offsetX: 0,
    offsetY: 0,
    onChange: noop
  };

  static getDerivedStateFromProps(nextProps: PopoverProps) {
    if ('visible' in nextProps && typeof nextProps.visible === 'boolean') {
      return {
        visible: nextProps.visible
      };
    }

    return null;
  }

  state = {
    visible: false,
    triggerDOM: null
  };

  componentDidMount() {
    if (this.state.visible) {
      this.removePopoverEventListener();
    }
    this.setDOM();
  }

  setDOM = () => {
    const triggerDOM = ReactDOM.findDOMNode(
      (this.triggerRef as any).childrenRef
    );

    this.setState({ triggerDOM: triggerDOM as Element });
  };

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
      window.addEventListener(item, this.removePopover);
    });
  };

  removePopoverRemoveEventListener = () => {
    const modeArray = getModeArray(this.props.mode);
    modeArray.forEach(item => {
      window.removeEventListener(item, this.removePopover);
    });
  };

  toggleVisible = (visible: boolean) => {
    const { onChange } = this.props;
    this.setState({ visible });
    onChange(visible);
  };

  removePopover = () => {
    this.state.visible && this.toggleVisible(false);
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
      (result, child: React.ReactElement) => {
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

  private triggerRef: React.RefObject<PopoverTrigger>;
  getTriggerRef = (ref: React.RefObject<PopoverTrigger>) => {
    this.triggerRef = ref;
  };

  renderTrigger = (trigger: React.ReactElement) => {
    const { mode } = this.props;
    return React.cloneElement(trigger, {
      ref: this.getTriggerRef,
      mode: mode,
      toggleVisible: this.toggleVisible
    });
  };

  renderContent = (content: React.ReactElement) => {
    const {
      mode,
      triggerPosition,
      contentPosition,
      offsetX,
      offsetY,
      selector
    } = this.props;
    const { visible, triggerDOM } = this.state;
    return React.cloneElement(content, {
      visible,
      mode,
      triggerPosition,
      contentPosition,
      offsetX,
      offsetY,
      selector,
      triggerDOM,
      toggleVisible: this.toggleVisible
    });
  };

  render() {
    const { trigger, content } = this.genTriggerContent();
    return [this.renderTrigger(trigger), this.renderContent(content)];
  }
}

export default Popover;
