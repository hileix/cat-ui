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
  labelAlign?: string;
  /** label 标签布局 */
  labelWidth?: string | number;
  /** label的向右偏移量 */
  labelOffset?: string | number;
  /** 配置 Form.Item 的 colon 的默认值 */
  colon?: boolean;
  /** 表单提交的回调函数 */
  onSubmit?: (values?: object, errors?: object) => {};
}

/**
 * 表单
 */
class Form extends Component<FormProps, any> {
  static Item: typeof FormItem;
  static defaultProps = {
    colon: false,
    labelAlign: 'left',
    labelOffset: 0
  }

  constructor (props: FormProps) {
    super(props)
    this.state = {
      values: {},
      errors: {},
      isCheck: false
    }
  }

  componentDidMount () {
    const { children } = this.props
    React.Children.map(children, (element: any, index) => {
      if (!element) { return }
      const isNotComponent = typeof element.type === 'string'
      const wrapComponentType = isNotComponent ? '' : element.type.name
      if (isNotComponent || wrapComponentType !== 'FormItem') { return }
      const { values, errors } = this.state
      const child = element.props.children
      const componentType = child.type.name
      const { name } = element.props
      // 根据不同组件类型初始化values、errors列表
      switch (componentType) {
        case 'Button':
          break
        case 'CheckboxGroup':
          values[name] = []
          errors[name] = ''
          break
        case 'RadioGroup':
        case 'Select':
        default:
          values[name] = ''
          errors[name] = ''
          break
      }
      // 根据value或defaultValue初始化values、errors列表
      if ('value' in child.props) {
        values[name] = child.props.value
      } else if ('defaultValue' in child.props) {
        values[name] = child.props.defaultValue
      }
      this.setState({ values: values, errors: errors })
    })
  }

  // 字段改变的回调函数
  onFieldChange = (field: string, value: any, error: string)  => {
    const { values, errors } = this.state
    // 必须有字段名称
    if (field) {
      values[field] = value
      errors[field] = error
      field && this.setState({ values, errors })
    }
  }

  // 提交按钮的点击回调函数
  onSubmitClick = (fn?: (values?: any, errors?: any) => {})  => {
    const { values, errors } = this.state
    this.setState({ isCheck: true }, () => {
      fn(values, errors)
    })
  }

  // 改变Form的isCheck属性
  toggleIsCheck = (isCheck: boolean) => {
    this.setState({ isCheck: isCheck })
  }

  // 表单提交的回调函数
  onFormSubmit = (e: any) => {
    e.preventDefault()
    const { onSubmit } = this.props
    const { values, errors } = this.state
    this.setState({ isCheck: true }, () => {
      onSubmit && onSubmit(values, errors)
    })
  }

  render() {
    const self = this
    const { values, errors, isCheck } = this.state
    const { className, style, labelWidth, labelAlign, labelOffset, colon, children } = this.props
    const classes = classNames('hmly-form', className)
    const items = React.Children.map(children, (element: any, index) => {
      if (!element) { return }
      const isNotComponent = typeof element.type === 'string'
      const wrapComponentType = isNotComponent ? '' :  element.type.name
      if (wrapComponentType === 'FormItem') {
        return cloneElement(element, {
          key: index,
          labelWidth: labelWidth,
          labelAlign: labelAlign,
          labelOffset: labelOffset,
          onFieldChange: self.onFieldChange,
          toggleIsCheck: self.toggleIsCheck,
          isCheck: isCheck,
          colon: colon,
          values: values,
          errors: errors
        })
      } else {
        return element
      }
    })

    // console.log('Form:render', this.state)

    return (
      <StyledForm
        className={classes}
        style={style}
        onSubmit={this.onFormSubmit}>
        {items}
      </StyledForm>
    )
  }
}

export default Form
