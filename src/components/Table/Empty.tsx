import * as React from 'react'
import { PureComponent } from 'react'
import { EmptyInner, EmptyImg } from './styled'
import * as DefaultEmptyImg from './styled/empty.png'

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
      <EmptyImg src={DefaultEmptyImg} />
      <p className='empty-desc'>{emptyText}</p>
    </EmptyInner>)

    const emptyDOM = empty ? empty : defaultEmpty

    return (
      <tr className='hmly-table-row'>
        <td colSpan={colSpan} className='table-td-empty'>
          <span>
            {emptyDOM}
          </span>
        </td>
      </tr>
    )
  }
}

export default Empty
