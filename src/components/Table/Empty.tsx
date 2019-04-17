import * as React from 'react'
import { PureComponent } from 'react'
import { EmptyInner, EmptyImage } from './styled'
import * as EmptyBgImg from './styled/empty.png'

export interface EmptyProps {
  /** 空单元格可横跨的列数 */
  colSpan?: number;
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
}

/**
 * Empty
 */
class Empty extends PureComponent<EmptyProps, any> {
  render() {
    const { colSpan, empty, emptyText } = this.props

    const defaultEmpty = (<EmptyInner>
      <span className='content'>
        <EmptyImage src={EmptyBgImg} />
        <p className='empty-desc'>{emptyText}</p>
      </span>
    </EmptyInner>)

    const emptyDOM = empty ? empty : defaultEmpty

    return (
      <tr className='hmly-table-row'>
        <td colSpan={colSpan} className='table-td-empty'>
          {emptyDOM}
        </td>
      </tr>
    )
  }
}

export default Empty
