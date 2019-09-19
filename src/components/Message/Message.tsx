import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as noop from 'lodash/noop';
import MessageContent from './MessageContent';

export interface MessageTypeProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

export type MessageType = 'success' | 'warn' | 'error';

/**
 * 全局提示
 */
class Message {
  static success(text: string, duration?: number, callback?: () => void) {
    return Message.show('success', text, duration, callback);
  }

  static warn(text: string, duration?: number, callback?: () => void) {
    return Message.show('warn', text, duration, callback);
  }

  static error(text: string, duration?: number, callback?: () => void) {
    return Message.show('error', text, duration, callback);
  }

  static show(
    type?: MessageType,
    text?: string,
    duration = 3000,
    callback = noop
  ) {
    const container = document.createElement('div');
    ReactDOM.render(<MessageContent text={text} type={type} />, container);

    setTimeout(() => {
      const unmountResult = ReactDOM.unmountComponentAtNode(container);
      if (unmountResult !== true) {
        container.parentNode.removeChild(container);
      }
      callback();
    }, duration);
  }
}

export default Message;
