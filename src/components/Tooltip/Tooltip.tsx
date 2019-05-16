import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTooltip } from './styled'

export interface TooltipProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * Tooltip
 */
class Tooltip extends Component<TooltipProps, any> {

  render() {
    const { className, style, children } = this.props
    const classes = classNames('hmly-tooltip', className)

    return (
      <StyledTooltip
        className={classes}
        style={style}>
        {children}
      </StyledTooltip>
    )
  }
}

export default Tooltip
