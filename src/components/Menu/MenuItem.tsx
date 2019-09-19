import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

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
    fixed: false,
    disabled: false
  };

  onItemClick = (e: any) => {
    const { onClick, onMenuChange, id, disabled } = this.props;
    if (!disabled) {
      onClick && onClick(e);
      onMenuChange && onMenuChange(id);
    }
  };

  render() {
    const {
      className,
      style,
      mode,
      checked,
      fixed,
      disabled,
      children
    } = this.props;

    const prefix = 'hmly-menu__item';
    const classes = classNames(
      'hmly-menu__item',
      {
        [`${prefix}--${mode}`]: mode,
        [`${prefix}--checked`]: checked,
        [`${prefix}--disabled`]: disabled
      },
      className
    );

    return (
      <li
        data-fixed={fixed}
        className={classes}
        style={style}
        onClick={this.onItemClick}
      >
        {children}
      </li>
    );
  }
}

export default MenuItem;
