import * as React from 'react';
import { Component } from 'react';
export interface OptionProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 当前条目的值 */
    value?: string | number;
    /** 是否禁用 */
    disable?: boolean;
    /** 内部点击事件的回调 */
    onOptionClick?: any;
    /** 外部点击事件的回调 */
    onClick?: (value?: string | number, child?: string | React.ReactNode) => {};
}
/**
 * Option
 */
declare class Option extends Component<OptionProps, any> {
    static defaultProps: {
        disable: boolean;
    };
    handleClick: () => void;
    render(): JSX.Element;
}
export default Option;
