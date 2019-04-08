import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTable } from './styled'

export interface TableRowProps {
  /** 每一列需要的所有数据 */
  columns?: Array<string>;
  /** 每一列需要的所有数据 */
  columnsIndex?: Array<string>;
  /** 对齐 */
  align?: string;
  /** 数据 */
  data?: any;
}

/**
 * Table
 */
class TableRow extends Component<TableRowProps, any> {

  render() {
    const { columnsIndex, data, align } = this.props
    const classes = classNames({
      'hmly-table-row': true,
      [`hmly-table-row-${align}`]: align
    })

    return (
      <tr className={classes}>
        {columnsIndex.map((elem: any, index) => {
          let _render = data[elem] // 渲染字符串或数字
          // 若是函数，则渲染函数返回的DOM
          if (typeof data[elem] === 'function') {
            _render = data[elem]()
          }
          return (<td key={index} className='table-td'>
            <span>{_render}</span>
          </td>)
        })}
      </tr>
    )
  }
}

export default TableRow
