import * as React from 'react';
import { TinputState, HandleProps } from './Input.d';
export interface TextAreaProps extends HandleProps {
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
    /** 是否出错 */
    error?: boolean;
    /** 输入框消息提示 */
    message?: string;
    /** 自动大小计算 */
    autosize?: boolean;
    /** 显示计数 */
    showCount?: boolean;
    /** 最大长度 */
    maxlength?: number;
    /** 是否只读 */
    readonly?: boolean;
    /** 是否能对输入框进行复制、粘贴、剪贴的操作 */
    clipboardFree?: boolean;
    /** 是否能对输入框进行复制的操作 */
    copyFree?: boolean;
    /** 是否能对输入框进行粘贴的操作 */
    pasteFree?: boolean;
    /** 是否能对输入框进行剪贴的操作 */
    cutFree?: boolean;
    /** textarea style样式 */
    areaStyle?: object;
    /** 聚焦回调 */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => any;
    /** 失焦回调 */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => any;
    /** 值改变的回调 */
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => any;
    /** 按键的回调 */
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => any;
    /** 按下回车键的回调 */
    onPressEnter?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => any;
    /** 执行粘贴操作的回调 */
    onPaste?: (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent> | React.ClipboardEvent<HTMLTextAreaElement>) => any;
    /** 点击鼠标右键的回调 */
    onContextMenu?: (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent> | React.ClipboardEvent<HTMLTextAreaElement>) => any;
    /** 执行复制操作的回调 */
    onCopy?: (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent> | React.ClipboardEvent<HTMLTextAreaElement>) => any;
    /** 执行剪切操作的回调 */
    onCut?: (e: React.MouseEvent<HTMLTextAreaElement, MouseEvent> | React.ClipboardEvent<HTMLTextAreaElement>) => any;
}
export interface TextAreaStates {
    value: string;
    inputState: TinputState;
}
declare const _default: {
    new (props: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>): {
        handleFocus(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleBlur(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleChange(e: React.ChangeEvent<import("./Input").THandleDOM>): void;
        /** 执行粘贴操作的回调 */
        handleKeyDown(e: React.KeyboardEvent<import("./Input").THandleDOM>): void;
        handleMouseEnter(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleMouseLeave(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleClipboard(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent> | React.ClipboardEvent<import("./Input").THandleDOM>): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "value" | "inputState">(state: TextAreaStates | import("./Input").InputStates | ((prevState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, props: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>) => TextAreaStates | import("./Input").InputStates | Pick<TextAreaStates | import("./Input").InputStates, K>) | Pick<TextAreaStates | import("./Input").InputStates, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: (Readonly<TextAreaProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<import("./Input").InputProps> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, prevState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>): any;
        componentDidUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, prevState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, nextContext: any): void;
    };
    new (props: TextAreaProps | import("./Input").InputProps, context?: any): {
        handleFocus(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleBlur(e: React.FocusEvent<import("./Input").THandleDOM>): void;
        handleChange(e: React.ChangeEvent<import("./Input").THandleDOM>): void;
        /** 执行粘贴操作的回调 */
        handleKeyDown(e: React.KeyboardEvent<import("./Input").THandleDOM>): void;
        handleMouseEnter(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleMouseLeave(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent>): void;
        handleClipboard(e: React.MouseEvent<import("./Input").THandleDOM, MouseEvent> | React.ClipboardEvent<import("./Input").THandleDOM>): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "value" | "inputState">(state: TextAreaStates | import("./Input").InputStates | ((prevState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, props: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>) => TextAreaStates | import("./Input").InputStates | Pick<TextAreaStates | import("./Input").InputStates, K>) | Pick<TextAreaStates | import("./Input").InputStates, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: (Readonly<TextAreaProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<import("./Input").InputProps> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, prevState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>): any;
        componentDidUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, prevState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<import("./Input").InputProps>, nextState: Readonly<TextAreaStates> | Readonly<import("./Input").InputStates>, nextContext: any): void;
    };
    TextArea: any;
    contextType?: React.Context<any>;
};
export default _default;
