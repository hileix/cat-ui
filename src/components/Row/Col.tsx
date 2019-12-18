import * as React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export interface ResponsiveProps {
  span?: number;
  offset?: number;
  order?: number;
}

export interface ColProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 栅格所占的格数
   * 当值为 0 时，display: none; 隐藏
   */
  span?: number;
  /**
   * 左偏移的格数
   */
  offset?: number;
  /**
   * 栅格的顺序
   */
  order?: number;
  /**
   * width < 576px 时的其他属性对象
   */
  xs?: ResponsiveProps;
  /**
   * width >= 576px 时的其他属性对象
   */
  sm?: ResponsiveProps;
  /**
   * width >= 768px 时的其他属性对象
   */
  md?: ResponsiveProps;
  /**
   * width >= 992px 时的其他属性对象
   */
  lg?: ResponsiveProps;
  /**
   * width >= 1200px 时的其他属性对象
   */
  xl?: ResponsiveProps;
  /**
   * width >= 1200px 时的其他属性对象
   */
  xxl?: ResponsiveProps;
  /**
   * width >= 1920px 时的其他属性对象
   */
  fhd?: ResponsiveProps;
}

/**
 * Col
 */
class Col extends PureComponent<ColProps> {
  static propTypes = {
    className: PropTypes.string,
    span: PropTypes.number,
    offset: PropTypes.number,
    xs: PropTypes.object,
    sm: PropTypes.object,
    md: PropTypes.object,
    lg: PropTypes.object,
    xl: PropTypes.object,
    xxl: PropTypes.object,
    fhd: PropTypes.object
  };

  static defaultProps = {
    span: 0,
    offset: 0
  };

  getClasses = () => {
    const {
      className,
      span,
      offset,
      order,
      xs,
      sm,
      md,
      lg,
      xl,
      xxl,
      fhd
    } = this.props;

    const getMediaClasses = (
      sizeName: string,
      responsiveProps: ResponsiveProps
    ) => {
      const prefix = 'cat-col';
      return {
        [`${prefix}--${sizeName}-span-${
          typeof responsiveProps?.span === 'number' ? responsiveProps?.span : 0
        }`]: responsiveProps,
        [`${prefix}--${sizeName}-offset-${
          typeof responsiveProps?.offset === 'number'
            ? responsiveProps?.offset
            : 0
        }`]: responsiveProps,
        [`${prefix}--${sizeName}-order-${
          typeof responsiveProps?.order === 'number'
            ? responsiveProps?.order
            : 0
        }`]: responsiveProps?.order
      };
    };

    const prefix = `cat-col`;
    const classes = classNames(
      prefix,
      `${prefix}--span-${span}`,
      `${prefix}--offset-${offset}`,
      {
        [`${prefix}--order-${order}`]: order,
        ...getMediaClasses('xs', xs),
        ...getMediaClasses('sm', sm),
        ...getMediaClasses('md', md),
        ...getMediaClasses('lg', lg),
        ...getMediaClasses('xl', xl),
        ...getMediaClasses('xxl', xxl),
        ...getMediaClasses('fhd', fhd)
      },
      className
    );
    return classes;
  };

  render() {
    const { children } = this.props;

    const classes = this.getClasses();

    return <div className={classes}>{children}</div>;
  }
}

export default Col;
