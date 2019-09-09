import * as React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import { StyledMessageContent } from './styled';
import Portal from '../Portal'
import Icon from '../Icon';

export type MessageType = 'success' | 'warn' | 'error';


export interface MessageContentProps {
  text?: string;
  type?: MessageType;
}

const IconTypeMap = {
  success: Icon.Type.success,
  warn: Icon.Type.warning,
  error: Icon.Type.error
}

class MessageContent extends Component<MessageContentProps, any> {
  render() {
    const { text, type } = this.props;
    const prefix = 'hmly';
    const classes = classNames(`${prefix}-message`, {
      [`${prefix}-message--success`]: type === 'success',
      [`${prefix}-message--warn`]: type === 'warn',
      [`${prefix}-message--error`]: type === 'error'
    });

    return (
      <Portal visible>
        <StyledMessageContent className={classes}>
          <Icon type={IconTypeMap[type]} className={`${prefix}-message__icon`} />
          <span className={`${prefix}-message__text`}>{text}</span>
        </StyledMessageContent>
      </Portal>
    )
  }
}

export default MessageContent
