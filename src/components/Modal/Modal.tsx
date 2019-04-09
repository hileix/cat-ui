import * as React from 'react'
import { Component } from 'react'
// import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import Portal from '../Portal'
import { Button, Icon } from '../../components'
import { ModalBox, StyledModal, ModalHeader, ModalBody, ModalFooter, CloseBox } from './styled/index'

export interface ModalProps {
  /** 前缀 */
  prefix?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 主题 */
  theme?: 'primary' | 'yellow' | 'white-primary' | 'white-cyan';
  /** 标题 */
  title?: string | React.ReactNode;
  /** 对话框是否可见 */
  visible?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 宽度 */
  width?: number;
  /** 对齐 */
  align?: 'left' | 'center';
  /** 子元素 */
  children?: React.ReactNode;
  /** 确认按钮文字 */
  okText: string | React.ReactNode;
  /** 取消按钮文字 */
  cancelText: string;
  /** 取消按钮文字 */
  noClose: boolean;
  /** 自定义的ModalFooter */
  footer?: React.ReactNode;
  /** 点击确定回调	 */
  onOk?: (e: any) => {};
  /** 关闭操作回调函数 */
  onClose: (e: any) => {};
}

/**
 * 对话框
 */
class Modal extends Component<ModalProps, any> {
  static defaultProps = {
    prefix: 'hmly',
    theme: 'primary',
    size: 'md',
    visible: false,
    disabled: false,
    noClose: false
  }

  onMaskClick = (e: any) => {
    if (e.target === e.currentTarget) {
      this.props.onClose && this.props.onClose(e)
    }
  }

  handleCancle = (e: any) => {
    const { onClose } = this.props
    if (onClose) {
      onClose(e)
    } else {
      this.onMaskClick(e)
    }
  }

  handleOk = (e: any) => {
    const { onOk } = this.props
    if (onOk) {
      onOk(e)
    } else {
      this.onMaskClick(e)
    }
  }

  setBodyStyle = () => {
    const node = document.querySelector('body')
    const { visible } = this.props
    if (visible) {
      node.setAttribute('style', 'overflow: hidden; padding-right: 15px;')
    } else {
      node.removeAttribute('style')
    }
  }

  toRenderFooter = () => {
    const { footer, okText, cancelText, align } = this.props
    if (footer) {
      return footer
    } else {
      return (<ModalFooter align={align}>
        {cancelText.length > 0 && <Button
          theme='white-primary'
          onClick={this.handleCancle}>
          {cancelText}
        </Button>}
        <Button onClick={this.handleOk}>
          {okText}
        </Button>
      </ModalFooter>)
    }
  }

  render() {
    const { prefix, className, style, theme, size, width, disabled, visible,
      title, okText, cancelText, align, noClose, children, ...others } = this.props
    const classes = classNames(`${prefix}-modal`, {
      [`${prefix}-modal-${size}`]: size,
      [`${prefix}-modal-${align}`]: align,
    }, className)
    this.setBodyStyle()
    const modalFooter = this.toRenderFooter()

    return (<Portal visible={visible}>
      <ModalBox
        onClick={this.onMaskClick}>
        <StyledModal
          className={classes}
          style={style}>
          <ModalHeader>
            {title}
            {!noClose && <CloseBox>
              <Icon type='close' onClick={this.onMaskClick} />
            </CloseBox>}
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          {modalFooter}
        </StyledModal>
      </ModalBox>
    </Portal>)
  }
}

export default Modal
