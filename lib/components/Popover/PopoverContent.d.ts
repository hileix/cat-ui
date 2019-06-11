import { Component } from 'react';
export interface PopoverContentProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 弹层是否可见 */
    visible?: boolean;
    /** triggerDOM */
    triggerDOM?: any;
    /** 触发类型 */
    mode?: 'click' | 'hover';
    /** 定位的方向 */
    position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
    /** X轴的偏移量 */
    offsetX?: number;
    /** X轴的偏移量 */
    offsetY?: number;
    /** toggleVisible */
    toggleVisible?: any;
}
/**
 * PopoverContent
 */
declare class PopoverContent extends Component<PopoverContentProps, any> {
    private contentRef;
    constructor(props: PopoverContentProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: PopoverContentProps): void;
    componentWillUnmount(): void;
    adjustPosition: () => void;
    onWindowResize: any;
    onWindowScroll: any;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): JSX.Element;
}
export default PopoverContent;
