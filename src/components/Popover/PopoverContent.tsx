import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledPopoverContent } from './styled'
import Portal from '../Portal'

export interface PopoverContentProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
  /** triggerDOM */
  triggerDOM?: any;
}

/**
 * PopoverContent
 */
class PopoverContent extends Component<PopoverContentProps, any> {
  constructor (props: PopoverContentProps) {
    super(props)
    this.state = {
      position: null
    }
  }

  render() {
    // const { } = this.state
    const { className, style, visible, triggerDOM } = this.props
    const classes = classNames('hmly-popover', className)
    console.log('PopoverContent:render', visible, triggerDOM)

    return (
      <Portal visible={visible}>
        <StyledPopoverContent
          className={classes}
          style={style}>
          PopoverContent
        </StyledPopoverContent>
      </Portal>
    )
  }
}

export default PopoverContent
