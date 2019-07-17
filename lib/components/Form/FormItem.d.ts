import * as React from 'react';
import { Component } from 'react';
export interface FormItemProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 字段名称 */
    name: string;
    /** label */
    label?: string | React.ReactNode;
    /** label 标签布局 */
    labelWidth?: string | number;
    /** label 标签的文本对齐方式 */
    labelAlign?: string;
    /** label的向右偏移量 */
    labelOffset?: string | number;
    /** label的向上偏移量 */
    labelMarginTop?: string | number;
    /** 是否必填 */
    required?: boolean;
    /** 描述信息 */
    desc?: string | React.ReactNode;
    /** 提示信息 */
    tips?: string | React.ReactNode;
    /** 校验规则 */
    check?: (field?: any) => {};
    /** 字段改变的回调函数 */
    onFieldChange?: (field: string, value: any, error: string) => {};
    /** 改变Form的isCheck属性 */
    toggleIsCheck?: (isCheck: boolean) => {};
    /** 设置子元素 label htmlFor 属性 */
    htmlFor?: string;
    /** 是否显示 label 后面的冒号 */
    colon?: boolean;
    /** values列表 */
    values?: any;
    /** errors列表 */
    errors?: any;
    /** 是否去校验字段 */
    isCheck?: boolean;
}
/**
 * FormItem
 */
declare class FormItem extends Component<FormItemProps, any> {
    private formItemRef;
    static defaultProps: {
        colon: boolean;
        labelMarginTop: number;
    };
    constructor(props: FormItemProps);
    componentDidUpdate(): void;
    handleItemChange: (value: any) => void;
    render(): JSX.Element;
}
export default FormItem;
