import * as React from 'react';
import { TSize, Ttheme, TinputState, HandleProps } from './Input.d';
export interface InputProps extends HandleProps {
    /** 自动聚焦 */
    autoFocus?: boolean;
    /** 类名 */
    className?: string;
    /** 默认值 */
    defaultValue?: string;
    /** 禁用 */
    disabled?: boolean;
    /** 值 - 如果传入value属性，则input框变为受控, 因此输入框的值只根据value设置 */
    value?: string;
    /** 大小尺寸 'large' | 'normal' | 'small' */
    size?: TSize;
    /** 类型 'line' | 'line-pwd' | 'box' | 'box-pwd' */
    type?: Ttheme;
    /** 占位符 */
    placeholder?: string;
    /** 是否启用原生占位符(无动效) */
    placeholderOrigin?: boolean;
    /** 展示一键清除按钮 */
    showClear?: boolean;
    /** 展示密码和文本切换按钮 */
    showEye?: boolean;
    /** 是否出错 */
    error?: boolean;
    /** 输入框消息提示 */
    message?: string;
    /** 是否能对输入框进行复制、粘贴、剪贴的操作 */
    clipboardFree?: boolean;
    /** 是否能对输入框进行复制的操作 */
    copyFree?: boolean;
    /** 是否能对输入框进行粘贴的操作 */
    pasteFree?: boolean;
    /** 是否能对输入框进行剪贴的操作 */
    cutFree?: boolean;
    /** icon style样式 */
    iconStyle?: object;
    /** 聚焦回调 */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any;
    /** 失焦回调 */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
    /** 值改变的回调 */
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
    /** 按键的回调 */
    onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
    /** 按下回车键的回调 */
    onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
    /** 执行粘贴操作的回调 */
    onPaste?: (e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.ClipboardEvent<HTMLInputElement>) => any;
    /** 点击鼠标右键的回调 */
    onContextMenu?: (e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.ClipboardEvent<HTMLInputElement>) => any;
    /** 执行复制操作的回调 */
    onCopy?: (e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.ClipboardEvent<HTMLInputElement>) => any;
    /** 执行剪切操作的回调 */
    onCut?: (e: React.MouseEvent<HTMLInputElement, MouseEvent> | React.ClipboardEvent<HTMLInputElement>) => any;
}
export interface InputStates {
    type: 'text' | 'password';
    value: string;
    domProps: Array<string>;
    inputState: TinputState;
}
export interface IdomProps {
    disabled?: boolean;
    [propName: string]: any;
}
export declare const enum inputStates {
    default = 0,
    hover = 1,
    active = 2,
    error = 3
}
declare const _default: {
    new (props: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>): {
        handleFocus(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleBlur(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleChange(e: React.ChangeEvent<import("./Input").THandleDOM>): void;
        handleKeyDown(e: React.KeyboardEvent<import("./Input").THandleDOM>): void;
        handleMouseEnter(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleMouseLeave(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleClipboard(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent> | React.ClipboardEvent<import("./Input").THandleDOM>): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "value" | "inputState">(state: import("./TextArea").TextAreaStates | InputStates | ((prevState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, props: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>) => import("./TextArea").TextAreaStates | InputStates | Pick<import("./TextArea").TextAreaStates | InputStates, K>) | Pick<import("./TextArea").TextAreaStates | InputStates, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: (Readonly<import("./TextArea").TextAreaProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<InputProps> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, prevState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>): any;
        componentDidUpdate?(prevProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, prevState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
    };
    new (props: import("./TextArea").TextAreaProps | InputProps, context?: any): {
        handleFocus(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleBlur(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleChange(e: React.ChangeEvent<import("./Input").THandleDOM>): void;
        handleKeyDown(e: React.KeyboardEvent<import("./Input").THandleDOM>): void;
        handleMouseEnter(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleMouseLeave(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleClipboard(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent> | React.ClipboardEvent<import("./Input").THandleDOM>): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "value" | "inputState">(state: import("./TextArea").TextAreaStates | InputStates | ((prevState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, props: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>) => import("./TextArea").TextAreaStates | InputStates | Pick<import("./TextArea").TextAreaStates | InputStates, K>) | Pick<import("./TextArea").TextAreaStates | InputStates, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: (Readonly<import("./TextArea").TextAreaProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<InputProps> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, prevState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>): any;
        componentDidUpdate?(prevProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, prevState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<import("./TextArea").TextAreaProps> | Readonly<InputProps>, nextState: Readonly<import("./TextArea").TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
    };
    TextArea: any;
    contextType?: React.Context<any>;
};
export default _default;
