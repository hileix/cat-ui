import * as React from 'react'
import * as PropTypes from 'prop-types'
import keycode from 'keycode'
import classNames from 'classnames'
import Input from '../Input'
import Selection from '../Selection'
import Option from '../Selection/Option'
import Popover from '../Popover'
import { positionNameConvert } from '../Popover/utils'

interface IDataSource {
  value: string;
  render: React.ReactNode
}

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
   * 搜索列表样式
   */
  selectionClassName?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 禁用搜索
   */
  disabled?: boolean;
  /**
   * 搜索列表 x 方向偏移
   */
  offsetX?: boolean;
  /**
   * 搜索列表 y 方向偏移
   */
  offsetY?: boolean;
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
  dataSource?: (string | IDataSource)[];
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

export interface ISearchState {
  value: string;
  visible: boolean;
}

class Search extends React.Component<ISearchProps, ISearchState> {
  static proptypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    selectionClassName: PropTypes.string,
    style: PropTypes.object,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
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
    offsetX: 0,
    offsetY: 5,
    disabled: false,
    allowClear: false,
    autoFocus: false,
    loading: false,
    placeholder: ''
  }

  static Option: typeof Option;

  constructor (props: ISearchProps) {
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

  hanldeKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const { onSearch } = this.props

    e.persist()

    setTimeout(() => {
      if (keycode(e as any) === 'enter') {
        onSearch && onSearch(this.state.value)
      }
    }, 0)
  }

  handleBlur = (e: any) => {
    e.persist();

    setTimeout(() => {
      this.setState({
        visible: false
      })
    }, 200);
  }

  handleSelect = (value: any) => {
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

  handlePopoverChange = (visible: boolean) => {
    this.setState({
      visible
    })
  }

  renderOption = () => {
    const { dataSource = [], children } = this.props

    if ('dataSource' in this.props) {
      return dataSource.map(item => {
        if (typeof item === 'string') {
          return (
            <Option key={item} value={item} />
          )
        }
  
        const { value, render } = item
  
        return (
          <Option key={value} value={value} >
            {render}
          </Option>
        )
      })
    }

    return children
  }

  renderSelection = () => {
    const { selectionClassName } = this.props
    const { visible } = this.state
    
    return (
      <Selection
        visible={visible}
        className={selectionClassName}
        onSelect={this.handleSelect}
      >
        {this.renderOption()}
      </Selection>
    )
  }

  render () {
    const { prefix, className = '', offsetX, offsetY, placeholder, disabled, autoFocus, loading } = this.props
    const { value, visible } = this.state
    const classes = classNames(`${prefix}-search-wrap`, className)

    return (
      <div className={classes}>
        <Popover
          mode='click'
          visible={visible}
          offsetX={offsetX}
          offsetY={offsetY}
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
              onBlur={this.handleBlur}
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
