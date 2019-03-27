import * as React from "react"
import classNames from 'classnames'
import { Popup } from '../'
import './index.scss'

export type TooltipPlacement =
  | 'top'
  | 'topLeft'
  | 'topRight'
  | 'right'
  | 'rightTop'
  | 'rightBottom'
  | 'bottom'
  | 'bottomLeft'
  | 'bottomRight'
  | 'left'
  | 'leftTop'
  | 'leftBottom'

export type TooltipTrigger = 'hover' | 'click' | 'focus'

export interface TooltipOption {
  /** 前缀 */
  prefixCls?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: React.CSSProperties;
  /** 位置 */
  placement?: TooltipPlacement;
  /** 触发事件名称 */
  trigger?: TooltipTrigger;
  /** 触发后要显示的内容 */
  title?: string | React.ReactNode;
  /** 触发的对象 */
  children?: React.ReactNode | string;
}

export default class Tooltip extends React.Component<TooltipOption, any>{
  static defaultProps = {
    prefixCls: 'hmly',
    placement: 'top',
    trigger: 'hover'
  }

  popup: boolean

  constructor(props: TooltipOption) {
    super(props);
    this.state = {
      popup: false
    }
  }

  handleChange = ({popup = false}) => {
    this.setState({
      popup
    })
  }

  render () {
    const {
      prefixCls,
      className,
      style,
      placement,
      title,
      trigger,
      children
    } = this.props
    const { popup } = this.state
    const classes = classNames(`${prefixCls}-pop`, className, {
      popuped: popup
    })

    return (
      <Popup
        prefixClx={prefixCls}
        className={classes}
        innerCls='hi-children'
        style={style}
        placement={placement}
        title={title}
        trigger={trigger}
        onChange={this.handleChange}
      >
        {children}
      </Popup>
    )
  }
}