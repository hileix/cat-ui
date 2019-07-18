import { Component } from 'react';
import DraggerItem from './DraggerItem';
export interface DraggerProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 获取被拖拽的元素  */
    draggedElement?: any;
    /**  */
    onDragStart?: any;
    /**  */
    onDragOver?: any;
    /**  */
    onDragEnd?: any;
    /** 返回排序后的id列表 */
    onSort?: (ids?: Array<any>) => {};
}
/**
 * 拖拽器
 */
declare class Dragger extends Component<DraggerProps, any> {
    private draggerRef;
    private dragged;
    private over;
    static Item: typeof DraggerItem;
    constructor(props: DraggerProps);
    componentDidMount: () => void;
    dragStart: (event: any) => void;
    dragOver: (event: any) => void;
    dragEnd: (event: any) => void;
    render(): JSX.Element;
}
export default Dragger;
