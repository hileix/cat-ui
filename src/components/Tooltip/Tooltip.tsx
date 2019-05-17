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
      tipTop: 0,
      tipLeft: 0,
    }
    this.contentRef = React.createRef()
  }

  componentDidUpdate () {
    const contentDOM = this.contentRef.current
    if (!contentDOM) { return }
    const { isPopOpen, tipTop, tipLeft } = this.state
    const contentRect = contentDOM.getBoundingClientRect()
    if (isPopOpen && tipTop === 0 && tipLeft === 0) {
      this.setState({
        tipTop: contentRect.height,
        tipLeft: contentRect.width / 2 - 8
      })
    }
  }

  onPopoverChange = (value: boolean) => {
    this.setState({ isPopOpen: value })
  }

  render() {
    const { className, style, mode, content, position, children } = this.props
    const { isPopOpen, tipTop, tipLeft } = this.state
    const triggerClass = classNames('hmly-tooltip-trigger', className)
    const contentClass = classNames('hmly-tooltip-content', {
      [`hmly-tooltip-${position}`]: position
    })

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
            top={tipTop}
            left={tipLeft}>
            {content}
          </StyledTooltipContent>
        </Popover.Content>
      </Popover>

    )
  }
}

export default Tooltip
