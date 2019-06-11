import { Component } from 'react';
import SubMenu from './SubMenu';
import MenuItem from './MenuItem';
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
declare class Menu extends Component<MenuProps, any> {
    static Item: typeof MenuItem;
    static SubMenu: typeof SubMenu;
    static defaultProps: {
        mode: string;
    };
    constructor(props: MenuProps);
    onMenuChange: (id: any) => void;
    onSwitchMenu: (menu: any, backHeader: any) => void;
    onBackClick: () => void;
    render(): JSX.Element;
}
export default Menu;
