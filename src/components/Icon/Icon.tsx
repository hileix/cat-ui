import * as React from 'react';
import classNames from 'classnames';
import { compatible } from './compatible';
import { IconType } from './IconTypeEnum';

export interface IconProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: React.CSSProperties;
  /** 图标类型 */
  type: string | IconType;
  /** 点击按钮时的回调 */
  onClick?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}

/**
 * 图标
 */
const Icon = ({ className, type, ...otherProps }: IconProps) => {
  const classes = classNames(
    'cat-icon',
    `cat-icon-${compatible(type)}`,
    className
  );

  return <i className={classes} {...otherProps} />;
};

Icon.Type = IconType;

export default Icon;
