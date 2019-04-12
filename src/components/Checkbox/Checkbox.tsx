import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import CheckboxGroup from './CheckboxGroup'
import { StyledCheckboxBox, StyledCheckbox, CheckboxInner, CheckboxInput, CheckboxSlot } from './styled'

export interface CheckboxProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 值 */
  value?: any;
  /** 选项变化时的回调函数	 */
  onChange?: any;
}

/**
 * 多选框
 */
class Checkbox extends Component<CheckboxProps, any> {
  static Group: typeof CheckboxGroup

  handleChange = (e: any) => {
    // console.log('handleChange')
  }

  handleClick = (e: any) => {
    const { disabled, onChange } = this.props
    if (disabled) { return }

    onChange && onChange({
      target: {
        ...this.props,
        checked: e.target.checked
      },
      stopPropagation () {
        e.stopPropagation()
      },
      preventDefault () {
        e.preventDefault()
      },
      nativeEvent: e.nativeEvent
    })
  }

  render() {
    const { className, style, disabled, readOnly, checked, value, children } = this.props
    const classes = classNames('hmly-checkbox', className)

    return (
      <StyledCheckboxBox
        className={classes}
        style={style}>
        <StyledCheckbox>
          <CheckboxInner
            checked={checked}
            disabled={disabled} />
          <CheckboxInput
            value={value}
            checked={checked}
            disabled={disabled}
            readOnly={readOnly}
            onClick={this.handleClick}
            onChange={this.handleChange} />
        </StyledCheckbox>
        <CheckboxSlot
          disabled={disabled}>
          {children}
        </CheckboxSlot>
      </StyledCheckboxBox>
    )
  }
}

export default Checkbox
