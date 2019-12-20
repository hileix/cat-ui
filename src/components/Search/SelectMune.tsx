import * as React from 'react'
import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import Loading from '../Loading'
import './style/SelectMenu.scss'

export interface SelectMuneProps {
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
   * 选择的内容
   */
  value?: string;
  /**
   * 搜索框结果列表
   */
  dataList?: string[];
  /**
   * 选择某个搜索结果
   */
  onSelect?: (selectValue: string) => any;
}

interface SelectMuneState {
  /**
   * 选中项的索引
   */
  activedIndex: number;
  /**
   * 选中项相对于可视窗口的X坐标
   */
  clientX: number;
  /**
   * 选中项相对于可视窗口的Y坐标
   */
  clientY: number;
}

class SelectMune extends React.Component<SelectMuneProps, SelectMuneState> {
  static proptypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    theme: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    dataList: PropTypes.array,
    onSelect: PropTypes.func
  }

  static defaultProps = {
    dataList: []
  }

  constructor (props) {
    super(props)
    this.state = {
      activedIndex: -1,
      clientX: 0,
      clientY: 0
    }
  }

  private handleKeys = (e) => {
    // const { dataList, max = 4, distance = 64 } = this.props
    // const { activedIndex } = this.state
    // const keyCode = e.keyCode
    // const lastIndex = dataList.length - 1

    // if (keyCode === 38) {
    //   const index = (activedIndex === -1 || activedIndex === 0) ? lastIndex : (activedIndex - 1)
    //   this.updateActiveIndex(index)
    //   if (dataList.length > 0) e.preventDefault()
    //   if (index === (max - 1)) {
    //     this.container.scrollTop = 0
    //   } else if (index === lastIndex) {
    //     this.container.scrollTop = 2000
    //   } else if ((index > (max - 1)) && ((index + 1) % max === 0)) {
    //     this.container.scrollTop = distance * (index - max + 1)
    //   }
    // } else if (keyCode === 40) {
    //   const index = (activedIndex === -1 || activedIndex === lastIndex) ? 0 : activedIndex + 1
    //   this.updateActiveIndex(index)
    //   if (dataList.length > 0) e.preventDefault()
    //   if ((index >= max) && (index % max === 0)) {
    //     this.container.scrollTop = distance * index
    //   } else if (index === 0) {
    //     this.container.scrollTop = 0
    //   }
    // } else if (keyCode === 13) {
    //   const id = (dataList && dataList[activedIndex] && dataList[activedIndex]['id']) || ''
    //   const value = (dataList && dataList[activedIndex] && dataList[activedIndex]['title']) || ''
    //   onEnter && onEnter({id, value})
    // }
  }

  private updateActiveIndex = (index) => {
    // const { dataList, onKeySelect } = this.props
    // this.setState({
    //   activedIndex: index
    // }, () => {
    //   const item = dataList[index] || {}
    //   if (dataList.length > 0) onKeySelect && onKeySelect(item)
    // })
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeys)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeys)
  }

  onSelect (item) {
    const { onSelect } = this.props
    onSelect && onSelect(item)
  }

  renderChildren (children) {
    return React.Children.map(children, (element, index) => {
      if (!element) return element
      return React.cloneElement(element, {
        id: 1
      })
    })
    // let filler;

    // const options = React.Children.map(children, (element: any, index) => {
    //   if (!element) {
    //     return element;
    //   }
    //   const self = this;
    //   // 显示value值对应的文本内容
    //   if (element.props && element.props.value === value) {
    //     filler = element.props.children;
    //   }
    //   return React.cloneElement(element, {
    //     key: index,
    //     onOptionClick: self.onOptionClick
    //   });
    // });
  }

  private onMouseEnter = (activedIndex, e) => {
    const { clientX, clientY } = this.state
    if (e.clientX === clientX && e.clientY === clientY) return
    this.setState({
      activedIndex,
      clientX: e.clientX,
      clientY: e.clientY
    })
  }

 

  getItemCls = ({cls, index, activedIndex}) => {
    return classNames(cls, {
      actived: index === activedIndex
    })
  }

  render () {
    const { dataList, children, theme } = this.props
    const { activedIndex } = this.state

    // const wrapClass = classNames('select-wrap', theme, {
    //   loading: requesting,
    //   'show-select': dataList.length > 0 || requesting
    // })
    const containerClass = classNames('container', {
      noScrollBar: dataList.length < 4
    })

    return (
      <div className='select-menu-wrap'>
        {this.renderChildren(children)}
        {/* <div className={containerClass} ref={ret => { this.container = ret }}>
          {requesting
            ? <Loading className='select-loading' />
            : dataList && dataList.map((item, index) => {
              const key = item.id || index
              return (
                children && <div key={key}
                  className={this.getItemCls({cls: 'item', index, activedIndex})}
                  onClick={() => { this.onSelect(item) }}
                  onMouseEnter={(e) => { this.onMouseEnter(index, e) }}>
                  {this.designChildren(children, item)}
                </div>
              ) || <div key={key}
                className={this.getItemCls({cls: 'default-option', index, activedIndex})}
                item={item}
                onClick={() => { this.onSelect(item) }}
                onMouseEnter={(e) => { this.onMouseEnter(index, e) }}>
                {item.title}
              </div>
            })}
        </div> */}
      </div>
    )
  }
}
export default SelectMune
