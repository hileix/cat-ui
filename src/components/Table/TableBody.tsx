import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import memoizeOne from 'memoize-one'
import * as isEmpty from 'lodash/isEmpty'
import { StyledTableBox } from './styled'
import { ColumnProps, FilterKeysProps, PaginationProps } from './interface'
import TableTr from './TableTr'
import Empty from './Empty'
import Dragger from '../Dragger'
import EmptyImg from './styled/empty.png'

export interface TableBodyProps {
  /** 每一列需要的所有数据 */
  columns: Array<ColumnProps>;
  /** 每一行需要展示的数据	interfaceinterindex */
  currentPageData?: Array<any>;
  /** 对齐 */
  align?: string;
  /** 是否可拖拽的 */
  draggable?: boolean;
  /** 自定义的空模板 */
  empty?: React.ReactNode;
  /** 空模板的文案 */
  emptyText?: string;
  /** onDragChange */
  onDragChange?: any;
  /** 获取被拖拽的元素  */
  draggedElement?: any;
  /**  */
  onDragStart?: any;
  /**  */
  onDragOver?: any;
  /**  */
  onDragEnd?: any;
  /** 返回排序后的id列表 */
  onSort?: (sortedIds?: Array<any>, activeId?: any) => {};
}

/**
 * TableBody
 */
class TableBody extends Component<TableBodyProps, any> {
  private draggerRef: any
  private dragged: any
  private over: any

  constructor (props: TableBodyProps) {
    super(props)
    this.state = {}
    this.draggerRef = React.createRef()
  }

  dragStart = (event: any) => {
    const { onDragStart } = this.props
    this.dragged = event.currentTarget
    onDragStart && onDragStart(event)
  }

  dragOver = (event: any) => {
    const { onDragOver } = this.props
    event.preventDefault()
    this.over = event.target.closest('.hmly-table-row')

    // 若未找到安放的DOM元素，则设为本身
    if (this.over === null) {
      this.over = this.dragged
    }
    onDragOver && onDragOver(event)
  }

  dragEnd = (event: any, activeId: any) => {
    const { currentPageData, draggedElement, onDragEnd, onSort, onDragChange } = this.props
    let from = Number(this.dragged.dataset.order)
    let to = Number(this.over.dataset.order)
    let childrenNode = Array.from(currentPageData)

    // 排序前的id列表
    let ids: Array<any> = []
    childrenNode.forEach((element: any, index) => {
      ids.push(element.id)
    })

    let draggedNode = childrenNode.splice(from - 1, 1)[0]
    childrenNode.splice(to - 1, 0, draggedNode)

    // 返回拖拽的DOM
    let _draggedEleIndex = childrenNode.indexOf(draggedNode)
    let draggerDOM = this.draggerRef.current
    let _draggedEle = draggerDOM.querySelector(`:nth-child(${_draggedEleIndex + 1})`)

    // 返回排序后的id列表
    let sortedIds: Array<any> = []
    childrenNode.forEach((element: any, index) => {
      sortedIds.push(element.id)
    })

    const isMoved = JSON.stringify(sortedIds) !== JSON.stringify(ids)

    onDragChange && onDragChange(childrenNode)
    draggedElement && draggedElement(_draggedEle)
    onDragEnd && onDragEnd(event)
    if (onSort && isMoved) { onSort(sortedIds, activeId) }
  }

  renderTrs = () => {
    const self = this
    const { columns, currentPageData, align, draggable } = this.props

    return currentPageData.map((element, index) => {
      return (
        <TableTr
          key={index}
          order={index + 1}
          columns={columns}
          data={element}
          align={align}
          draggable={draggable}
          onDragStart={self.dragStart}
          onDragEnd={self.dragEnd} />
      )
    })
  }

  render() {
    const { columns, currentPageData, draggable, empty, emptyText } = this.props
    // const classes = classNames('hmly-table-row', `hmly-table-row-${align}`)
    const trs = this.renderTrs()
    const colSpan = columns.length

    return (
      <tbody ref={this.draggerRef} onDragOver={this.dragOver}>
        {currentPageData.length === 0
          ? <Empty
            colSpan={colSpan}
            empty={empty}
            emptyText={emptyText} />
          : trs
        }
      </tbody>
    )
  }
}

export default TableBody
