import * as React from 'react'
import classNames from 'classnames'
import { Component } from 'react'
import { StyledMessageContent } from './styled'
import Portal from '../Portal'

export interface MessageContentProps {
  /** 弹层是否可见 */
  text?: string;
  type?: string;
}

class MessageContent extends Component<MessageContentProps, any> {

  render() {
    const { text, type } = this.props
    const classes = classNames('message-content', `theme-${type}`)
    // console.log('MessageContent:visible', visible)

    return (<Portal visible>
      <StyledMessageContent className={classes}>
        {text}
      </StyledMessageContent>
    </Portal>)
  }
}

export default MessageContent
