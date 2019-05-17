import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledCheckboxGroup } from './styled'

export interface CheckboxGroupProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 整组失效是否禁用 */
  disabled?: boolean;
  /** 整组失效是否只读 */
  readOnly?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 值 */
  value: Array<any>;
  /** 选项变化时的回调函数 */
  onChange?: any;
}

/**
 * CheckboxGroup
 */
class CheckboxGroup extends Component<CheckboxGroupProps, any> {

  onCheckboxChange = (e: any) => {
    const { value, onChange } = this.props
    const newValue = e.target.value
    const optionIndex = value.indexOf(newValue)
    if (optionIndex === -1) {
      value.push(newValue)
    } else {
      value.splice(optionIndex, 1)
    }
    onChange && onChange(value)
  }

  render() {
    const self = this
    const { className, style, disabled, readOnly, checked, value, children } = this.props
    const classes = classNames('hmly-Checkbox-group', className)
    const Checkboxs = React.Children.map(children, (element: any, index) => {
      if (!element) { return element }

      return cloneElement(element, {
        onChange: self.onCheckboxChange,
        key: value,
        checked: value.indexOf(element.props.value) > -1,
        disabled: disabled,
        readOnly: readOnly
      })
    })

    return (
      <StyledCheckboxGroup
        className={classes}
        style={style}>
        {Checkboxs}
      </StyledCheckboxGroup>
    )
  }
}

export default CheckboxGroup
