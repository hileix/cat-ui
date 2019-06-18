import * as React from 'react';
import { Component } from 'react';
export interface TooltipProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** Tooltip hover后显示的内容 */
    mode?: 'hover' | 'click';
    /** 定位的方向 */
    position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
    /** Tooltip 宽度 */
    width?: number;
    /** Tooltip hover后显示的内容 */
    content?: string | React.ReactNode;
}
/**
 * 文字提示
 */
declare class Tooltip extends Component<TooltipProps, any> {
    private contentRef;
    static defaultProps: {
        mode: string;
        position: string;
        width: number;
    };
    constructor(props: TooltipProps);
    componentDidUpdate(prevProps: TooltipProps, prevState: any): void;
    onPopoverChange: (value: boolean) => void;
    render(): JSX.Element;
}
export default Tooltip;
