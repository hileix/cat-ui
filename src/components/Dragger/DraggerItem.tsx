import * as React from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'
import { StyledDraggerItem } from './styled'

export interface DraggerItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** id */
  id: string | number;
  /** order */
  order: string | number;
  /** onDragStart */
  onDragStart: any;
  /** onDragEnd */
  onDragEnd: any;
}

/**
 * DraggerItem
 */
class DraggerItem extends PureComponent<DraggerItemProps, any> {
  constructor (props: DraggerItemProps) {
    super(props)
    this.state = {
      dragging: false
    }
  }

  handleDragStart = (e: any) => {
    const { onDragStart } = this.props
    onDragStart && onDragStart(e)
    this.setState({ dragging: true })
  }

  handleDragEnd = (e: any) => {
    const { onDragEnd } = this.props
    onDragEnd && onDragEnd(e)
    this.setState({ dragging: false })
  }

  render() {
    const { dragging } = this.state
    const { className, style, order, children } = this.props
    const classes = classNames('hmly-dragger-item', {
      'hmly-dragger-item-dragging': dragging
    }, className)

    return (
      <StyledDraggerItem
        draggable
        data-order={order}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        className={classes}
        style={style}>
        { children }
      </StyledDraggerItem>
    )
  }
}

export default DraggerItem
