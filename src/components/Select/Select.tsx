import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledSelect, StyledOptionBox } from './styled'
import Option from './Option'
import Popover from '../Popover'

export interface SelectProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 默认提示文案 */
  placeholder?: string;
  /** 指定当前选中的条目；为空字符串时，显示placeholder */
  value?: string | number;
  /** 选中option时的value变化 */
  onChange?: any;
}

/**
 * 下拉选择
 */
class Select extends Component<SelectProps, any> {
  static Option: typeof Option
  private selectRef: any;

  constructor (props: SelectProps) {
    super(props)
    this.state = {
      popoverStatus: false,
      selectWidth: 'auto'
    }
    this.selectRef = React.createRef()
  }

  componentDidMount () {
    const selectDOM = this.selectRef.current
    if (selectDOM) {
      const selectRect = selectDOM.getBoundingClientRect()
      const { width } = selectRect
      this.setState({ selectWidth: width + 'px' })
    }
  }

  onPopoverChange = (value: boolean) => {
    this.setState({ popoverStatus: value })
  }

  onOptionClick = (value: string | number) => {
    const { onChange } = this.props
    onChange && onChange(value)
  }

  render() {
    const self = this
    const { popoverStatus, selectWidth } = this.state
    const { className, style, value, placeholder, children } = this.props
    const options =  React.Children.map(children, (element: any, index) => {
      if (!element) { return element }
      return cloneElement(element, {
        key: index,
        onOptionClick: self.onOptionClick
      })
    })
    const isValueEmpty = value === '' || (typeof value === undefined)
    const filler = isValueEmpty ? placeholder : value
    const classes = classNames('hmly-select', {
      'hmly-select-open': popoverStatus,
      'hmly-select-placeholder': isValueEmpty
    }, className)

    return (
      <Popover mode='click' onChange={this.onPopoverChange}>
        <Popover.Trigger>
          <StyledSelect
            ref={this.selectRef}
            className={classes}
            style={style}>
            {filler}
          </StyledSelect>
        </Popover.Trigger>
        <Popover.Content>
          <StyledOptionBox width={selectWidth}>
            {options}
          </StyledOptionBox>
        </Popover.Content>
      </Popover>
    )
  }
}

export default Select
