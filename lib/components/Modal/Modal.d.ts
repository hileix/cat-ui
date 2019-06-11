import * as React from 'react';
import { PureComponent } from 'react';
export interface ModalProps {
    /** 前缀 */
    prefix?: string;
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 主题 */
    theme?: 'primary' | 'yellow' | 'white-primary' | 'white-cyan';
    /** 标题 */
    title?: string | React.ReactNode;
    /** 对话框是否可见 */
    visible?: boolean;
    /** 是否禁用 */
    disabled?: boolean;
    /** 尺寸 */
    size?: 'sm' | 'md' | 'lg';
    /** 宽度 */
    width?: number;
    /** 对齐 */
    align?: 'left' | 'center';
    /** 子元素 */
    children?: React.ReactNode;
    /** 确认按钮文字 */
    okText: string | React.ReactNode;
    /** 取消按钮文字 */
    cancelText: string;
    /** 不要关闭按钮的Icon */
    noCloseIcon: boolean;
    /** 自定义的ModalFooter */
    footer?: React.ReactNode;
    /** 点击确定回调	 */
    onOk?: (e: any) => {};
    /** 关闭操作回调函数 */
    onClose: (e: any) => {};
}
/**
 * 对话框
 */
declare class Modal extends PureComponent<ModalProps, any> {
    static modalId: number;
    static pools: Array<number>;
    static originalBodyStyle: string;
    static originalFirstDivStyle: string;
    private mid;
    static defaultProps: {
        prefix: string;
        theme: string;
        size: string;
        visible: boolean;
        disabled: boolean;
        noCloseIcon: boolean;
    };
    constructor(props: ModalProps);
    componentDidUpdate(): void;
    onMaskClick: (e: any) => void;
    handleCancle: (e: any) => void;
    handleOk: (e: any) => void;
    setBodyStyle: () => void;
    renderFooter: () => {};
    render(): JSX.Element;
}
export default Modal;
