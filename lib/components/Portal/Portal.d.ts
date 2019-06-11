import * as React from 'react';
import { PureComponent } from 'react';
export interface ProtalProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 样式 */
    selector?: string;
    /** 子元素 */
    children?: React.ReactNode;
    /** 弹层是否可见 */
    visible?: boolean;
    /** 返回传送门需要渲染的内容，优先级高于children */
    render?: () => {};
    /** children 被 mount 之后的回调函数 */
    onMount?: () => {};
    /** children 被 unmount 之后的回调函数 */
    onUnmount?: () => {};
}
/**
 * 传送门，底层的弹出层组件，不含样式
 */
declare class Portal extends PureComponent<ProtalProps, any> {
    static defaultProps: {
        selector: string;
    };
    constructor(props: ProtalProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: ProtalProps): void;
    getContainer: (selector: string) => Element;
    render(): React.ReactPortal;
}
export default Portal;
