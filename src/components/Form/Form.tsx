import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledForm } from './styled'
import FormItem from './FormItem'

export interface FormProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** label 标签的文本对齐方式 */
  labelAlign?: object;
  /** label 标签布局 */
  labelCol?: object;
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

  render() {
    const { className, style, children } = this.props
    const classes = classNames('hmly-form', className)

    return (
      <StyledForm
        className={classes}
        style={style}>
        {children}
      </StyledForm>
    )
  }
}

export default Form
