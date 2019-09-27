import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

export interface DraggerItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** id */
  id: string | number;
  /** order */
  order?: string | number;
  /** onDragStart */
  onDragStart?: any;
  /** onDragEnd */
  onDragEnd?: any;
}

/**
 * DraggerItem
 */
class DraggerItem extends Component<DraggerItemProps, any> {
  constructor(props: DraggerItemProps) {
    super(props);
    this.state = {
      dragging: false
    };
  }

  handleDragStart = (e: any) => {
    const { onDragStart } = this.props;
    onDragStart && onDragStart(e);
    this.setState({ dragging: true });
  };

  handleDragEnd = (e: any) => {
    const { onDragEnd } = this.props;
    onDragEnd && onDragEnd(e);
    this.setState({ dragging: false });
  };

  render() {
    const { dragging } = this.state;
    const { className, style, order, children } = this.props;
    const classes = classNames(
      'cat-dragger__item',
      {
        'cat-dragger__item--dragging': dragging
      },
      className
    );

    return (
      <div
        draggable
        data-order={order}
        onDragStart={this.handleDragStart}
        onDragEnd={this.handleDragEnd}
        className={classes}
        style={style}
      >
        {children}
      </div>
    );
  }
}

export default DraggerItem;
