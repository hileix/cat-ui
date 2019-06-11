import * as React from 'react';
import { Component } from 'react';
import './Slider.scss';
export interface SliderOption {
    /** 前缀 */
    prefixCls?: string;
    /** 类名 */
    className?: string;
    /** 主题 */
    theme?: string;
    /** 输入条的值 */
    value?: number;
    /** 输入条值发生变化前触发 */
    onBeforeChange?: (value: number) => void;
    /** 输入条值发生变化时触发 */
    onChange?: (value: number) => void;
    /** 输入条值发生变化后触发 */
    onAfterChange?: (value: number) => void;
}
/**
 * Slider滑动输入条
 *
 * 为Slider组件提供value属性，可使Slider变为受控组件，否则当前组件为非受控
 *
 * Slider兼容至移动端，在移动端下会默认使用touch事件
 *
 */
declare class Slider extends Component<SliderOption, any> {
    static defaultProps: {
        className: string;
        prefixCls: string;
        theme: string;
        defaultValue: number;
    };
    refSlider: React.RefObject<HTMLDivElement>;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    static getDerivedStateFromProps(nextProps: any, prevState: any): {
        value: any;
    };
    calcValue: (clientX: number) => number;
    onMouseDown: (e: any) => void;
    onMouseMove: (e: any) => void;
    onMouseUp: (e: any) => void;
    onTouchStart: (e: any) => void;
    onTouchMove: (e: any) => void;
    onTouchEnd: (e: any) => void;
    render(): JSX.Element;
}
export default Slider;
