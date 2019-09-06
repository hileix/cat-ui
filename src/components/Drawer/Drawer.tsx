import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import classNames from 'classnames';
import { StyledDrawer } from './styled';
import * as PropTypes from 'prop-types';
import getScrollBarSize from '../../utils/getScrollBarSize';
import { canUseDOM } from '../../utils/index';

export type PlacementType = 'right'

export interface DrawerProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否显示 */
  visible?: boolean;
  /** 获取抽屉所在的 dom 节点 */
  getContainer?: () => HTMLElement;
  /** children */
  children?: React.ReactChildren | string;
  /** 类名前缀 */
  prefix?: string;
  /** 是否显示遮罩 */
  mask?: boolean;
  /** 关闭的回调 */
  onClose?: () => void;
  /** 抽屉所在的位置 */
  placement?: PlacementType;
  /** 关闭时是否销毁 Drawer 里的子元素 */
  destroyOnClose?: boolean;
}

const { useState, useEffect } = React

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
  style,
  destroyOnClose
}: DrawerProps) => {
  // 服务端渲染返回 null
  if (!canUseDOM()) {
    return null
  }

  const [parentDOM, setParentDOM] = useState(null);

  useEffect(() => {
    const parentDOM = getContainer();
    setParentDOM(parentDOM);
  }, [getContainer])
  
  if (!parentDOM) {
    return null;
  }

  const classes = classNames(`${prefix}-drawer`, {
    [`${prefix}-drawer--hide`]: !visible
  });

  const handleClose = () => {
    onClose && onClose()
  }

  parentDOM.style.overflow = '';
  parentDOM.style.width = '';
  if (visible) {
    // 修复父节点滚动条在 drawer 出现时不会消失的 bug
    parentDOM.style.overflow = 'hidden';
    // 修复滚动条由有到无时视图抖动的 bug
    parentDOM.style.width = `${parentDOM.offsetWidth - getScrollBarSize()}px`;
  }


  let contentChildren: React.ReactChildren | string;
  if (destroyOnClose && !visible) {
    contentChildren = null;
  } else {
    contentChildren = children;
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
        {contentChildren}
      </div>
    </StyledDrawer>
  )

  return ReactDOM.createPortal(content, parentDOM)
}

Drawer.propTypes = {
  visible: PropTypes.bool.isRequired,
  getContainer: PropTypes.func,
  onClose: PropTypes.func,
  destroyOnClose: PropTypes.bool,
}

Drawer.defaultProps = {
  getContainer: () => document.body,
  prefix: 'hmly',
  mask: true,
  placement: 'right',
  destroyOnClose: false
}

export default Drawer
