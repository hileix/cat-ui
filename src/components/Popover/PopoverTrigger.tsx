import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import { getTriggerEvents, ModeType } from './utils';

export interface PopoverTriggerProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 弹层是否可见
   */
  visible?: boolean;
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
  open = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.props.toggleVisible(true);
  };

  close = () => {
    this.props.toggleVisible(false);
  };

  render() {
    const { className, style, children, mode } = this.props;
    const classes = classNames('cat-popover__trigger', className);
    const triggerEvents = getTriggerEvents(mode, this.open, this.close);

    return (
      <div className={classes} style={style} {...triggerEvents}>
        {children}
      </div>
    );
  }
}

export default PopoverTrigger;
