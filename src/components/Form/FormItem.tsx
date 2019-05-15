import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledFormItem } from './styled'

export interface FormItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** label */
  label?: string | React.ReactNode;
  /** label 标签布局 */
  labelCol?: object;
  /** 是否必填 */
  required?: boolean;
  /** 提示信息 */
  help?: string | React.ReactNode;
  /** 错误提示 */
  error?: string | React.ReactNode;
  /** 设置子元素 label htmlFor 属性 */
  htmlFor?: string;
  /** 是否显示 label 后面的冒号 */
  colon?: boolean;
}

/**
 * FormItem
 */
class FormItem extends Component<FormItemProps, any> {
  constructor (props: FormItemProps) {
    super(props)
    this.state = {
      error: ''
    }
  }

  render() {
    const { className, style, children } = this.props
    const classes = classNames('hmly-form', className)

    return (
      <StyledFormItem
        className={classes}
        style={style}>
        {children}
      </StyledFormItem>
    )
  }
}

export default FormItem
