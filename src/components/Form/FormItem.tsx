import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import * as noop from 'lodash/noop'
import Icon from '../Icon'
import Tooltip from '../Tooltip'
import { StyledFormItem, FormItemLabel, FormItemControl, LabelBox,
  ControlBox, FormItemDesc, ItemError, LabelIcon } from './styled'
export interface FormItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 字段名称 */
  name: string;
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
  /** 提示信息 */
  tips?: string | React.ReactNode;
  /** 校验规则 */
  check?: (field?: any) => {};
  /** 字段改变的回调函数 */
  onFieldChange?: (field: string, value: any, error: string) => {};
  /** 点击submit按钮的回调函数 */
  onSubmitClick?: (fn?: (values?: any, errors?: any) => {}) => {};
  /** 设置子元素 label htmlFor 属性 */
  htmlFor?: string;
  /** 是否显示 label 后面的冒号 */
  colon?: boolean;
}

/**
 * FormItem
 */
class FormItem extends Component<FormItemProps, any> {
  private formItemRef: any;
  constructor (props: FormItemProps) {
    super(props)
    this.state = {
      value: '',
      error: ''
    }
    this.formItemRef = React.createRef()
  }

  static defaultProps = {
    colon: false
  }

  componentDidMount () {
    const { children } = this.props
    const { props = {} } = children as React.ReactElement<any>
    const { defaultValue, value } = props
    if ('value' in props) {
      this.setState({ value: value })
    } else if ('defaultValue' in props) {
      this.setState({ value: defaultValue })
    }
    // console.log('FormItem:componentDidMount', defaultValue, value)
  }

  componentDidUpdate () {
    const { error } = this.state
    if (Boolean(error)) {
      const element = this.formItemRef.current
      const eleRect = element.getBoundingClientRect()
      const { top = 0 } = eleRect
      // 表单有错误且元素在屏幕视野之外
      if (element && top < 0) {
        element.scrollIntoView({ behavior: 'instant', block: 'center' })
      }
    }
  }

  handleItemChange = (value: any) => {
    const { check = noop, name, onFieldChange, children } = this.props
    const { props = {}, type = {}  } = children as React.ReactElement<any>
    const { onChange } = props
    const error = check(value)
    this.setState({ error: error })
    onChange && onChange(value)
    onFieldChange && onFieldChange(name, value, error)
    console.log('FormItem:handleItemChange:error', check, value, error)
  }

  // 提交按钮的点击回调函数
  handleSubmitClick = (e: any)  => {
    const { children, onSubmitClick } = this.props
    const { props: {onClick} } = children as any
    onSubmitClick(onClick)
    // console.log('FormItem:handleSubmitClick')
  }

  render() {
    const self = this
    const { error } = this.state
    const { className, style, label, desc, tips, labelWidth, labelAlign,
      required, children } = this.props
    const classes = classNames('hmly-form-item', className)
    const labelBoxClass = classNames({ 'hmly-form-label-required': required })
    const { type: {name: componentType} } = children as any
    let item
    if (componentType === 'Button') {
      item = cloneElement(children as React.ReactElement<any>, {
        onChange: self.handleItemChange,
        onClick: self.handleSubmitClick
      })
    } else if (componentType === 'Input') {
      item = cloneElement(children as React.ReactElement<any>, {
        onChange: (e: any) => {self.handleItemChange(e.target.value)},
        onClick: self.handleSubmitClick
      })
    } else {
      item = cloneElement(children as React.ReactElement<any>, {
        onChange: self.handleItemChange
      })
    }

    return (
      <StyledFormItem
        className={classes}
        style={style}
        ref={this.formItemRef}>
        <LabelBox width={labelWidth} className={labelBoxClass}>
          <FormItemLabel>
            {label}
            {Boolean(tips) &&
              <Tooltip content={tips}>
                <LabelIcon type='question-circle' />
              </Tooltip>
            }
          </FormItemLabel>
          {Boolean(desc) && <FormItemDesc>
            {desc}
          </FormItemDesc>}
        </LabelBox>
        <ControlBox>
          <FormItemControl>
            {item}
          </FormItemControl>
          {Boolean(error) && <ItemError>
            {error}
          </ItemError>}
        </ControlBox>
      </StyledFormItem>
    )
  }
}

export default FormItem
