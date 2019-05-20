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
      error: ''
    }
    this.formItemRef = React.createRef()
  }

  static defaultProps = {
    colon: false
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

  onItemChange = (value: any) => {
    const { check = noop, children } = this.props
    const { props = {} } = children as React.ReactElement<any>
    const { onChange } = props
    const error = check(value)
    this.setState({ error: error })
    // console.log('FormItem:onItemChange', value, check, this.props)
    console.log('FormItem:onItemChange:error', value, error)
    onChange && onChange(value)
  }

  render() {
    const self = this
    const { error } = this.state
    const { className, style, label, desc, tips, labelWidth, labelAlign,
      required, children } = this.props
    const classes = classNames('hmly-form-item', className)
    const labelBoxClass = classNames({ 'hmly-form-label-required': required })
    const item = cloneElement(children as React.ReactElement<any>, {
      key: 'childrenElement',
      onChange: self.onItemChange
    })

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
