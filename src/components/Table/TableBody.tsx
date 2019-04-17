import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import * as memoizeOne from 'memoize-one'
import { StyledTableBox } from './styled'
import { ColumnProps } from './interface'
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
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * TableBody
 */
class TableBody extends Component<TableBodyProps, any> {

  toRenderTrs = () => {
    const { columns, dataSource, align } = this.props
    return dataSource.map((elem, index) => {
      return (
        <TableTr
          columns={columns}
          data={elem}
          align={align}
          key={index} />
      )
    })
  }

  render() {
    const { columns, dataSource, align, empty, emptyText } = this.props
    const classes = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const trs = this.toRenderTrs()
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
