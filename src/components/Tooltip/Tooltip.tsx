import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledTooltip, StyledTooltipContent } from './styled'
import Popover from '../Popover'

export interface TooltipProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** Tooltip hover后显示的内容 */
  mode?: 'hover' | 'click';
  /** 定位的方向 */
  position?: 'bottomLeft' | 'topCenter';
  /** Tooltip hover后显示的内容 */
  content?: string | React.ReactNode;
}

/**
 * 文字提示
 */
class Tooltip extends Component<TooltipProps, any> {
  private contentRef: any;
  static defaultProps = {
    mode: 'hover',
    position: 'topCenter'
  }

  constructor (props: TooltipProps) {
    super(props)
    this.state = {
      isPopOpen: false,
      tipLeft: 0,
    }
    this.contentRef = React.createRef()
  }

  // componentDidMount () {
  //   setTimeout(() => {
  //     this.setState({ isPopOpen: true })
  //   }, 1000)
  // }

  componentDidUpdate () {
    const contentDOM = this.contentRef.current
    if (!contentDOM) { return }
    const { isPopOpen, tipLeft } = this.state
    if (isPopOpen && tipLeft === 0) {
      const contentRect = contentDOM.getBoundingClientRect()
      const rectCollection = contentDOM.getClientRects()
      this.setState({ tipLeft: contentRect.width / 2 - 8 })
    }
  }

  onPopoverChange = (value: boolean) => {
    this.setState({ isPopOpen: value })
  }

  render() {
    const { className, style, mode, content, position, children } = this.props
    const { isPopOpen, tipLeft } = this.state
    const triggerClass = classNames('hmly-tooltip-trigger', className)
    const contentClass = classNames('hmly-tooltip-content', {
      [`hmly-tooltip-${position}`]: position
    })

    // console.log('tipLeft', tipLeft)

    return (
      <Popover
        visible={isPopOpen}
        mode={mode}
        position={position}
        onChange={this.onPopoverChange}>
        <Popover.Trigger>
          <StyledTooltip
            className={triggerClass}
            style={style}>
            {children}
          </StyledTooltip>
        </Popover.Trigger>
        <Popover.Content>
          <StyledTooltipContent
            ref={this.contentRef}
            className={contentClass}
            left={tipLeft}>
            {content}
          </StyledTooltipContent>
        </Popover.Content>
      </Popover>

    )
  }
}

export default Tooltip
