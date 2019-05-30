import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import * as throttle from 'lodash/throttle'
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
  mode?: 'click' | 'hover';
  /** 定位的方向 */
  position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
  /** X轴的偏移量 */
  offsetX?: number;
  /** X轴的偏移量 */
  offsetY?: number;
  /** toggleVisible */
  toggleVisible?: any;
}

const defaultPostionStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
}

/**
 * PopoverContent
 */
class PopoverContent extends Component<PopoverContentProps, any> {
  private contentRef: any;
  constructor (props: PopoverContentProps) {
    super(props)
    this.state = {
      positionStyle: defaultPostionStyle
    }
    this.contentRef = React.createRef()
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
    if (this.props.visible && (prevProps.visible !== this.props.visible)) {
      // console.log('componentDidUpdate')
      // setTimeout(() => {
      //   this.adjustPosition()
      // }, 250)
      this.adjustPosition()
    }
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onWindowScroll)
    window.removeEventListener('resize', this.onWindowResize)
  }

  adjustPosition = () => {
    const { visible, triggerDOM, position, offsetX, offsetY } = this.props
    if (!visible || !triggerDOM) { return }
    const { positionStyle } =  this.state
    const contentDOM = this.contentRef.current
    const triggerRect = triggerDOM.getBoundingClientRect()
    const contentRect = contentDOM.getBoundingClientRect()
    const { clientWidth: contentWidth, clientHeight: contentHeight } = contentDOM as HTMLElement
    const { clientWidth: triggerWidth, clientHeight: triggerHeight } = triggerDOM as HTMLElement

    let newPositionStyle

    switch (position) {
      case 'topCenter':
        newPositionStyle = {
          ...positionStyle,
          left: triggerRect.left + (triggerWidth / 2) - (contentWidth / 2) + offsetX,
          top: window.pageYOffset + triggerRect.top - contentHeight - 10 + offsetY
        }
        break
      case 'bottomCenter':
        newPositionStyle = {
          ...positionStyle,
          left: triggerRect.left + (triggerWidth / 2) - (contentWidth / 2) + offsetX,
          top: window.pageYOffset + triggerRect.top + triggerHeight + offsetY
        }
        break
      case 'bottomRight':
        newPositionStyle = {
          ...positionStyle,
          left: triggerRect.left - contentWidth + offsetX,
          top: window.pageYOffset + triggerRect.top + triggerHeight + offsetY
        }
        break
      case 'bottomLeft':
      default:
        newPositionStyle =  {
          ...positionStyle,
          left: triggerRect.left + offsetX,
          top: window.pageYOffset + triggerRect.top + triggerHeight + offsetY
        }
    }

    this.setState({ positionStyle: newPositionStyle })
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
    const { positionStyle } = this.state
    const { className, style, visible, triggerDOM, children } = this.props
    const classes = classNames('hmly-popover', className)
    // console.log('PopoverContent:render', visible, triggerDOM)
    // console.log('PopoverContent:visible', visible)

    return (
      <Portal visible={visible}>
        <StyledPopBox
          ref={this.contentRef}
          style={positionStyle}
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
