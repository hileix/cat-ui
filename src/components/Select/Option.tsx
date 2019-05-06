import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledOption } from './styled'

export interface OptionProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * Option
 */
class Option extends Component<OptionProps, any> {

  render() {
    const { className, style, children } = this.props
    const classes = classNames('hmly-select', className)

    return (
      <StyledOption
        className={classes}
        style={style}>
        {children}
      </StyledOption>
    )
  }
}

export default Option
