import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
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
  onPageSizeChange?: (current: number, size: number) => void;
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
    const { onChange, pageSize } = this.props
    onChange && onChange(value, pageSize)
    // console.log('Pagination:onItemClick', value)
  }

  onPrevClick = () => {
    const { onChange, pageSize, current } = this.props
    // 不是第一个
    if (current !== 1) {
      onChange && onChange(current - 1, pageSize)
    }
  }

  onNextClick = () => {
    const { onChange, pageSize, current, total } = this.props
    const pageNum = Math.ceil(total / pageSize)
    // 不是最后一个
    if (current !== pageNum) {
      onChange && onChange(current + 1, pageSize)
    }
  }

  render() {
    const { className, style, current, total, pageSize } = this.props
    const classes = classNames('hmly-pagination', className)
    const pageNum = Math.ceil(total / pageSize)
    // console.log('current, total, pageSize', current, total, pageSize, pageNum)

    let items = []
    for (let index = 0; index < pageNum; index++) {
      const value = index + 1
      items.push(<PageItem
        key={value}
        value={value}
        active={current === value}
        onItemClick={this.onItemClick}>{value}</PageItem>)
    }

    return (
      <StyledPagination
        className={classes}
        style={style}>
        <StyledIcon
          type='prev'
          onClick={this.onPrevClick} />
        {items}
        <StyledIcon type='more' />
        <StyledIcon
          type='next'
          onClick={this.onNextClick} />
      </StyledPagination>
    )
  }
}

export default Pagination
