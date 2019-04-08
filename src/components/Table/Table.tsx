import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTable } from './styled'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export interface TableProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 每一列需要的所有数据 */
  columns?: Array<any>;
  /** 每一行需要展示的数据	 */
  dataSource?: Array<any>;
  /** 对齐 */
  align?: string;
  /** 空模板的文案 */
  emptyText: string;
}

/**
 * 表格（列表）
 */
class Table extends Component<TableProps, any> {
  static defaultProps = {
    align: 'left',
    emptyText: ''
  }

  render() {
    const { className, style, columns, dataSource, align, emptyText } = this.props
    const classes = classNames('hmly-table', className)

    return (
      <StyledTable
        className={classes}
        style={style}>
        <table className='table'>
          <TableHeader
            columns={columns}
            align={align} />
          <TableBody
            columns={columns}
            align={align}
            dataSource={dataSource}
            emptyText={emptyText} />
        </table>
      </StyledTable>
    )
  }
}

export default Table
