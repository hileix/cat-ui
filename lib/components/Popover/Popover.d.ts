import * as React from 'react';
import { Component } from 'react';
import PopoverTrigger from './PopoverTrigger';
import PopoverContent from './PopoverContent';
export interface PopoverProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 弹层是否可见 */
    visible?: boolean;
    /** 触发类型 */
    mode: 'click' | 'hover';
    /** 定位的方向 */
    position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
    /** X轴的偏移量 */
    offsetX?: number;
    /** X轴的偏移量 */
    offsetY?: number;
    /** 打开或关闭的回调函数 */
    onChange?: any;
}
/**
 * 弹层
 */
declare class Popover extends Component<PopoverProps, any> {
    private popoverRef;
    static Trigger: typeof PopoverTrigger;
    static Content: typeof PopoverContent;
    static defaultProps: {
        mode: string;
        position: string;
        offsetX: number;
        offsetY: number;
    };
    constructor(props: PopoverProps);
    static getDerivedStateFromProps(nextProps: PopoverProps): {
        visible: boolean;
    };
    componentDidMount(): void;
    componentDidUpdate(): void;
    componentWillUnmount(): void;
    open: () => void;
    close: () => void;
    toggleVisible: (value: boolean) => void;
    removePopover: (e: any) => void;
    genTriggerContent: () => {
        trigger: any;
        content: any;
    };
    renderTrigger: (trigger: any) => React.ReactSVGElement;
    renderContent: (content: any) => React.ReactSVGElement;
    render(): JSX.Element;
}
export default Popover;
