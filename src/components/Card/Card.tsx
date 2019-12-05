import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

export interface CardProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 形状 默认 square */
  shape?: 'square' | 'round',
}

/**
 * Card
 */
class Card extends Component<CardProps, any> {
  static defaultProps = {
    shape: 'square'
  };
  render() {
    const { className, children, shape, ...restProps } = this.props;
    let classnames = classNames(
      'cat-card', 
      className, 
      `cat-card-${shape}`)
    return (
      <div className={classnames} {...restProps}>
        {children}
      </div>
    );
  }
}

export default Card;
