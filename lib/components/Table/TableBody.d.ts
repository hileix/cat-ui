import * as React from 'react';
import { Component } from 'react';
import { ColumnProps } from './interface';
export interface TableBodyProps {
    /** 每一列需要的所有数据 */
    columns: Array<ColumnProps>;
    /** 每一行需要展示的数据	interfaceinterindex */
    currentPageData?: Array<any>;
    /** 对齐 */
    align?: string;
    /** 是否可拖拽的 */
    draggable?: boolean;
    /** 自定义的空模板 */
    empty?: React.ReactNode;
    /** 空模板的文案 */
    emptyText?: string;
    /** onDragChange */
    onDragChange?: any;
    /** 获取被拖拽的元素  */
    draggedElement?: any;
    /**  */
    onDragStart?: any;
    /**  */
    onDragOver?: any;
    /**  */
    onDragEnd?: any;
    /** 返回排序后的id列表 */
    onSort?: (sortedIds?: Array<any>, activeId?: any) => {};
}
/**
 * TableBody
 */
declare class TableBody extends Component<TableBodyProps, any> {
    private draggerRef;
    private dragged;
    private over;
    constructor(props: TableBodyProps);
    dragStart: (event: any) => void;
    dragOver: (event: any) => void;
    onDragEnter: (event: any) => void;
    onDragLeave: (event: any) => void;
    dragEnd: (event: any, activeId: any) => void;
    renderTrs: () => JSX.Element[];
    render(): JSX.Element;
}
export default TableBody;
