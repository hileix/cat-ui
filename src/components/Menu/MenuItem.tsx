import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledMenuItem } from './styled'

export interface MenuItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
  mode?: 'pop' | 'inline' | 'replace';
  /** 当前MenuItem的id */
  id?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** MenuItem点击事件的回调 */
  onClick?: any;
  /** Menu改变事件的回调 */
  onMenuChange?: any;
  /** 是否有data-fixed属性 */
  fixed?: boolean;
}

/**
 * MenuItem
 */
class MenuItem extends Component<MenuItemProps, any> {
  static defaultProps = {
    fixed: false
  }

  onItemClick = (e: any) => {
    const { onClick, onMenuChange, id } = this.props
    onClick && onClick(e)
    onMenuChange && onMenuChange(id)
  }

  render() {
    const { className, style, mode, checked, fixed, children } = this.props
    const classes = classNames('hmly-menu-item', {
      [`hmly-menu-item-${mode}`]: mode,
      [`hmly-menu-item-checked`]: checked
    }, className)
    // console.log('MenuItem', mode, children)

    return (
      <StyledMenuItem
        data-fixed={fixed}
        className={classes}
        style={style}
        onClick={this.onItemClick}>
        {children}
      </StyledMenuItem>
    )
  }
}

export default MenuItem
