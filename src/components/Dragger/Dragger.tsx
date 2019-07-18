import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledDragger } from './styled'
import DraggerItem from './DraggerItem'

export interface DraggerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 获取被拖拽的元素  */
  draggedElement?: any;
  /**  */
  onDragStart?: any;
  /**  */
  onDragOver?: any;
  /**  */
  onDragEnd?: any;
  /** 返回排序后的id列表 */
  onSort?: (ids?: Array<any>) => {};
}

/**
 * 拖拽器
 */
class Dragger extends Component<DraggerProps, any> {
  private draggerRef: any
  private dragged: any
  private over: any
  static Item: typeof DraggerItem

  constructor (props: DraggerProps) {
    super(props)
    this.state = {
      childrenNode: []
    }
    this.draggerRef = React.createRef()
  }

  componentDidMount = () => {
    const { children } = this.props
    this.setState({
      childrenNode: children
    })
  }

  dragStart = (event: any) => {
    const { onDragStart } = this.props
    this.dragged = event.currentTarget
    onDragStart && onDragStart(event)
  }

  dragOver = (event: any) => {
    const { onDragOver } = this.props
    event.preventDefault()
    this.over = event.target.closest('.hmly-dragger-item')

    // 若未找到安放的DOM元素，则设为本身
    if (this.over === null) {
      this.over = this.dragged
    }
    onDragOver && onDragOver(event)
  }

  dragEnd = (event: any) => {
    const { childrenNode } = this.state
    const { draggedElement, onDragEnd, onSort } = this.props
    let from = Number(this.dragged.dataset.order)
    let to = Number(this.over.dataset.order)
    let _childrenNode = Array.from(childrenNode)
    let draggedNode = _childrenNode.splice(from - 1, 1)[0]

    _childrenNode.splice(to - 1, 0, draggedNode)

    // 返回拖拽的DOM
    let _draggedEleIndex = _childrenNode.indexOf(draggedNode)
    let draggerDOM = this.draggerRef.current
    let _draggedEle = draggerDOM.querySelector(`:nth-child(${_draggedEleIndex + 1})`)

    // 返回排序后的id
    let sortedIds: Array<any> = []
    _childrenNode.forEach((element: any, index) => {
      sortedIds.push(element.props.id)
    })

    this.setState({ childrenNode: _childrenNode })

    draggedElement && draggedElement(_draggedEle)
    onSort && onSort(sortedIds)
    onDragEnd && onDragEnd(event)
  }

  render() {
    const self = this
    const { childrenNode } = this.state
    const { className, style } = this.props
    const classes = classNames('hmly-dragger', className)
    const items = React.Children.map(childrenNode, (element: any, index) => {
        if (!element) { return element }
        return cloneElement(element, {
          key: index,
          order: index + 1,
          onDragStart: self.dragStart,
          onDragEnd: self.dragEnd
        })
    })

    return (
      <StyledDragger
        ref={this.draggerRef}
        className={classes}
        style={style}
        onDragOver={self.dragOver}>
        {items}
      </StyledDragger>
    )
  }
}

export default Dragger
