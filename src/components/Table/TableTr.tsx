import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTr, StyledTd } from './styled'
import { ColumnProps } from './interface'

export interface TableTrProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 每一行的数据 */
  data?: any;
  /** 对齐 */
  align?: string;
}

/**
 * TableTr
 */
class TableTr extends Component<TableTrProps, any> {
  renderTds = () => {
    const { columns, data } = this.props
    return columns.map((elem: any) => {
      const id = elem.id
      // 渲染字符串或函数返回的DOM
      const result = typeof data[id] === 'function'? data[id]() : data[id]
      return (<StyledTd key={id} className='table-td'>
        {elem.render
          ? elem.render(result, data)
          : <span>{result}</span>
        }
      </StyledTd>)
    })
  }

  render() {
    const { align } = this.props
    const classes = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const tds = this.renderTds()

    return (
      <StyledTr className={classes}>
        {tds}
      </StyledTr>
    )
  }
}

export default TableTr
