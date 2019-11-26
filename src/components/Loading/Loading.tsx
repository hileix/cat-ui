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
  /**
   * loading 的颜色
   */
  color?: string;
}

const Loading = ({
  visible,
  className,
  size,
  color,
  ...restProps
}: LoadingProps) => {
  const prefix = 'cat-loading';
  const classes = classNames(
    prefix,
    {
      [`${prefix}--hide`]: !visible
    },
    className
  );
  let lineStyle = {
    backgroundColor: color
  };

  return (
    <div
      className={classes}
      {...restProps}
      style={{ height: size, fontSize: size }}
    >
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
  size: PropTypes.number,
  color: PropTypes.string
};

Loading.defaultProps = {
  visible: false,
  size: 24,
  color: '#537682'
};

export default Loading;
