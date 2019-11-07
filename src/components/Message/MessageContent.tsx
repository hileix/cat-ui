import * as React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import Portal from '../Portal';
import Icon from '../Icon';

export type MessageType = 'success' | 'warn' | 'error';

export interface MessageContentProps {
  text?: string;
  type?: MessageType;
}

const IconTypeMap = {
  success: 'success',
  warn: 'warning',
  error: 'error'
};

class MessageContent extends Component<MessageContentProps, any> {
  render() {
    const { text, type } = this.props;
    const prefix = 'cat-message';
    const classes = classNames(prefix, {
      [`${prefix}--success`]: type === 'success',
      [`${prefix}--warn`]: type === 'warn',
      [`${prefix}--error`]: type === 'error'
    });

    return (
      <Portal visible>
        <div className={classes}>
          <Icon
            type={IconTypeMap[type]}
            className={`${prefix}__icon`}
          />
          <span className={`${prefix}__text`}>{text}</span>
        </div>
      </Portal>
    );
  }
}

export default MessageContent;
