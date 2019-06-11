import { Component } from 'react';
import RadioGroup from './RadioGroup';
export interface RadioProps {
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
    /** 值 */
    value?: any;
    /** 选项变化时的回调函数	 */
    onChange?: any;
}
/**
 * 单选框
 */
declare class Radio extends Component<RadioProps, any> {
    static Group: typeof RadioGroup;
    handleChange: (e: any) => void;
    handleClick: (e: any) => void;
    render(): JSX.Element;
}
export default Radio;
