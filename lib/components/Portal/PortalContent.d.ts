import { Component } from 'react';
export interface ProtalProps {
    /** 弹层是否可见 */
    visible?: boolean;
    /** children 被 mount 之后的回调函数 */
    onMount?: () => {};
    /** children 被 unmount 之后的回调函数 */
    onUnmount?: () => {};
}
declare class PortalContent extends Component<ProtalProps, any> {
    static defaultProps: {
        selector: string;
    };
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export default PortalContent;
