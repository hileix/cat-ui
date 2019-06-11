import * as React from 'react';
import { Component } from 'react';
import Option from './Option';
export interface SelectProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 默认提示文案 */
    placeholder?: string;
    /** 默认值，仅在初始化有效 */
    defaultValue?: string | number;
    /** 指定当前选中的条目；为空字符串时，显示placeholder */
    value?: string | number;
    /** 选中option时的value变化 */
    onChange?: (value?: string | number, text?: any) => {};
}
/**
 * 下拉选择
 */
declare class Select extends Component<SelectProps, any> {
    static Option: typeof Option;
    private selectRef;
    constructor(props: SelectProps);
    static getDerivedStateFromProps(nextProps: SelectProps): {
        value: React.ReactText;
    };
    componentDidMount(): void;
    onPopoverChange: (value: boolean) => void;
    onOptionClick: (value: React.ReactText, child: any) => void;
    render(): JSX.Element;
}
export default Select;
