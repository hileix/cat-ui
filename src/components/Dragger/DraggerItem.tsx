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
  render() {
    const { className, style, order, onDragStart, onDragEnd, children } = this.props
    const classes = classNames('hmly-dragger-item', className)

    return (
      <StyledDraggerItem
        draggable
        data-order={order}
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        className={classes}
        style={style}>
        { children }
      </StyledDraggerItem>
    )
  }
}

export default DraggerItem
