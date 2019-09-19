import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

export interface PopoverTriggerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
  /** 触发类型 */
  mode?: 'click' | 'hover';
  /** toggleVisible */
  toggleVisible?: any;
}

/**
 * PopoverTrigger
 */
class PopoverTrigger extends Component<PopoverTriggerProps, any> {
  handleClick = () => {
    const { mode, toggleVisible } = this.props;
    if (mode === 'click') {
      toggleVisible(true);
    }
  };

  handleMouseEnter = () => {
    const { mode, toggleVisible } = this.props;
    if (mode === 'hover') {
      toggleVisible(true);
    }
  };

  handleMouseLeave = () => {
    const { mode, toggleVisible } = this.props;
    if (mode === 'hover') {
      toggleVisible(false);
    }
  };

  render() {
    const { className, style, children } = this.props;
    const classes = classNames('hmly-popover__trigger', className);

    return (
      <div
        className={classes}
        style={style}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children}
      </div>
    );
  }
}

export default PopoverTrigger;
