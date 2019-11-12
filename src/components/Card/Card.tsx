import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

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
      <div className={classNames('cat-card', className)} {...restProps}>
        {children}
      </div>
    );
  }
}

export default Card;
