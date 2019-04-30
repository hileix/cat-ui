import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import * as memoizeOne from 'memoize-one'
import * as isEmpty from 'lodash/isEmpty'
import { StyledTableBox } from './styled'
import { ColumnProps, FilterKeysProps, PaginationProps } from './interface'
import TableTr from './TableTr'
import Empty from './Empty'

import EmptyImg from './styled/empty.png'

export interface TableBodyProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 每一行需要展示的数据	interfaceinterindex */
  dataSource?: Array<any>;
  /** 对齐 */
  align?: string;
  /** 筛选的keys */
  filterKeys: FilterKeysProps;
  /** 分页参数 */
  pagination: PaginationProps;
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * TableBody
 */
class TableBody extends Component<TableBodyProps, any> {

  renderTrs = () => {
    const { columns, dataSource, align, filterKeys, pagination } = this.props
    const { id = '', value = '' } = filterKeys
    const { current, total, pageSize, onChange } = pagination
    const hasPagination = !isEmpty(pagination)
    const begin = (current - 1) * pageSize
    const currentPageData = dataSource.slice(begin, begin + pageSize)
    const showDataSource = hasPagination ? currentPageData : dataSource

    return showDataSource.map((elem, index) => {
      // 筛选dataSource，当前值等于filterKeys或者未选择filterKeys
      if (elem[id] === value || id === '') {
        return (
          <TableTr
            columns={columns}
            data={elem}
            align={align}
            key={index} />
        )
      }
    })
  }

  render() {
    const { columns, dataSource, align, empty, emptyText } = this.props
    const classes = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const trs = this.renderTrs()
    const colSpan = columns.length

    return (
      <tbody>
        {dataSource.length === 0
          ? <Empty
            colSpan={colSpan}
            empty={empty}
            emptyText={emptyText} />
          : (trs)
        }
      </tbody>
    )
  }
}

export default TableBody
