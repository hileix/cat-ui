import * as React from 'react';
import { Component } from 'react';
export interface PaginationProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 当前页数 */
    current?: number;
    /** 数据总数 */
    total?: number;
    /** 每页条数 */
    pageSize?: number;
    /** 分页大小改变时候的回调函数 */
    onPageSizeChange?: (current: number) => void;
    /** 每页条数 */
    onChange?: (page: number, pageSize?: number) => void;
}
/**
 * 分页
 */
declare class Pagination extends Component<PaginationProps, any> {
    static defaultProps: {
        pageSize: number;
    };
    constructor(props: PaginationProps);
    onItemClick: (value: number) => void;
    onPrevClick: () => void;
    onNextClick: () => void;
    calculateShowPages: (current: number, pageNum: number, bufferSize: number) => React.ReactText[];
    renderItems: any;
    render(): JSX.Element;
}
export default Pagination;
