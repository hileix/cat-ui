import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

type AlignType = 'top' | 'center' | 'bottom';

type JustifyType =
  | 'start'
  | 'end'
  | 'center'
  | 'space-around'
  | 'space-between';

export interface RowProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * flex 布局下的水平排列方式
   */
  justify?: JustifyType;
  /**
   * flex 布局下的垂直对齐方式
   */
  align?: AlignType;
}

enum AlignEnum {
  top = 'start',
  center = 'center',
  bottom = 'bottom'
}

/**
 * Row
 */
class Row extends Component<RowProps> {
  static propTypes = {
    className: PropTypes.string,
    justify: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'space-around',
      'space-between'
    ]),
    align: PropTypes.oneOf(['top', 'center', 'bottom'])
  };

  static defaultProps = {
    justify: 'start',
    align: 'top'
  };

  render() {
    const { children, className, justify, align } = this.props;

    const prefix = 'cat-row';
    const classes = classNames(
      prefix,
      className,
      `${prefix}--justify-${justify}`,
      `${prefix}--align-${AlignEnum[align]}`
    );

    return <div className={classes}>{children}</div>;
  }
}

export default Row;
