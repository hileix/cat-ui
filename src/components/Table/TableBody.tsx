import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import memoizeOne from 'memoize-one'
import * as isEmpty from 'lodash/isEmpty'
import { StyledTableBox } from './styled'
import { ColumnProps, FilterKeysProps, PaginationProps } from './interface'
import TableTr from './TableTr'
import Empty from './Empty'
import Dragger from '../Dragger'
import EmptyImg from './styled/empty.png'

export interface TableBodyProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 每一行需要展示的数据	interfaceinterindex */
  currentPageData?: Array<any>;
  /** 对齐 */
  align?: string;
  /** 是否可拖拽的 */
  draggable?: boolean;
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
    const { columns, currentPageData, align } = this.props

    return currentPageData.map((element, index) => {
      return (
        <TableTr
          key={index}
          columns={columns}
          data={element}
          align={align} />
      )
    })
  }

  render() {
    const { columns, currentPageData, align, empty, emptyText } = this.props
    // const classes = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const trs = this.renderTrs()
    const colSpan = columns.length

    return (
      <tbody>
        {currentPageData.length === 0
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
