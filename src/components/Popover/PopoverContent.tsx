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
    window.addEventListener('click', this.removePopover)
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
    window.removeEventListener('click', this.removePopover)
  }

  adjustPosition = () => {
    const { visible, triggerDOM } = this.props
    const { position } =  this.state
    if (!visible) { return }

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

  removePopover = (e: any) => {
    // let node = e.target

    // // 如果点击的节点不在popup中或者有clickRemove属性
    // if (triggerDOM.contains(node) === false) {
    //   this.togglePopup(false)
    // }
  }

  onWindowResize = throttle((evt: any, delta: any) => {
    if (this.props.visible && (delta.deltaX !== 0 || delta.deltaY !== 0)) {
      this.adjustPosition()
    }
  }, 16)

  onWindowScroll = throttle(this.adjustPosition, 16)

  render() {
    const { position } = this.state
    const { className, style, visible, triggerDOM, children } = this.props
    const classes = classNames('hmly-popover', className)
    // console.log('PopoverContent:render', visible, triggerDOM)
    console.log('PopoverContent:position', position)

    return (
      <Portal visible={visible}>
        <StyledPopBox style={position}>
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
