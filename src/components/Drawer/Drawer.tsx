import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledDrawer } from './styled'
import * as PropTypes from 'prop-types'
import { canUseDOM } from '../../utils/index'

export type PlacementType = 'right'

export interface DrawerProps {
  /** 类名 */
  className?: string
  /** 样式 */
  style?: object
  /** 是否显示 */
  visible?: boolean
  /** 获取抽屉所在的 dom 节点 */
  getContainer?: () => HTMLElement
  /** children */
  children?: React.ReactChildren | string
  /** 类名前缀 */
  prefix?: string
  /** 是否显示遮罩 */
  mask?: boolean
  /** 关闭的回调 */
  onClose?: () => void
  /** 抽屉所在的位置 */
  placement?: PlacementType
}

/**
 * 抽屉组件
 */
const Drawer = ({
  prefix,
  visible,
  getContainer,
  children,
  mask,
  onClose,
  placement,
  style
}: DrawerProps) => {
  // 服务端渲染返回 null
  if (!canUseDOM()) {
    return null
  }

  const classes = classNames(`${prefix}-drawer`, {
    [`${prefix}-drawer--hide`]: !visible
  })

  const handleClose = () => {
    onClose && onClose()
  }

  const content = (
    <StyledDrawer className={classes} style={style}>
      {mask && (
        <div
          className={classNames(`${prefix}-drawer__mask`, {
            [`${prefix}-drawer__mask--show`]: mask && visible,
            [`${prefix}-drawer__mask--hide`]: mask && !visible
          })}
          onClick={handleClose}
        />
      )}

      <div
        className={classNames(`${prefix}-drawer__content`, {
          [`${prefix}-drawer__content--${placement}`]: true,
          [`${prefix}-drawer__content--hide`]: !visible
        })}
      >
        {children}
      </div>
    </StyledDrawer>
  )
  return ReactDOM.createPortal(content, getContainer())
}

Drawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  getContainer: PropTypes.func,
  onClose: PropTypes.func
}

Drawer.defaultProps = {
  getContainer: () => document.body,
  prefix: 'hmly',
  mask: true,
  placement: 'right'
}

export default Drawer
