import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import * as isEmpty from 'lodash/isEmpty'
import { StyledTableBox, StyledPaginationBox } from './styled'
import { ColumnProps, PaginationProps } from './interface'
import TableHeader from './TableHeader'
import TableBody from './TableBody'
import Pagination from '../Pagination'

export interface TableProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 每一行需要展示的数据 */
  dataSource: Array<any>;
  /** 对齐 */
  align?: 'left' | 'center';
  /** 分页参数 */
  pagination: PaginationProps;
  /** 筛选栏的回调函数 */
  onFilterChange?: (id?: any, value?: any) => {};
  /** 翻页的回调函数 */
  onPageChange?: (page?: number) => {};
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * 表格（列表）
 */
class Table extends Component<TableProps, any> {
  static defaultProps = {
    align: 'left',
    emptyText: '',
    pagination: {}
  }

  constructor (props: TableProps) {
    super(props)
    this.state = {
      filterKeys: {},
      pageTotal: 0,
      filterDataSource: props.dataSource,
      currentPageData: props.dataSource
    }
  }

  static getDerivedStateFromProps(nextProps: TableProps) {
    if ('dataSource' in nextProps) {
      return {
        filterDataSource: nextProps.dataSource,
        currentPageData: nextProps.dataSource
      }
    }
    return null
  }

  componentDidMount () {
    if (this.hasPagination()) {
      const { pagination } = this.props
      const { total = 0 } = pagination
      this.setState({ pageTotal: total })
      this.pagingDataSource()
    }
  }

  hasPagination = () => {
    return !isEmpty(this.props.pagination)
  }

  // 对数据进行分页
  pagingDataSource = (currentArg?: number) => {
    const { pagination } = this.props
    const { filterDataSource } = this.state
    const { current, pageSize } = pagination
    // 优先采用传入的current
    const currentPage = currentArg || current
    const begin = (currentPage - 1) * pageSize
    // 分页后当前页面显示的数据
    const currentPageData = filterDataSource.slice(begin, begin + pageSize)
    if (this.hasPagination()) {
      this.setState({ currentPageData: currentPageData })
    }
  }

  // 选择了筛选栏之后的回调函数
  onFilterSelect = (id: any, value: any) => {
    const { dataSource, onFilterChange } = this.props
    onFilterChange && onFilterChange(id, value)
    const _filterKeys = { id: id, value: value }
    this.setState({ filterKeys: _filterKeys })
    // 暂时注释掉Table内部翻页
    // const _filterKeys = { id: id, value: value }
    // // 筛选dataSource，当前值等于filterKeys或者未选择filterKeys
    // const filterDataSource = dataSource.filter((elem, index) => {
    //   if (elem[id] === value || value === '') {
    //     return elem
    //   }
    // })
    // // 是否需要分页
    // if (this.hasPagination()) {
    //   // 选择筛选栏时，应该跳至第一页
    //   this.onPaginationChange(1)
    //   this.setState({
    //     filterKeys: _filterKeys,
    //     filterDataSource: filterDataSource,
    //     pageTotal: filterDataSource.length
    //   }, () => {
    //     this.pagingDataSource()
    //   })
    // } else {
    //   this.setState({
    //     filterKeys: _filterKeys,
    //     filterDataSource: filterDataSource,
    //     currentPageData: filterDataSource
    //   })
    // }
  }

  // 分页点击之后的回调函数
  onPaginationChange = (page: number) => {
    const { pagination, onPageChange } = this.props
    onPageChange && onPageChange(page)
    // 暂时注释掉Table内部翻页
    const { onChange } = pagination
    onChange && onChange(page)
    this.pagingDataSource(page)
  }

  render() {
    const { filterKeys, currentPageData, pageTotal } = this.state
    const { className, style, columns, align, pagination, empty, emptyText } = this.props
    const { current, pageSize } = pagination
    const classes = classNames('hmly-table', className)
    // console.log('Table:render', pageSize)

    return (
      <StyledTableBox
        className={classes}
        style={style}>
        <table className='table'>
          <TableHeader
            align={align}
            columns={columns}
            filterKeys={filterKeys}
            onFilterSelect={this.onFilterSelect} />
          <TableBody
            align={align}
            columns={columns}
            currentPageData={currentPageData}
            empty={empty}
            emptyText={emptyText} />
        </table>
        {this.hasPagination() && <StyledPaginationBox>
          <Pagination
            current={current}
            total={pageTotal}
            pageSize={pageSize}
            onChange={this.onPaginationChange} />
        </StyledPaginationBox>}
      </StyledTableBox>
    )
  }
}

export default Table
