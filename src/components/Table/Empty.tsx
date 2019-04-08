import * as React from 'react'
import { Component } from 'react'
import { StyledTableBox } from './styled'

export interface EmptyProps {
  /** 空单元格可横跨的列数 */
  colSpan?: number;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * Empty
 */
class Empty extends Component<EmptyProps, any> {
  render() {
    const { colSpan, emptyText } = this.props

    return (
      <tr className='hmly-table-row'>
        <td colSpan={colSpan} className='table-td-empty'>
          <span className='empty'>
            {emptyText}
          </span>
        </td>
      </tr>
    )
  }
}

export default Empty
