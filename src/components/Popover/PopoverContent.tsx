import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import throttle from 'lodash-es/throttle'
import { StyledPopoverContent, StyledPopBox } from './styled'
import Portal from '../Portal'
// import WindowEventHandler from '../../utils/WindowEventHandler'
// import WindowResizeHandler from '../../utils/WindowResizeHandler'

export interface PopoverContentProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
  /** triggerDOM */
  triggerDOM?: any;
  /** 触发类型 */
  mode: 'click' | 'hover';
  /** toggleVisible */
  toggleVisible: any;
}

const defaultPostion = {
  position: 'absolute',
  top: 0,
  left: 0,
}

/**
 * PopoverContent
 */
class PopoverContent extends Component<PopoverContentProps, any> {
  constructor (props: PopoverContentProps) {
    super(props)
    this.state = {
      position: defaultPostion
    }
  }

  componentDidMount() {
    const { visible } = this.props
    if (visible) {
      this.adjustPosition()
    }
    window.addEventListener('scroll', this.onWindowScroll)
    window.addEventListener('resize', this.onWindowResize)
  }

  componentDidUpdate(prevProps: PopoverContentProps) {
    if (this.props.visible && prevProps.visible !== this.props.visible) {
      // reset position mark
      // this.positionReady = false;
      this.adjustPosition()
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onWindowScroll)
    window.removeEventListener('resize', this.onWindowResize)
  }

  adjustPosition = () => {
    const { visible, triggerDOM } = this.props
    const { position } =  this.state
    if (!visible || !triggerDOM) { return }

    const nodeRect = triggerDOM.getBoundingClientRect()
    const { left, top, width, height } = nodeRect

    const newPosition =  {
      ...position,
      left: left,
      top: window.pageYOffset + top + height
    }
    this.setState({ position: newPosition })
    // console.log('adjustPosition:nodeRect', triggerDOM, nodeRect, newPosition)

  }

  onWindowResize = throttle((evt: any) => {
    if (this.props.visible) {
      this.adjustPosition()
    }
  }, 16)

  onWindowScroll = throttle(this.adjustPosition, 16)

  handleMouseEnter = () => {
    const { mode, toggleVisible } = this.props
    if (mode === 'hover') {
      toggleVisible(true)
    }
  }

  handleMouseLeave = () => {
    const { mode, toggleVisible } = this.props
    if (mode === 'hover') {
      toggleVisible(false)
    }
  }

  render() {
    const { position } = this.state
    const { className, style, visible, triggerDOM, children } = this.props
    const classes = classNames('hmly-popover', className)
    // console.log('PopoverContent:render', visible, triggerDOM)
    // console.log('PopoverContent:visible', visible)

    return (
      <Portal visible={visible}>
        <StyledPopBox
          style={position}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}>
          <StyledPopoverContent
            className={classes}
            style={style}>
            {children}
          </StyledPopoverContent>
        </StyledPopBox>
      </Portal>
    )
  }
}

export default PopoverContent
