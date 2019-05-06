import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledSelect } from './styled'

export interface SelectProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * Select
 */
class Select extends Component<SelectProps, any> {

  render() {
    const { className, style } = this.props
    const classes = classNames('hmly-select', className)

    return (
      <StyledSelect
        className={classes}
        style={style}>
        Select
      </StyledSelect>
    )
  }
}

export default Select
