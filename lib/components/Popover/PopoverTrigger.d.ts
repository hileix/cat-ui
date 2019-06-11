import { Component } from 'react';
export interface PopoverTriggerProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 弹层是否可见 */
    visible?: boolean;
    /** 触发类型 */
    mode?: 'click' | 'hover';
    /** toggleVisible */
    toggleVisible?: any;
}
/**
 * PopoverTrigger
 */
declare class PopoverTrigger extends Component<PopoverTriggerProps, any> {
    handleClick: () => void;
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    render(): JSX.Element;
}
export default PopoverTrigger;
