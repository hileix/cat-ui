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
  /** Tooltip hover后显示的内容 */
  content?: string | React.ReactNode;
}

/**
 * Tooltip
 */
class Tooltip extends Component<TooltipProps, any> {
  static defaultProps = {
    mode: 'hover'
  }

  constructor (props: TooltipProps) {
    super(props)
    this.state = {
      isPopOpen: false
    }
  }

  componentDidMount () {
    setTimeout(() => {
      this.setState({ isPopOpen: true })
    }, 1000)
  }

  onPopoverChange = (value: boolean) => {
    this.setState({ isPopOpen: value })
  }

  render() {
    const { className, style, mode, content, children } = this.props
    const { isPopOpen } = this.state
    const classes = classNames('hmly-tooltip', className)

    return (
      <Popover
        visible={isPopOpen}
        mode={mode}
        position='topCenter'
        onChange={this.onPopoverChange}>
        <Popover.Trigger>
          <StyledTooltip
            className={classes}
            style={style}>
            {children}
          </StyledTooltip>
        </Popover.Trigger>
        <Popover.Content>
          <StyledTooltipContent>
            {content}
          </StyledTooltipContent>
        </Popover.Content>
      </Popover>

    )
  }
}

export default Tooltip
