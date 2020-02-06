import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import Col from './Col';

export type AlignType = 'top' | 'center' | 'bottom';

export type JustifyType =
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
  align: AlignType;
  /**
   * 栅格间距
   */
  gutter: number | {
    [key: string]: number;
    xs: number,
    sm: number,
    md: number,
    lg: number,
    xl: number,
    xxl: number,
    fhd: number,
  };
}

export interface RowState {
  gutter: number;
}

export enum AlignEnum {
  top = 'start',
  center = 'center',
  bottom = 'bottom'
}

export interface MediaQueryMap {
  [key: string]: string;
  xs: string,
  sm: string,
  md: string,
  lg: string,
  xl: string,
  xxl: string,
  fhd: string,
}

const mediaQueryMap: MediaQueryMap = {
  xs: 'screen and (max-width:575px)',
  sm: 'screen and (min-width:576px)',
  md: 'screen and (min-width:768px)',
  lg: 'screen and (min-width:992px)',
  xl: 'screen and (min-width:1200px)',
  xxl: 'screen and (min-width:1600px)',
  fhd: 'screen and (min-width:1920px)',
}

// matchMedia polyfill for
// https://github.com/WickyNilliams/enquire.js/issues/82
let enquire: any;

if (typeof window !== 'undefined') {
  const matchMediaPolyfill = (mediaQuery: string) => {
    return {
      media: mediaQuery,
      matches: false,
      addListener() { },
      removeListener() { },
    };
  };
  window.matchMedia = window.matchMedia || matchMediaPolyfill;
  enquire = require('enquire.js');
}
/**
 * Row
 */
class Row extends Component<RowProps, RowState> {
  static Col: typeof Col;
  static propTypes = {
    className: PropTypes.string,
    justify: PropTypes.oneOf([
      'start',
      'end',
      'center',
      'space-around',
      'space-between'
    ]),
    align: PropTypes.oneOf(['top', 'center', 'bottom']),
    gutter: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.shape({
        xs: PropTypes.number,
        sm: PropTypes.number,
        md: PropTypes.number,
        lg: PropTypes.number,
        xl: PropTypes.number,
        xxl: PropTypes.number,
        fhd: PropTypes.number,
      }),
    ]),
  };

  static defaultProps = {
    justify: 'start',
    align: 'top',
    gutter: 0,
  };

  state = {
    gutter: 0,
  }

  componentDidMount = () => {
    this.register();
  }

  componentWillUnmount = () => {
    this.unregister();
  }

  register = () => {
    const { gutter } = this.props
    Object.keys(mediaQueryMap).forEach((key) => {
      enquire.register(mediaQueryMap[key], {
        match: () => {
          let newGutter: number;
          if (typeof gutter === 'number') {
            newGutter = gutter;
          } else {
            newGutter = gutter[key];
          }
          this.setState({ gutter: newGutter });
        },
      });
    })
  }

  unregister() {
    Object.keys(mediaQueryMap).map((key) =>
      enquire.unregister(mediaQueryMap[key]),
    );
  }

  render() {
    const { children, className, justify, align } = this.props;
    const { gutter } = this.state

    const prefix = 'cat-row';
    const classes = classNames(
      prefix,
      className,
      `${prefix}--justify-${justify}`,
      `${prefix}--align-${AlignEnum[align]}`
    );

    const childs = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child, { ...child.props, gutter })
      }
      return null;
    });

    const style: React.CSSProperties = {
      margin: `0 -${gutter / 2}px`
    };

    return <div className={classes} style={style}>{childs}</div>;
  }
}

export default Row;
