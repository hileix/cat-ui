import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import * as noop from 'lodash/noop'
import { StyledForm } from './styled'
import FormItem from './FormItem'
import kindOf from '../../utils/kindOf'

export interface FormProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** label 标签的文本对齐方式 */
  labelAlign?: object;
  /** label 标签布局 */
  labelWidth?: string | number;
  /** 配置 Form.Item 的 colon 的默认值 */
  colon?: boolean;
}

/**
 * 表单
 */
class Form extends Component<FormProps, any> {
  static Item: typeof FormItem;
  static defaultProps = {
    colon: false
  }

  // 字段及校验函数的映射
  checkFunc = (field: string) => {
    // return {
    //   field1: this.checkField1,
    //   field2: this.checkField2,
    //   field3: this.checkField3,
    //   field4: this.checkField4,
    // }[field] || noop
    return noop
  }

  // 字段改变的通用回调函数
  onFieldChange = (field: string, value: any)  => {
    const { fieldError } = this.state
    const errorType = field + 'Error'
    const errorMsg = this.checkFunc(field)(value)
    const newFieldError = {
      ...fieldError,
      [errorType]: errorMsg
    }
    this.setState({
      [field]: value,
      fieldError: newFieldError
    })
  }

  render() {
    const { className, style, labelWidth, labelAlign, children } = this.props
    const classes = classNames('hmly-form', className)
    const items = React.Children.map(children, (element: any, index) => {
      if (!element) { return element }

      const child = element.props.children
      const componentType = child.type.name
      // console.log('componentType', componentType)
      // if (kindOf(type, PopoverTrigger)) {
      //   result.trigger = child
      // } else if (kindOf(type, PopoverContent)) {
      //   result.content = child
      // }

      return cloneElement(element, {
        key: index,
        labelWidth: labelWidth,
        labelAlign: labelAlign
      })
    })


    return (
      <StyledForm
        className={classes}
        style={style}>
        {items}
      </StyledForm>
    )
  }
}

export default Form
