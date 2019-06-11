import * as React from 'react';
import { Component } from 'react';
export interface SubMenuProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
    mode?: 'pop' | 'inline' | 'replace';
    /** 当前SubMenu的id */
    id?: boolean;
    /** 当前SubMenu的title */
    title?: string | React.ReactNode;
    /** 是否选中 */
    checked?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** SubMenu点击事件的回调 */
    onClick?: any;
    /** Menu改变事件的回调 */
    onMenuChange?: any;
    /** Menu改变事件的回调 */
    onSwitchMenu?: any;
    /** 返回上一级菜单的header */
    backHeader?: any;
}
/**
 * SubMenu
 */
declare class SubMenu extends Component<SubMenuProps, any> {
    private enterTimer;
    private leaveTimer;
    private popSubMenuRef;
    private popSubMenuWidth;
    private popSubMenuRight;
    constructor(props: SubMenuProps);
    componentWillUnmount(): void;
    onSubMenuClick: (e: any) => void;
    onSubMenuTitleClick: () => void;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
    renderContent: () => JSX.Element;
    render(): JSX.Element;
}
export default SubMenu;
