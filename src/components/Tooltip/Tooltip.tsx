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
  position?: 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'topLeft' | 'topCenter' | 'topRight';
  /** Tooltip 宽度 */
  width?: number;
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
    position: 'topCenter',
    width: 400
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

  componentDidUpdate (prevProps: TooltipProps, prevState: any) {
    const contentDOM = this.contentRef.current
    if (!contentDOM) { return }
    const { isPopOpen } = this.state
    if (isPopOpen && !prevState.isPopOpen) {
      const newTipLeft = (contentDOM.clientWidth - 20) / 2
      this.setState({ tipLeft: newTipLeft })
    }
  }

  onPopoverChange = (value: boolean) => {
    this.setState({ isPopOpen: value })
  }

  render() {
    const { className, style, mode, content, position, width, children } = this.props
    const { isPopOpen, tipLeft } = this.state
    const triggerClass = classNames('hmly-tooltip-trigger', className)
    const contentClass = classNames('hmly-tooltip-content', {
      [`hmly-tooltip-${position}`]: position
    })

    // console.log('tipLeft', tipLeft, width)

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
            left={tipLeft}
            width={width}>
            {content}
          </StyledTooltipContent>
        </Popover.Content>
      </Popover>

    )
  }
}

export default Tooltip
