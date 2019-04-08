import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTable } from './styled'

export interface TableHeaderProps {
  /** 每一列需要的所有数据 */
  columns?: Array<any>;
  /** 对齐 */
  align?: string;
}

/**
 * TableHeader
 */
class TableHeader extends Component<TableHeaderProps, any> {

  toRenderTds = () => {
    const { columns } = this.props
    return columns.map((elem: any) => {
      // 渲染字符串或函数返回的DOM
      const result = typeof elem.render === 'function' ? elem.render() : elem.render
      return (
        <th key={elem.index} className='table-th'>
          <span className='th-inner'>
            {result}
          </span>
        </th>
      )
    })
  }

  render() {
    const { align } = this.props
    const classes = classNames('hmly-table-thead', `hmly-table-thead-${align}`)
    const tds = this.toRenderTds()

    return (
      <thead className={classes}>
        <tr>
          {tds}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
