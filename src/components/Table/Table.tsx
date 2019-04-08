import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTable } from './styled'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

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
}

/**
 * Table
 */
class Table extends Component<TableProps, any> {

  render() {
    const { className, style, columns, dataSource, align } = this.props
    const classes = classNames('hmly-table', className)

    console.log('columns', columns, dataSource, align)

    const columnsIndex = columns.map((elem: any) => {
      return elem.dataIndex
    })

    return (
      <StyledTable
        className={classes}
        style={style}>
        <table className='table'>
          <TableHeader columns={columns} align={align} />
          <tbody>
          {dataSource.map((elem, index) => {
              return (
                <TableRow
                  columns={columns}
                  columnsIndex={columnsIndex}
                  data={elem}
                  align={align}
                  key={index} />
              )
            })}
            {/* {dataSource.length === 0
              ? <Empty columns={columns} />
              : null
            } */}
          </tbody>
        </table>
      </StyledTable>
    )
  }
}

export default Table
