import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledOption } from './styled'

export interface OptionProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 当前条目的值 */
  value?: string | number;
  /** 点击事件的回调 */
  onOptionClick?: any;
}

/**
 * Option
 */
class Option extends Component<OptionProps, any> {

  onClick = () => {
    const { value, onOptionClick, children } = this.props
    onOptionClick && onOptionClick(value, children)
  }

  render() {
    const { className, style, children } = this.props
    const classes = classNames('hmly-select', className)

    return (
      <StyledOption
        className={classes}
        style={style}
        onClick={this.onClick}>
        {children}
      </StyledOption>
    )
  }
}

export default Option
