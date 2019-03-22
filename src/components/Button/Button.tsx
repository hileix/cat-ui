import * as React from 'react'
import { Component } from 'react'
// import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import './Button.scss'

export interface ButtonProps {
  /** 前缀 */
  prefix?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 主题 */
  theme?: 'primary' | 'yellow' | 'white-primary' | 'white-cyan';
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否将按钮宽度调整为其父宽度 */
  block?: boolean;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 设置按钮的图标类型 */
  icon?: string;
  /** 子元素 */
  children?: React.ReactNode;
   /** 点击按钮时的回调 */
   onClick?: () => void;
}

/**
 * 按钮
 */
class Button extends Component<ButtonProps, any> {
  static defaultProps = {
    prefix: 'hmly',
    theme: 'primary',
    size: 'md',
    disabled: false
  }

  render() {
    const { prefix, className, style, theme, size, block, disabled, children, ...others } = this.props
    const classes = classNames(`${prefix}-button`, {
      [`${prefix}-button-${theme}`]: theme,
      [`${prefix}-button-${size}`]: size,
      [`${prefix}-button-block`]: block,
      [`${prefix}-button-disabled`]: disabled
    }, className)

    return (<div className={classes} style={style}>
      {children}
    </div>)
  }
}

export default Button
