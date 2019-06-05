import * as React from 'react'
import * as ReactDOM from 'react-dom';
import { Component } from 'react'
import * as noop from 'lodash/noop'
import classNames from 'classnames'
import { StyledMessage } from './styled'
import MessageContent from './MessageContent'

export interface MessageTypeProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * 全局提示
 */
class Message {

  static success(text: string, duration?: number, callback?: () => void) {
    return Message.show('success', text, duration, callback)
  }

  static error(text: string, duration?: number, callback?: () => void) {
    return Message.show('error', text, duration, callback)
  }

  static info(text: string, duration?: number, callback?: () => void) {
    return Message.show('info', text, duration, callback)
  }

  static warn(text: string, duration?: number, callback?: () => void) {
    return Message.show('warn', text, duration, callback)
  }

  static loading(text: string, duration?: number, callback?: () => void) {
    return Message.show('loading', text, duration, callback)
  }

  static show (type?: string, text?: string, duration = 3000, callback = noop) {
    const container = document.createElement('div')
    ReactDOM.render(
      <MessageContent
        text={text}
        type={type} />,
      container
    )

    setTimeout(() => {
      const unmountResult = ReactDOM.unmountComponentAtNode(container)
      if (unmountResult !== true) {
        container.parentNode.removeChild(container)
      }
      callback()
    }, duration)
  }
}

export default Message
