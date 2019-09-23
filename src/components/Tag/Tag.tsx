import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';

export type Props = {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
};

export interface TagProps {
  /** 文字 */
  children: React.ReactNode;
  /** 文字颜色 */
  textColor?: string;
  /** 背景颜色 */
  bgColor?: string;
  /** 边框颜色 */
  borderColor?: string;
  /** 类名 */
  className?: string;
  /** 行内样式 */
  style?: React.CSSProperties;
}

function Tag({
  children,
  textColor,
  bgColor,
  borderColor,
  style,
  className,
  ...restProps
}: Partial<TagProps>) {
  const newStyle: React.CSSProperties = { ...style };
  if (textColor) {
    newStyle.color = textColor;
  }
  if (bgColor) {
    newStyle.backgroundColor = bgColor;
  }
  if (borderColor) {
    newStyle.borderColor = bgColor;
  }
  const prefix = 'hmly-tag';
  const classes = classNames(prefix, className);

  return (
    <span className={classes} style={newStyle} {...restProps}>
      {children}
    </span>
  );
}

Tag.propTypes = {
  children: PropTypes.node,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};

export default Tag;
