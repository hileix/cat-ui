import { Component } from 'react';
import FormItem from './FormItem';
export interface FormProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** label 标签的文本对齐方式 */
    labelAlign?: string;
    /** label 标签布局 */
    labelWidth?: string | number;
    /** label的向右偏移量 */
    labelOffset?: string | number;
    /** 配置 Form.Item 的 colon 的默认值 */
    colon?: boolean;
    /** 表单提交的回调函数 */
    onSubmit?: (values?: object, errors?: object) => {};
}
/**
 * 表单
 */
declare class Form extends Component<FormProps, any> {
    static Item: typeof FormItem;
    static defaultProps: {
        colon: boolean;
        labelAlign: string;
        labelOffset: number;
    };
    constructor(props: FormProps);
    componentDidMount(): void;
    onFieldChange: (field: string, value: any, error: string) => void;
    onSubmitClick: (fn?: (values?: any, errors?: any) => {}) => void;
    toggleIsCheck: (isCheck: boolean) => void;
    onFormSubmit: (e: any) => void;
    render(): JSX.Element;
}
export default Form;
