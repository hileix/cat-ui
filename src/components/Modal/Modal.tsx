import * as React from 'react'
import { Component } from 'react'
// import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import Portal from '../Portal'
import { Button, Icon } from '../../components'
import { ModalBox, InnerModal, ModalHeader, ModalBody, ModalFooter, CloseBox } from './styled/index'
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
  /** 子元素 */
  children?: React.ReactNode;
  /** 确认按钮文字 */
  okText: string | React.ReactNode;
  /** 自定义的ModalFooter */
  footer?: React.ReactNode;
  /** 取消按钮文字 */
  cancelText: string;
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
    disabled: false
  }

  onMaskClick = (e: any) => {
    if (e.target === e.currentTarget) {
      this.props.onClose && this.props.onClose(e)
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
    const { footer, okText, cancelText } = this.props
    if (footer) {
      return footer
    } else {
      return (<ModalFooter>
        {cancelText.length > 0 && <Button
          theme='white-primary'
          onClick={this.onMaskClick}>
          {cancelText}
        </Button>}
        <Button>
          {okText}
        </Button>
      </ModalFooter>)
    }
  }

  render() {
    const { prefix, className, style, theme, size, width, disabled, visible,
      title, okText, cancelText, children, ...others } = this.props
    const classes = classNames(`${prefix}-modal`, {
      [`${prefix}-modal-${size}`]: size,
    }, className)
    this.setBodyStyle()
    const modalFooter = this.toRenderFooter()

    return (<Portal visible={visible}>
      <ModalBox
        className={classes}
        style={style}
        onClick={this.onMaskClick}>
        <InnerModal>
          <ModalHeader>
            {title}
            <CloseBox>
              <Icon type='close' onClick={this.onMaskClick} />
            </CloseBox>
          </ModalHeader>
          <ModalBody>
            {children}
          </ModalBody>
          {modalFooter}
        </InnerModal>
      </ModalBox>
    </Portal>)
  }
}

export default Modal
