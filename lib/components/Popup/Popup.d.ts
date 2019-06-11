import * as React from "react";
export declare type Placement = 'top' | 'topLeft' | 'topRight' | 'right' | 'rightTop' | 'rightBottom' | 'bottom' | 'bottomLeft' | 'bottomRight' | 'left' | 'leftTop' | 'leftBottom';
export declare type Trigger = 'hover' | 'click' | 'focus';
export interface PopupOption {
    prefixCls?: string;
    className?: string;
    style?: React.CSSProperties;
    outStyle?: React.CSSProperties;
    placement?: Placement;
    trigger?: Trigger;
    title?: string | React.ReactNode;
    children?: React.ReactNode | string;
    innerStyle: object;
}
/**
 * Popup弹出层
 *
 * Popup组件只是一个壳子，负责组装Trigger和Content，以及计算目标要显示的位置，添加弹出时的过渡、动画等。
 *
 * 打开弹层的方式由Trigger控制，比如click, 触发后返回值给Content，由Content决定自己的展示和关闭
 *
 */
declare class Popup extends React.Component<any, any> {
    static defaultProps: {
        prefixCls: string;
        placement: string;
        trigger: string;
        outStyle: {};
        spacing: number;
    };
    refChildren: React.RefObject<HTMLDivElement>;
    parent: HTMLElement;
    constructor(props: PopupOption);
    handleMouseEnter: () => void;
    handleMouseLeave: () => void;
    handleClick: () => void;
    handleTouchStart: () => void;
    handleClickLeave: () => void;
    componentDidMount(): void;
    componentWillUnmount(): void;
    createParent: () => HTMLDivElement;
    addEventByTrigger: () => {};
    createChildren: () => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[];
    createPopElement: () => React.ReactPortal;
    getPlacement: () => void;
    render(): (React.ReactPortal | React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)>) | (new (props: any) => React.Component<any, any, any>)>[])[];
}
export default Popup;
