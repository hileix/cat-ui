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
  position?: 'bottomLeft' | 'topCenter';
  /** toggleVisible */
  toggleVisible?: any;
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
  private contentRef: any;
  constructor (props: PopoverContentProps) {
    super(props)
    this.state = {
      positionStyle: defaultPostion
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
    const { visible, triggerDOM, position } = this.props
    if (!visible || !triggerDOM) { return }
    const { positionStyle } =  this.state
    const contentDOM = this.contentRef.current
    const triggerRect = triggerDOM.getBoundingClientRect()
    const contentRect = contentDOM.getBoundingClientRect()

    let newPositionStyle

    switch (position) {
      case 'topCenter':
        newPositionStyle =  {
          ...positionStyle,
          left: triggerRect.left + (triggerRect.width / 2) - (contentRect.width / 2),
          top: window.pageYOffset + triggerRect.top - contentRect.height - 5
        }
        break
      case 'bottomLeft':
      default:
        newPositionStyle =  {
          ...positionStyle,
          left: triggerRect.left,
          top: window.pageYOffset + triggerRect.top + triggerRect.height
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
