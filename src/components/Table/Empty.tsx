import * as React from 'react'
import { PureComponent } from 'react'
import { StyledTableBox } from './styled'

export interface EmptyProps {
  /** 空单元格可横跨的列数 */
  colSpan?: number;
  /** 空模板的文案 */
  empty?: string | React.ReactNode;
}

/**
 * Empty
 */
class Empty extends PureComponent<EmptyProps, any> {
  render() {
    const { colSpan, empty } = this.props

    return (
      <tr className='hmly-table-row'>
        <td colSpan={colSpan} className='table-td-empty'>
          <span className='empty'>
            {empty}
          </span>
        </td>
      </tr>
    )
  }
}

export default Empty
