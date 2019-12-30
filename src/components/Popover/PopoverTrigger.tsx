import React from 'react';
import { Component } from 'react';
import { getModeArray } from './utils';
import { ModeType } from './interface';
import PropTypes from 'prop-types';

export interface PopoverTriggerProps {
  /**
   * 弹层是否可见
   */
  visible?: boolean;
  /**
   * 禁用触发器
   */
  disabled?: boolean;
  /**
   * 触发类型
   */
  mode?: ModeType;
  /**
   * toggleVisible
   */
  toggleVisible?: (visible: boolean) => void;
  /**
   * children
   */
  children: React.ReactElement;
}

/**
 * PopoverTrigger
 */
class PopoverTrigger extends Component<PopoverTriggerProps> {
  static propTypes = {
    visible: PropTypes.bool,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(['click', 'hover']),
      PropTypes.array
    ]),
    toggleVisible: PropTypes.func,
    children: PropTypes.node
  };
  static defaultProps = {
    disabled: false
  };

  open = (e: React.MouseEvent) => {
    const { disabled, toggleVisible } = this.props
    if (disabled) {
      return
    }

    e.stopPropagation();
    toggleVisible && toggleVisible(true);
  };

  close = () => {
    const { toggleVisible } = this.props;
    toggleVisible && toggleVisible(false);
  };

  handleClick = (e: React.MouseEvent) => {
    if (typeof this.props.children === 'object') {
      const { onClick } = (this.props.children as React.ReactElement).props;
      onClick && onClick();
    }
    this.open(e);
  };

  handleMouseEnter = (e: React.MouseEvent) => {
    if (typeof this.props.children === 'object') {
      const { onMouseEnter } = (this.props
        .children as React.ReactElement).props;
      onMouseEnter && onMouseEnter();
    }

    this.open(e);
  };

  handleMouseLeave = () => {
    if (typeof this.props.children === 'object') {
      const { onMouseLeave } = (this.props
        .children as React.ReactElement).props;
      onMouseLeave && onMouseLeave();
    }
    this.close();
  };

  getTriggerEvents = () => {
    const { mode } = this.props;
    const modeArray = getModeArray(mode as ModeType);
    let triggerEvents: {
      onClick?: (e: React.MouseEvent) => void;
      onMouseEnter?: (e: React.MouseEvent) => void;
      onMouseLeave?: (e: React.MouseEvent) => void;
    } = {};
    modeArray.forEach(mode => {
      if (mode === 'click') {
        triggerEvents.onClick = this.handleClick;
      }
      if (mode === 'hover') {
        triggerEvents.onMouseEnter = this.handleMouseEnter;
        triggerEvents.onMouseLeave = this.handleMouseLeave;
      }
    });
    return triggerEvents;
  };

  render() {
    const { children } = this.props;
    const triggerEvents = this.getTriggerEvents();

    return React.cloneElement(children, {
      ...triggerEvents
    });
  }
}

export default PopoverTrigger;
