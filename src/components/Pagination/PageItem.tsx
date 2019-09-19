import * as React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';

export interface PageItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** active */
  active?: boolean;
  /** value */
  value?: any;
  /** onItemClick */
  onItemClick?: any;
}

/**
 * PageItem
 */
class PageItem extends PureComponent<PageItemProps, any> {
  handleClick = () => {
    const { onItemClick, value } = this.props;
    onItemClick && onItemClick(value);
  };

  render() {
    const { className, style, active, value, children } = this.props;
    const prefix = 'hmly-pagination__item';
    const classes = classNames(
      prefix,
      {
        [`${prefix}--active`]: active
      },
      className
    );

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        {children}
      </div>
    );
  }
}

export default PageItem;
