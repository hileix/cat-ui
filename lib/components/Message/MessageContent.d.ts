import { Component } from 'react';
export interface MessageContentProps {
    /** 弹层是否可见 */
    text?: string;
    type?: string;
}
declare class MessageContent extends Component<MessageContentProps, any> {
    render(): JSX.Element;
}
export default MessageContent;
