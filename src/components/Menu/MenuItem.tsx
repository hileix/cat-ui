import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledMenuItem } from './styled'

export interface MenuProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
  mode?: 'pop' | 'inline' | 'replace';
  /** 是否禁用 */
  disabled?: boolean;
}

/**
 * MenuItem
 */
class MenuItem extends Component<MenuProps, any> {

  render() {
    const { className, style, mode, children } = this.props
    const classes = classNames('hmly-menu-item', {
      [`hmly-menu-${mode}`]: mode
    }, className)

    return (
      <StyledMenuItem
        className={classes}
        style={style}>
        {children}
      </StyledMenuItem>
    )
  }
}

export default MenuItem
