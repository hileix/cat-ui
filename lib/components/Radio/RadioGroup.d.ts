import * as React from 'react';
import { Component } from 'react';
export interface RadioGroupProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否只读 */
    readOnly?: boolean;
    /** 是否选中 */
    checked?: boolean;
    /** 默认值，仅在初始化有效 */
    defaultValue?: string | number;
    /** 值 */
    value?: string | number;
    /** 布局 */
    layout?: 'vertical' | 'horizontal';
    /** 选项变化时的回调函数	 */
    onChange?: any;
}
/**
 * RadioGroup
 */
declare class RadioGroup extends Component<RadioGroupProps, any> {
    static defaultProps: {
        layout: string;
    };
    constructor(props: RadioGroupProps);
    static getDerivedStateFromProps(nextProps: RadioGroupProps): {
        value: React.ReactText;
    };
    onRadioChange: (e: any) => void;
    render(): JSX.Element;
}
export default RadioGroup;
