import { Component } from 'react';
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
declare class MenuItem extends Component<MenuItemProps, any> {
    static defaultProps: {
        fixed: boolean;
        disabled: boolean;
    };
    onItemClick: (e: any) => void;
    render(): JSX.Element;
}
export default MenuItem;
