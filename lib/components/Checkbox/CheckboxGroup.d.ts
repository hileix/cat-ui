import { Component } from 'react';
export interface CheckboxGroupProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 整组失效是否禁用 */
    disabled?: boolean;
    /** 整组失效是否只读 */
    readOnly?: boolean;
    /** 是否选中 */
    checked?: boolean;
    /** 默认值，仅在初始化有效 */
    defaultValue?: Array<any>;
    /** 值 */
    value?: Array<any>;
    /** 选项变化时的回调函数 */
    onChange?: any;
}
/**
 * CheckboxGroup
 */
declare class CheckboxGroup extends Component<CheckboxGroupProps, any> {
    constructor(props: CheckboxGroupProps);
    static getDerivedStateFromProps(nextProps: CheckboxGroupProps): {
        value: any[];
    };
    onCheckboxChange: (e: any) => void;
    render(): JSX.Element;
}
export default CheckboxGroup;
