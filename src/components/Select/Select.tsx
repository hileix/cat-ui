import * as React from 'react'
import { Component } from 'react'
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

  render() {
    const { popoverStatus, selectWidth } = this.state
    const { className, style, placeholder, children } = this.props
    const classes = classNames('hmly-select', {
      'hmly-select-open': popoverStatus
    }, className)

    return (
      <Popover mode='click' onChange={this.onPopoverChange}>
        <Popover.Trigger>
          <StyledSelect
            ref={this.selectRef}
            className={classes}
            style={style}>
            {placeholder}
          </StyledSelect>
        </Popover.Trigger>
        <Popover.Content>
          <StyledOptionBox width={selectWidth}>
            {children}
          </StyledOptionBox>
        </Popover.Content>
      </Popover>
    )
  }
}

export default Select
