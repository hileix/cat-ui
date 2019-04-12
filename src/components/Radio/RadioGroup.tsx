import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledRadioGroup } from './styled'

export interface RadioGroupProps {
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
 * RadioGroup
 */
class RadioGroup extends Component<RadioGroupProps, any> {

  handleChange = (e: any) => {
    console.log('handleChange')
  }

  handleClick = (e: any) => {
    console.log('handleClick')
  }

  onRadioChange = (e: any) => {
    const { value } = e.target
    const onChange = this.props.onChange
    console.log('RadioGroup:onRadioChange', value)
    onChange && onChange(value)
  }

  render() {
    const self = this
    const { className, style, disabled, readOnly, checked, value, children } = this.props
    const classes = classNames('hmly-radio-group', className)
    const radios = React.Children.map(children, (element: any, index) => {
      if (!element) { return element }
      return cloneElement(element, {
        onChange: self.onRadioChange,
        key: index,
        checked: value === element.props.value
      })
    })

    return (
      <StyledRadioGroup
        className={classes}
        style={style}>
        {radios}
      </StyledRadioGroup>
    )
  }
}

export default RadioGroup
