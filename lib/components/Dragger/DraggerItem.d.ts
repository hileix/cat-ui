import { Component } from 'react';
export interface DraggerItemProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** id */
    id: string | number;
    /** order */
    order?: string | number;
    /** onDragStart */
    onDragStart?: any;
    /** onDragEnd */
    onDragEnd?: any;
}
/**
 * DraggerItem
 */
declare class DraggerItem extends Component<DraggerItemProps, any> {
    constructor(props: DraggerItemProps);
    handleDragStart: (e: any) => void;
    handleDragEnd: (e: any) => void;
    render(): JSX.Element;
}
export default DraggerItem;
