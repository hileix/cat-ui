import * as React from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'
import { StyledTable } from './styled'

export interface EmptyProps {
  /** 每一列需要的所有数据 */
  columns?: Array<string>;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * Table
 */
class Empty extends PureComponent<EmptyProps, any> {

  render() {
    const { columns, emptyText } = this.props

    return (
      <tr className='hmly-table-row'>
        <td colSpan={columns.length} className='table-td-empty'>
          <span className='empty'>
            {emptyText}
          </span>
        </td>
      </tr>
    )
  }
}

export default Empty
