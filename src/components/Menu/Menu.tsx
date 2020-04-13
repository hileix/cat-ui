import * as React from 'react';
import { Component, cloneElement } from 'react';
import classNames from 'classnames';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
import MenuHeader from './MenuHeader';

export interface MenuProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
  mode?: 'pop' | 'inline' | 'replace';
  /** active的item的key */
  activeKey?: string;
  /** 点击事件的回调 */
  onChange?: any;
  /** 子元素 */
  children?: any;
}

/**
 * 菜单
 */
class Menu extends Component<MenuProps, any> {
  static Item: typeof MenuItem;
  static SubMenu: typeof SubMenu;
  static Header: typeof MenuHeader;
  static defaultProps = {
    mode: 'pop'
  };

  constructor(props: MenuProps) {
    super(props);
    this.state = {
      activeMenu: props.children,
      activeHeader: null,
      isSubMenu: false
    };
  }

  onMenuChange = (id: any) => {
    const { onChange } = this.props;
    onChange && onChange(id);
  };

  // replace时，切换显示组件
  onSwitchMenu = (menu: any, backHeader: any) => {
    this.setState({
      activeMenu: menu,
      activeHeader: backHeader,
      isSubMenu: true
    });
  };

  onBackClick = () => {
    const { children } = this.props;
    this.setState({
      activeMenu: children,
      activeHeader: null,
      isSubMenu: false
    });
  };

  render() {
    const self = this;
    const { activeMenu, activeHeader, isSubMenu } = this.state;
    const { className, style, mode, activeKey, children } = this.props;

    const prefix = 'cat-menu';
    const classes = classNames(
      prefix,
      {
        [`${prefix}-${mode}`]: mode
      },
      className
    );

    let header;
    let items: any = [];
    React.Children.map(activeMenu, (element: any, index) => {
      if (!element) {
        return element;
      }
      
      if (element.type  && element.type.name === 'MenuHeader'){
        header = element;
        return;
      }

      items.push(cloneElement(element, {
        key: index,
        id: element.key,
        mode: mode,
        checked: activeKey === element.key,
        onMenuChange: self.onMenuChange,
        onSwitchMenu: self.onSwitchMenu
      }));
    });

    return (
      <div className={classes}>
        {header}
        <ul style={style}>
          {isSubMenu && (
            <div className={`${prefix}--submenu`} onClick={this.onBackClick}>
              {activeHeader}
            </div>
          )}
          {items}
        </ul>
      </div>
    );
  }
}

export default Menu;
