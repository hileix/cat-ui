import { Component } from 'react';
import CheckboxGroup from './CheckboxGroup';
export interface CheckboxProps {
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
 * 多选框
 */
declare class Checkbox extends Component<CheckboxProps, any> {
    static Group: typeof CheckboxGroup;
    handleChange: (e: any) => void;
    handleClick: (e: any) => void;
    render(): JSX.Element;
}
export default Checkbox;
