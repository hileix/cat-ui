import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTableBox } from './styled'
import { ColumnProps } from './interface'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

export interface TableProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 每一列需要的所有数据 */
  columns?: Array<ColumnProps>;
  /** 每一行需要展示的数据	 */
  dataSource?: Array<any>;
  /** 对齐 */
  align?: 'left' | 'center';
  /** 空模板的文案 */
  empty: string | React.ReactNode;
}

/**
 * 表格（列表）
 */
class Table extends Component<TableProps, any> {
  static defaultProps = {
    align: 'left',
    empty: ''
  }

  render() {
    const { className, style, columns, dataSource, align, empty } = this.props
    const classes = classNames('hmly-table', className)

    return (
      <StyledTableBox
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
            empty={empty} />
        </table>
      </StyledTableBox>
    )
  }
}

export default Table
