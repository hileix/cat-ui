import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export interface LoadingProps {
  /** 是否显示 loading */
  visible?: boolean;
  /** 类名 */
  className?: string;
  /**
   * loading 的尺寸（高度）
   */
  size?: number;
}

const Loading = ({ visible, className, size, ...restProps }: LoadingProps) => {
  const prefix = 'cat-loading';
  const classes = classNames(
    prefix,
    {
      [`${prefix}--hide`]: !visible
    },
    className
  );
  let lineStyle = {
    height: size
  };

  return (
    <div className={classes} {...restProps}>
      <div style={lineStyle} />
      <div style={lineStyle} />
      <div style={lineStyle} />
      <div style={lineStyle} />
      <div style={lineStyle} />
    </div>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
  size: PropTypes.number
};

Loading.defaultProps = {
  visible: false,
  size: 24
};

export default Loading;
