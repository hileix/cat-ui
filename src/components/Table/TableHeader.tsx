import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTable } from './styled'

export interface TableHeaderProps {
  /** 每一列需要的所有数据 */
  columns?: Array<string>;
  /** 对齐 */
  align?: string;
}

/**
 * TableHeader
 */
class TableHeader extends Component<TableHeaderProps, any> {

  render() {
    const { columns, align } = this.props
    const classes = classNames({
      'hmly-table-thead': true,
      [`hmly-table-thead-${align}`]: align
    })

    return (
      <thead>
        <tr>
        {columns.map((elem: any) => {
          let _render = elem.render // 渲染字符串或数字
          // 渲染函数返回的DOM
          if (typeof elem.render === 'function') {
            _render = elem.render()
          }
          return (
            <th key={elem.dataIndex} className='table-th'>
              <span className='th-inner'>
                {_render}
              </span>
            </th>
          )
        })}
      </tr>
      </thead>
    )
  }
}

export default TableHeader
