import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTh } from './styled'
import { ColumnProps } from './interface'

export interface TableHeaderProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
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
        <StyledTh key={elem.id} className='table-th'>
          <span className='th-inner'>
            {result}
          </span>
        </StyledTh>
      )
    })
  }

  render() {
    const { align } = this.props
    const trClasses = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const tds = this.toRenderTds()

    return (
      <thead className='hmly-table-thead'>
        <tr className={trClasses}>
          {tds}
        </tr>
      </thead>
    )
  }
}

export default TableHeader
