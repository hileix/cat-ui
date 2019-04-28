import * as React from 'react'
import { Component, Children, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledPopover } from './styled'
import { genChildProps } from './interface'
import PopoverTrigger from './PopoverTrigger'
import PopoverContent from './PopoverContent'
import kindOf from '../../utils/kindOf'

export interface PopoverProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 弹层是否可见 */
  visible?: boolean;
}

/**
 * 弹层
 */
class Popover extends Component<PopoverProps, any> {
  static Trigger: typeof PopoverTrigger;
  static Content: typeof PopoverContent;
  private popoverRef: any;

  constructor (props: PopoverProps) {
    super(props)
    this.state = {}
    this.popoverRef = React.createRef()
  }


  open = () => {

  }

  close = () => {

  }

  genTriggerContent = () => {
    const { children } = this.props
    const childArray = Children.toArray(children)
    if (childArray.length !== 2) {
      throw new Error('There must be one and only one trigger and content in Popover')
    }
    const { trigger, content } = childArray.reduce <genChildProps> (
      (result, child: React.ReactElement<any>) => {
        const type = child.type
        if (kindOf(type, PopoverTrigger)) {
          result.trigger = child
        } else if (kindOf(type, PopoverContent)) {
          result.content = child
        }

        return result
      },
      { trigger: null, content: null }
    )
    return { trigger, content }
  }

  renderTrigger = (trigger: any) => {
    return React.cloneElement(trigger, {
      open: this.open,
      close: this.close,
    })
  }

  renderContent = (content: any) => {
    const { visible } = this.props
    return React.cloneElement(content, {
      visible: visible,
      open: this.open,
      close: this.close,
      triggerDOM: this.popoverRef.current
    })
  }

  render() {
    const { className, style, visible, children } = this.props
    const classes = classNames('hmly-popover', className)
    const { trigger, content } = this.genTriggerContent()
    // const visible = this.getVisible()

    console.log('Popover:render', visible, trigger, content)

    return (
      <StyledPopover
        ref={this.popoverRef}
        className={classes}
        style={style}>
        {this.renderTrigger(trigger)}
        {this.renderContent(content)}
      </StyledPopover>
    )
  }
}

export default Popover
