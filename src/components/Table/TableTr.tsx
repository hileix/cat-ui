import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTr, StyledTd } from './styled'

export interface TableTrProps {
  /** 每一列需要的所有数据 */
  columns?: Array<any>;
  /** 每一行的数据 */
  data?: any;
  /** 对齐 */
  align?: string;
}

/**
 * TableTr
 */
class TableTr extends Component<TableTrProps, any> {
  toRenderTds = () => {
    const { columns, data } = this.props
    return columns.map((elem: any) => {
      const index = elem.index
      // 渲染字符串或函数返回的DOM
      const result = typeof data[index] === 'function'? data[index]() : data[index]
      return (<StyledTd key={index} className='table-td'>
        <span>{result}</span>
      </StyledTd>)
    })
  }

  render() {
    const { align } = this.props
    const classes = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const tds = this.toRenderTds()

    return (
      <StyledTr className={classes}>
        {tds}
      </StyledTr>
    )
  }
}

export default TableTr
