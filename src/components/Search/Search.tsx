import * as React from 'react'
import * as PropTypes from 'prop-types'
import keycode from 'keycode'
import classNames from 'classnames'
import Input from '../Input'
import Selection from '../Selection'
import Option from '../Selection/Option'
import Popover from '../Popover'
import { positionNameConvert } from '../Popover/utils'
import './style/Search.scss'

export interface ISearchProps {
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
   * 禁用搜索
   */
  disabled?: boolean;
  /**
   * 显示清除按钮
   */
  allowClear?: boolean;
   /**
   * 显示loading
   */
  loading?: boolean;
  /**
   * 自动聚焦
   */
  autoFocus?: boolean;
  /**
   * 搜索框默认占位符
   */
  placeholder?: string;
  /**
   * 搜索框内容
   */
  value?: string;
  /**
   * 搜索框结果数据源
   */
  dataSource?: [];
  /**
   * 搜索框内容发生变化时调用
   */
  onChange?: (value: string) => any;
  /**
   * 搜索补全项的时候调用
   */
  onSearch?: (value: string) => any;
  /**
   * 被选中时调用，参数为选中项的 value 值
   */
  onSelect?: (value: string) => any;
}

export interface ISelectValue {
  type: string;
  id: number;
  value: string;
}

class Search extends React.Component<ISearchProps, any> {
  static proptypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    allowClear: PropTypes.bool,
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    dataSource: PropTypes.array,
    loading: PropTypes.bool,
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    prefix: 'cat',
    disabled: false,
    allowClear: false,
    autoFocus: false,
    loading: false,
    placeholder: '',
    dataSource: []
  }

  constructor (props) {
    super(props)
    this.state = {
      value: props.value || '',
      visible: false
    }
  }

  static getDerivedStateFromProps(nextProps: ISearchProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    const value = e.target.value

    if (!('value' in this.props)) {
      this.setState({
        value
      })
    }
    
    onChange && onChange(e.target.value)
  }

  hanldeKeyDown = e => {
    const { onSearch } = this.props
    e.persist()

    setTimeout(() => {
      if (keycode(e) === 'enter') {
        onSearch && onSearch(this.state.value)
      }
    }, 0)
  }

  handleSelect = (value) => {
    const { onSelect } = this.props

    if (!('value' in this.props)) {
      this.setState({
        value
      })
    }

    this.setState({
      visible: false
    })

    onSelect && onSelect(value)
  }

  handlePopoverChange = (visible) => {
    this.setState({
      visible
    })
  }

  renderSelection = () => {
    const { dataSource } = this.props
    const { visible } = this.state
    let options = dataSource || []

    return (
      <Selection
        visible={visible}
        onSelect={this.handleSelect}
      >
        {options.map(item => (
          <Option key={item} value={item} />
        ))}
      </Selection>
    )
  }

  render () {
    const { prefix, className = '', placeholder, disabled, autoFocus, loading } = this.props
    const { value, visible } = this.state
    const classes = classNames(`${prefix}-search-wrap`, className)

    return (
      <div className={classes}>
        <Popover
          mode='click'
          visible={visible}
          {...positionNameConvert('bottomLeft')}
          onChange={this.handlePopoverChange}
        >
          <Popover.Trigger>
            <Input
              className='search-input'
              type='box'
              placeholderOrigin
              placeholder={placeholder}
              autoFocus={autoFocus}
              disabled={disabled}
              value={value}
              onChange={this.handleInputChange}
              onKeyDown={this.hanldeKeyDown}
            />
          </Popover.Trigger>
          <Popover.Content>
            {this.renderSelection}
          </Popover.Content>
        </Popover>
      </div>
    )
  }
}

export default Search
