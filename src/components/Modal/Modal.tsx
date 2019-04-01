import * as React from 'react'
import { Component } from 'react'
// import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import Portal from '../Portal'
import { ModalBox, InnerModal } from './styled/index'
// import { any } from 'prop-types';

export interface ModalProps {
  /** 前缀 */
  prefix?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 主题 */
  theme?: 'primary' | 'yellow' | 'white-primary' | 'white-cyan';
  /** 对话框是否可见 */
  visible?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 子元素 */
  children?: React.ReactNode;
  /** 关闭操作回调函数 */
  onClose: (e: any) => {}
}

/**
 * 按钮
 */
class Modal extends Component<ModalProps, any> {
  static defaultProps = {
    prefix: 'hmly',
    theme: 'primary',
    size: 'md',
    visible: false,
    disabled: false
  }

  onMaskClick = (e: any) => {
    if (e.target === e.currentTarget) {
      this.props.onClose && this.props.onClose(e)
    }
  }

  render() {
    const { prefix, className, style, theme, size, disabled, visible,
      children, ...others } = this.props
    const classes = classNames(`${prefix}-modal`, {
      [`${prefix}-modal-${size}`]: size,
    }, className)



    return (<Portal visible={visible}>
      <ModalBox
        className={classes}
        style={style}
        onClick={this.onMaskClick}>
        <InnerModal>
         {children}
        </InnerModal>
      </ModalBox>
    </Portal>)
  }
}

export default Modal
