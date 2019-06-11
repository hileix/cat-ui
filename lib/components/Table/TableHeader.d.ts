import { Component } from 'react';
import { ColumnProps, FilterKeysProps } from './interface';
export interface TableHeaderProps {
    /** 每一列需要的所有数据 */
    columns: Array<ColumnProps>;
    /** 对齐 */
    align?: string;
    /** onFilterSelect */
    onFilterSelect?: any;
    /** 筛选的keys */
    filterKeys: FilterKeysProps;
}
/**
 * TableHeader
 */
declare class TableHeader extends Component<TableHeaderProps, any> {
    onFilterClick: (id: any, key: any) => void;
    renderTds: () => JSX.Element[];
    render(): JSX.Element;
}
export default TableHeader;
