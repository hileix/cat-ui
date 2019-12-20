import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import Input from '../Input'
import Selection from '../Selection'
import Option from '../Selection/Option'
import Popover from '../Popover'
import { positionNameConvert } from '../Popover/utils'

export interface ISearchProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 主题风格
   */
  theme?: string;
  /**
   * 禁用搜索
   */
  disabled?: boolean;
  /**
   * 显示清除按钮
   */
  showClear?: boolean;
   /**
   * 显示loading
   */
  showLoading?: boolean;
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
   * 搜索框结果列表
   */
  dataList?: string[];
  /**
   * 搜索框内容发生变化
   */
  onChange?: (value: string) => any;
  /**
   * 选择某个搜索结果
   */
  onSelect?: (selectValue: ISelectValue) => any;
}

export interface ISelectValue {
  type: string;
  id: number;
  value: string;
}

class Search extends React.Component<ISearchProps, any> {
  static proptypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    showClear: PropTypes.bool,
    autoFocus: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    dataList: PropTypes.array,
    showLoading: PropTypes.bool,
    onChange: PropTypes.func,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    disabled: false,
    allowClear: false,
    autoFocus: false,
    showLoading: false,
    placeholder: '',
    dataList: []
  }

  constructor (props) {
    super(props)
    this.state = {
      value: props.value || '',
      visible: true
    }
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props
    onChange && onChange(e.target.value)
  }

  onSelect = ({id, title}) => {
    const { onSelect } = this.props
    onSelect && onSelect({type: 'byOption', id, value: title})
  }


  handleSelect = (value) => {
    console.log('Search:handleSelect', value)
  }

  handlePopoverChange = (visible) => {
    this.setState({
      visible
    })
  }

  renderSelection = (visible: boolean) => {
    console.log('visible', visible)
    const { openSelectMenu } = this.state

    if (!visible) {
      return null
    }

    return (
      <Selection
        value='选项 2'
        onSelect={this.handleSelect}
      >
        <Option className='qwer' value='选项 1'>
          <input type="text"/>
        </Option>
        <Option value='选项 2' />
        <Option value='选项 3' />
        <Option value='选项 4' />
        <Option value='选项 5' />
      </Selection>
    )
  }

  render () {
    // const { id, theme, className = '', value, placeholder, search, allowClear, disabled, autoFocus,
    //   dataSource = [], showLoading, children, focus = false, max, distance, useTransparent } = this.props
    const { theme, className = '', value, placeholder, disabled, autoFocus, showLoading, showClear } = this.props
    // const showSelect = dataSource.length > 0 || showLoading
    const { visible } = this.state
    const classes = classNames('search-wrap', {
      [theme]: focus || value
    })

    return (
      <div className={classes}>
        <Popover
          mode='click'
          {...positionNameConvert('bottomLeft')}
          visible={visible}
          onChange={this.handlePopoverChange}
        >
          <Popover.Trigger>
            <Input
              className={className}
              placeholder={placeholder}
              autoFocus={autoFocus}
              disabled={disabled}
              value={value}
              onChange={this.onInputChange}
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
