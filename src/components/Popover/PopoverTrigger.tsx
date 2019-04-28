import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledPopoverTrigger } from './styled'

export interface PopoverTriggerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
}

/**
 * PopoverTrigger
 */
class PopoverTrigger extends Component<PopoverTriggerProps, any> {

  render() {
    const { className, style, children } = this.props
    const classes = classNames('hmly-popover', className)

    return (
      <StyledPopoverTrigger
        className={classes}
        style={style}>
        {children}
      </StyledPopoverTrigger>
    )
  }
}

export default PopoverTrigger
