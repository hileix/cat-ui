import React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export interface PageItemProps {
  /**
   * 类名前缀
   */
  prefix: string;
  /** 
   * 类名
   */
  className?: string;
  /** 
   * 样式
   */
  style?: React.CSSProperties;
  /** 
   * 是否被激活
   */
  active: boolean;
  /** 
   * 值
   */
  value: number;
  /** 
   * 点击时的回调
   */
  onClick?: (value: number) => void;
}

/**
 * PageItem
 */
class PageItem extends PureComponent<PageItemProps> {
  static displayName = 'PageItem';

  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    active: PropTypes.bool,
    value: PropTypes.number,
    onClick: PropTypes.func,
  }

  static defaultProps = {
  }

  handleClick = () => {
    const { onClick, value } = this.props;
    onClick && onClick(value);
  };

  render() {
    const { prefix, className, style, active, children } = this.props;
    const classPrefix = `${prefix}__item`;
    const classes = classNames(
      classPrefix,
      {
        [`${classPrefix}--active`]: active
      },
      className
    );

    return (
      <span className={classes} style={style} onClick={this.handleClick}>
        {children}
      </span>
    );
  }
}

export default PageItem;
