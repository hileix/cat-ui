import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTh, StyledTableHeader } from './styled'
import { ColumnProps } from './interface'
import * as _ from 'lodash'
import { isEmpty } from 'lodash'
import Icon from '../Icon'

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
      const filterIcon = isEmpty(elem.filters) ? null : (<Icon type='up' />)
      // console.log('filters', elem.filters)

      return (
        <StyledTh key={elem.id} className='table-th'>
          <span className='th-inner'>
            {result}
            {filterIcon}
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
      <StyledTableHeader align={align}>
        <tr className={trClasses}>
          {tds}
        </tr>
      </StyledTableHeader>
    )
  }
}

export default TableHeader
