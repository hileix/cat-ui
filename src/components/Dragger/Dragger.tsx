import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledDragger } from './styled'

export interface DraggerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** id */
  id: string | number;
  /**  */
  draggedElement: any;
  /**  */
  onDragStart: any;
  /**  */
  onDragOver: any;
  /**  */
  onDragEnd: any;
  /**  */
  onSort: any;
}

/**
 * 拖拽器
 */
class Dragger extends Component<DraggerProps, any> {
  private draggerRef: any
  private dragged: any
  private over: any

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
    let draggerDom = this.draggerRef.current
    let _draggedEle = draggerDom.querySelector(`:nth-child(${_draggedEleIndex + 1})`)

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

    return (
      <StyledDragger
        ref={this.draggerRef}
        className={classes}
        style={style}
        onDragOver={self.dragOver}>
        {React.Children.map(childrenNode, (element, index) => {
          const itemClasses = classNames('hmly-dragger-item')
          return (
            <div
              draggable
              data-order={index + 1}
              onDragStart={self.dragStart}
              onDragEnd={self.dragEnd}
              className={itemClasses}>
              { element }
            </div>
          )
        })}
      </StyledDragger>
    )
  }
}

export default Dragger
