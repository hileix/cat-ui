import * as React from 'react'
import * as PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'
import classNames from 'classnames'
import Selection from '../Selection'
import Option from '../Selection/Option'
import Popover from '../Popover'
import { positionNameConvert } from '../Popover/utils'

export interface ISelectProps {
  /**
   * 样式前缀
   */
  prefix?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 宽度
   */
  width?: string | number;
  /**
   * 禁用搜索
   */
  disabled?: boolean;
  /**
   * 指定默认选中的项
   */
  defaultValue?: string;
  /**
   * 指定当前选中的项
   */
  value?: string;
  /**
   * 选择的项发生变化时调用
   */
  onChange?: (value: string) => void;
  /**
   * 选择一项时调用
   */
  onSelect?: (value: string) => void;
}

export interface ISelectState {
  /**
   * 当前选择项的值
   */
  value: string;
  /**
   * 是否显示选项列表
   */
  visible: boolean
}

class Select extends React.Component<ISelectProps, ISelectState> {
  static proptypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    prefix: 'cat',
    width: 'inherit',
    disabled: false
  }

  constructor (props: ISelectProps) {
    super(props)
    const { defaultValue, value } = props
    this.state = {
      value: defaultValue || value || '',
      visible: false
    }
  }

  static Option: typeof Option;

  static getDerivedStateFromProps(nextProps: ISelectProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  handlePopoverChange = (visible: boolean) => {
    this.setState({
      visible
    })
  }

  handleSelect = (value: any) => {
    const { onSelect, onChange } = this.props

    if (!('value' in this.props)) {
      this.setState({
        value
      })
    }

    this.setState({
      visible: false
    })

    onSelect && onSelect(value)

    if (value !== this.state.value) {
      onChange && onChange(value)
    }
  }

  renderSelection = () => {
    const { prefix, defaultValue, value, width, children } = this.props
    const { visible } = this.state

    return (
      <CSSTransition
        timeout={300}
        in={visible}
        classNames='visible'
        unmountOnExit
        mountOnEnter
        appear
      >
        <Selection
          className={`${prefix}-select-selection`}
          style={{width}}
          visible={visible}
          defaultValue={defaultValue || value || ''}
          onSelect={this.handleSelect}
        >
          {children}
        </Selection>
      </CSSTransition>
    )
  }

  handleClick = () => {
    const { disabled } = this.props

    if (disabled) {
      return
    }

    this.setState((prevState) => ({
      visible: !prevState.visible
    }))
  }

  renderArrow = () => {
    return (
      <i className='select-arrow'>
        <svg viewBox="64 64 896 896" focusable="false" className="" data-icon="down" width="1em" height="1em" fill="currentColor" aria-hidden="true">
          <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
        </svg>
      </i>
    )
  }

  render () {
    const { prefix, style, className = '', width, disabled } = this.props
    const { value } = this.state
    const classes = classNames(`${prefix}-select-wrap`, className)
    let selectedStyle: React.HTMLAttributes<HTMLSpanElement> = {}

    if (!disabled) {
      selectedStyle.tabIndex = 0
    }

    return (
      <div className={classes} style={style}>
        <Popover
          mode='click'
          {...positionNameConvert('bottomLeft')}
          onChange={this.handlePopoverChange}
        >
          <Popover.Trigger disabled={disabled}>
          <span
            className={
              classNames('selected-section', {
                'disabled': disabled
              })
            }
            style={{width}}
            {...selectedStyle}
            onClick={this.handleClick}
          >
            {value}
            {this.renderArrow()}
          </span>
          </Popover.Trigger>
          <Popover.Content>
            {this.renderSelection}
          </Popover.Content>
        </Popover>
      </div>
    )
  }
}

export default Select
