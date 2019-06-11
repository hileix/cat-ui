import * as React from 'react';
import { Component } from 'react';
import { ColumnProps, PaginationProps } from './interface';
export interface TableProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 每一列需要的所有数据 */
    columns: Array<ColumnProps>;
    /** 每一行需要展示的数据 */
    dataSource: Array<any>;
    /** 对齐 */
    align?: 'left' | 'center';
    /** 是否可拖拽的 */
    draggable?: boolean;
    /** 分页参数 */
    pagination: PaginationProps;
    /** 自定义的空模板 */
    empty?: React.ReactNode;
    /** 空模板的文案 */
    emptyText?: string;
    /** 获取被拖拽的元素  */
    draggedElement?: any;
    /**  */
    onDragStart?: any;
    /**  */
    onDragOver?: any;
    /**  */
    onDragEnd?: any;
    /** 筛选栏的回调函数 */
    onFilterChange?: (id?: any, key?: any) => {};
    /** 翻页的回调函数 */
    onPageChange?: (page?: number) => {};
    /** 返回排序后的id列表 */
    onSort?: (sortedIds?: Array<any>, activeId?: any) => {};
}
/**
 * 表格（列表）
 */
declare class Table extends Component<TableProps, any> {
    static defaultProps: {
        align: string;
        emptyText: string;
        pagination: {};
        draggable: boolean;
    };
    constructor(props: TableProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TableProps): void;
    hasPagination: () => boolean;
    pagingDataSource: (currentArg?: number) => void;
    onFilterSelect: (id: any, key: any) => void;
    onPaginationChange: (page: number) => void;
    onDragChange: (nodes: any) => void;
    render(): JSX.Element;
}
export default Table;
