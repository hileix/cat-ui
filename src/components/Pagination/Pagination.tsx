import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
// import * as memoize from 'memoize-one'
import memoizeOne from 'memoize-one'
import * as isNumber from 'lodash/isNumber'
import { StyledPagination, StyledIcon } from './styled'
import PageItem from './PageItem'

export interface PaginationProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 当前页数 */
  current?: number;
  /** 数据总数 */
  total?: number;
  /** 每页条数 */
  pageSize?: number;
  /** 分页大小改变时候的回调函数 */
  onPageSizeChange?: (current: number) => void;
  /** 每页条数 */
  onChange?: (page: number, pageSize?: number) => void;
}

/**
 * 分页
 */
class Pagination extends Component<PaginationProps, any> {
  static defaultProps = {
    pageSize: 10
  }

  constructor (props: PaginationProps) {
    super(props)
    this.state = {}
  }

  onItemClick = (value: number) => {
    const { onChange } = this.props
    onChange && onChange(value)
  }

  onPrevClick = () => {
    const { onChange, pageSize, current } = this.props
    // 不是第一个
    if (current > 1) {
      onChange && onChange(current - 1, pageSize)
    }
  }

  onNextClick = () => {
    const { onChange, pageSize, current, total } = this.props
    const pageNum = Math.ceil(total / pageSize)
    // 不是最后一个
    if (current < pageNum) {
      onChange && onChange(current + 1, pageSize)
    }
  }

  // 计算带省略号的页码
  calculateShowPages = (current: number, pageNum: number, bufferSize: number) => {
    let res: Array<number | string> = [current]
    for (let i = 1; i <= bufferSize; i++) {
      if (current - i > 1)  { res = [current - i, ...res] }
      if (current + i < pageNum)  { res = [...res, (current + i)] }
    }
    if (current - (bufferSize + 1) > 1) { res = ['...', ...res] }
    if (current > 1) { res = [1, ...res] }
    if (current + bufferSize + 1 < pageNum) { res = [...res, ' ...']}
    if (current < pageNum) { res = [...res, pageNum] }
    return res
  }

  renderItems = memoizeOne((current: number, total: number, pageSize: number) => {
    const pageNum = Math.ceil(total / pageSize)
    const res = this.calculateShowPages(current, pageNum, 2)
    return res.map((element, index) => {
      if (isNumber(element)) {
        return (
          <PageItem
            key={element}
            value={element}
            active={current === element}
            onItemClick={this.onItemClick}>
            {element}
          </PageItem>
        )
      } else {
        return (<StyledIcon key={`more+${index}`} type='more' />)
      }
    })
  })

  render() {
    const { className, style, current, total, pageSize } = this.props
    const classes = classNames('hmly-pagination', className)
    const items = this.renderItems(current, total, pageSize)
    // console.log('current, total, pageSize', memoizeOne)

    return (
      <StyledPagination
        className={classes}
        style={style}>
        <StyledIcon
          type='prev'
          onClick={this.onPrevClick} />
        {items}
        <StyledIcon
          type='next'
          onClick={this.onNextClick} />
      </StyledPagination>
    )
  }
}

export default Pagination
