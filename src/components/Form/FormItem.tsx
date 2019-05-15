import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledFormItem, FormItemLabel, FormItemControl, LabelBox,
  ControlBox, FormItemDesc } from './styled'

export interface FormItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** label */
  label?: string | React.ReactNode;
  /** label 标签布局 */
  labelWidth?: string | number;
  /** label 标签的文本对齐方式 */
  labelAlign?: object;
  /** 是否必填 */
  required?: boolean;
  /** 描述信息 */
  desc?: string | React.ReactNode;
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

  static defaultProps = {
    colon: false
  }

  render() {
    const { className, style, label, desc, labelWidth, labelAlign, required,
      error, children } = this.props
    const classes = classNames('hmly-form-item', className)
    // console.log('FormItem:labelWidth', labelWidth)

    return (
      <StyledFormItem
        className={classes}
        style={style}>
        <LabelBox width={labelWidth}>
          <FormItemLabel>
            {label}
          </FormItemLabel>
          {desc && <FormItemDesc>
            {desc}
          </FormItemDesc>}
        </LabelBox>
        <ControlBox>
          <FormItemControl>
            {children}
          </FormItemControl>
        </ControlBox>
      </StyledFormItem>
    )
  }
}

export default FormItem
