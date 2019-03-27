import * as React from "react"
import { createPortal } from 'react-dom'
import classNames from 'classnames'

export type Placement =
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

export type Trigger = 'hover' | 'click' | 'focus'

export interface PopupOption {
  prefixCls?: string;
  className?: string;
  style?: React.CSSProperties;
  outStyle?: React.CSSProperties;
  placement?: Placement;
  trigger?: Trigger;
  title?: string | React.ReactNode;
  children?: React.ReactNode | string;
  innerStyle: object;
}

/**
 * Popup弹出层
 * 
 * Popup组件只是一个壳子，负责组装Trigger和Content，以及计算目标要显示的位置，添加弹出时的过渡、动画等。
 * 
 * 打开弹层的方式由Trigger控制，比如click, 触发后返回值给Content，由Content决定自己的展示和关闭
 * 
 */
class Popup extends React.Component<any, any> {
  static defaultProps = {
    prefixCls: 'hi',
    placement: 'top',
    trigger: 'hover',
    outStyle: {},
    spacing: 10
  }

  refChildren: React.RefObject<HTMLDivElement>
  parent: HTMLElement

  constructor(props: PopupOption) {
    super(props);
    this.refChildren = React.createRef()
  }

  handleMouseEnter = () => {
    const { onChange } = this.props
    onChange && onChange({popup: true})
  }
  
  handleMouseLeave = () => {
    const { onChange } = this.props
    onChange && onChange({popup: false})
  }

  handleClick = () => {
    const { onChange } = this.props
    onChange && onChange({popup: true})
  }

  handleTouchStart = () => {
    const { onChange } = this.props
    onChange && onChange({popup: true})
  }

  handleClickLeave = () => {
    const { onChange } = this.props
    onChange && onChange({popup: false})
  }

  componentDidMount () {
    this.parent = this.createParent()
  }

  componentWillUnmount () {
    document.body.removeChild(this.parent)
  }

  createParent = () => {
    const parent = document.createElement('div')
    parent.style.position = 'fixed'
    parent.style.zIndex = '10000'
    document.body.appendChild(parent)
    return parent
  }

  addEventByTrigger = () => {
    const { trigger } = this.props
    let events = {}
    switch (trigger) {
      case 'hover':
        events = {
          onMouseEnter: this.handleMouseEnter,
          onMouseLeave: this.handleMouseLeave
        }
        break;
      case 'click':
        events = {
          onClick: this.handleClick,
          onMouseLeave: this.handleMouseLeave
        }
        break;
      case 'touchstart':
        events = {
          onTouchStart: this.handleTouchStart,
          onMouseLeave: this.handleMouseLeave
        }
        break;
    }
    return events
  }

  createChildren = () => {
    const { innerCls, style, children } = this.props
    const eles = children as React.ReactElement<any>;
    const events = this.addEventByTrigger()
    const classes = classNames(innerCls, eles.props && eles.props.className)
    let childrenProperty = {
      key: 'childrenElement',
      className: classes,
      style,
      ref: this.refChildren,
      ...events
    }
    return React.Children.map(eles, (ele) => {
      let tempEle = ele
      if (ele.type === undefined) tempEle = <div>{ele}</div>
      return React.cloneElement(tempEle, childrenProperty)
    })
  }

  createPopElement = () => {
    const { className, outStyle, title } = this.props
    const popProperty = {
      key: 'popElement',
      className,
      style: outStyle
    }
    this.getPlacement()
    let popElement = React.cloneElement(title, popProperty)
    return createPortal(popElement, this.parent)
  }

  getPlacement = () => {
    const { placement, spacing } = this.props
    const refChildren = this.refChildren.current
    if (refChildren) {
      const cPosition = refChildren.getBoundingClientRect()
      const clientHeight = document.documentElement.clientHeight
      const clientWidth = document.documentElement.clientWidth
      const parentDOM = this.parent

      switch (placement) {
        case 'top':
          parentDOM.style.left = `${(cPosition.left + cPosition.width / 2)}px`
          parentDOM.style.bottom = `${clientHeight - cPosition.top + spacing}px`
          parentDOM.style.transform = 'translateX(-50%)'
          break;
        case 'topLeft':
          parentDOM.style.left = `${cPosition.left}px`
          parentDOM.style.bottom = `${clientHeight - cPosition.top + spacing}px`
          break;
        case 'topRight':
          parentDOM.style.right = `${(clientWidth - cPosition.right)}px`
          parentDOM.style.bottom = `${clientHeight - cPosition.top + spacing}px`
          break;
        case 'left':
          parentDOM.style.right = `${(clientWidth - cPosition.left + spacing)}px`
          parentDOM.style.top = `${cPosition.top  + cPosition.height / 2}px`
          parentDOM.style.transform = 'translateY(-50%)'
          break;
        case 'leftTop':
          parentDOM.style.right = `${(clientWidth - cPosition.left + spacing)}px`
          parentDOM.style.bottom = `${clientHeight - cPosition.bottom}px`
          parentDOM.style.transform = 'translateY(-50%)'
          break;
        case 'leftBottom':
          parentDOM.style.right = `${(clientWidth - cPosition.left + spacing)}px`
          parentDOM.style.bottom = `${clientHeight - cPosition.bottom}px`
          break;
        case 'bottom':
          parentDOM.style.left = `${cPosition.left + cPosition.width / 2}px`
          parentDOM.style.top = `${(cPosition.bottom + spacing)}px`
          parentDOM.style.transform = 'translateX(-50%)'
          break;
        case 'bottomLeft':
          parentDOM.style.left = `${cPosition.left}px`
          parentDOM.style.top = `${(cPosition.bottom + spacing)}px`
          break;
        case 'bottomRight':
          parentDOM.style.right = `${clientWidth - cPosition.right}px`
          parentDOM.style.top = `${(cPosition.bottom + spacing)}px`
          break;
        case 'right':
          parentDOM.style.left = `${cPosition.right + spacing}px`
          parentDOM.style.top = `${(cPosition.top + cPosition.height / 2)}px`
          parentDOM.style.transform = 'translateY(-50%)'
          break;
        case 'rightTop':
          parentDOM.style.left = `${cPosition.right + spacing}px`
          parentDOM.style.top = `${cPosition.top}px`
          break;
        case 'rightBottom':
          parentDOM.style.left = `${cPosition.right + spacing}px`
          parentDOM.style.bottom = `${clientHeight - cPosition.bottom}px`
          break;
      }
    }
  }

  render () {
    let Pop = null
    if (this.parent) Pop = this.createPopElement()
    return [this.createChildren(), Pop]
  }
}

export default Popup
