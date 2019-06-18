import * as React from 'react';
import { PureComponent } from 'react';
export interface EmptyProps {
    /** 空单元格可横跨的列数 */
    colSpan?: number;
    /** 自定义的空模板 */
    empty?: React.ReactNode;
    /** 空模板的文案 */
    emptyText?: string;
}
/**
 * Empty
 */
declare class Empty extends PureComponent<EmptyProps, any> {
    render(): JSX.Element;
}
export default Empty;