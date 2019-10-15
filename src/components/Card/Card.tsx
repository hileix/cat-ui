import * as React from 'react';
import { Component } from 'react';

export interface CardProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * Card
 */
class Card extends Component<CardProps, any> {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <div className='cat-card' {...restProps}>
        {children}
      </div>
    );
  }
}

export default Card;
