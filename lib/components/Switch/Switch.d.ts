import * as React from 'react';
import { Component } from 'react';
export interface SwitchProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 禁用 */
    disabled?: boolean;
    /** 激活时 */
    checkedChildren?: any;
    /** 未激活时 */
    unCheckedChildren?: any;
    /** 开关状态变化时 */
    onChange?: any;
    /** 鼠标松开 */
    onMouseUp?: any;
    /** 鼠标点击 */
    onClick?: any;
    /** tab索引 */
    tabIndex?: number;
    /** 是否激活 */
    checked?: boolean;
    /** 默认值 */
    defaultChecked?: boolean;
    /** 自动聚焦 */
    autoFocus?: boolean;
    /** 自动聚焦 */
    loadingIcon?: any;
}
/**
 * Switch
 */
declare class Switch extends Component<SwitchProps, any> {
    private switchRef;
    private node;
    [key: string]: any;
    static defaultProps: {
        className: string;
        defaultChecked: boolean;
        onChange: any;
        onClick: any;
    };
    constructor(props: SwitchProps);
    componentDidMount(): void;
    static getDerivedStateFromProps(nextProps: SwitchProps): {
        checked: boolean;
    };
    setChecked(checked: any): void;
    toggle: React.MouseEventHandler<HTMLButtonElement>;
    handleKeyDown: (e: any) => void;
    handleMouseUp: (e: any) => void;
    focus: () => void;
    blur: () => void;
    saveNode: (node: any) => void;
    render(): JSX.Element;
}
export default Switch;
