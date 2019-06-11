import { Component } from 'react';
import { ColumnProps } from './interface';
export interface TableTrProps {
    /** 每一列需要的所有数据 */
    columns: Array<ColumnProps>;
    /** 每一行的数据 */
    data?: any;
    /** 对齐 */
    align?: string;
    /** 是否可拖拽的 */
    draggable?: boolean;
    /** id */
    id?: string | number;
    /** order */
    order?: string | number;
    /** onDragStart */
    onDragStart?: any;
    /** onDragEnd */
    onDragEnd?: any;
}
/**
 * TableTr
 */
declare class TableTr extends Component<TableTrProps, any> {
    constructor(props: TableTrProps);
    handleDragStart: (e: any) => void;
    handleDragEnd: (e: any) => void;
    renderTds: () => JSX.Element[];
    render(): JSX.Element;
}
export default TableTr;
