import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export type Props = {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
};

export interface LoadingProps {
  /** 是否显示 loading */
  visible?: boolean;
  /** 类名 */
  className?: string;
  /** 行内样式 */
  style?: React.CSSProperties;
}

const Loading = ({ visible, className, ...restProps }: LoadingProps) => {
  const prefix = 'hmly-loading';
  const classes = classNames(
    prefix,
    {
      [`${prefix}--hide`]: !visible
    },
    className
  );
  return (
    <div className={classes} {...restProps}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

Loading.propTypes = {
  visible: PropTypes.bool
};

Loading.defaultProps = {
  visible: false
};

export default Loading;
