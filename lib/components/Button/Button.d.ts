import * as React from 'react';
import { PureComponent } from 'react';
export interface ButtonProps {
    /** 前缀 */
    prefix?: string;
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 主题 */
    theme?: 'primary' | 'primary-up' | 'yellow' | 'white-primary' | 'white-cyan' | 'borderless';
    /** 是否禁用 */
    disabled?: boolean;
    /** 样式 */
    htmlType?: 'submit' | 'button' | 'reset';
    /** 是否将按钮宽度调整为其父宽度 */
    block?: boolean;
    /** 尺寸 */
    size?: 'sm' | 'md' | 'lg';
    /** 设置按钮载入状态 */
    loading?: boolean;
    /** 设置按钮的图标类型 */
    icon?: string;
    /** 子元素 */
    children?: React.ReactNode;
    /** 点击按钮时的回调 */
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}
/**
 * 按钮
 */
declare class Button extends PureComponent<ButtonProps, any> {
    private buttonRef;
    private originalBtnStyle;
    static defaultProps: {
        prefix: string;
        htmlType: string;
        theme: string;
        size: string;
        disabled: boolean;
        loading: boolean;
    };
    constructor(props: ButtonProps);
    componentDidMount(): void;
    handleClick: React.MouseEventHandler<HTMLButtonElement>;
    setBtnUp: any;
    setBtnDown: any;
    onMouseLeave: any;
    render(): JSX.Element;
}
export default Button;
