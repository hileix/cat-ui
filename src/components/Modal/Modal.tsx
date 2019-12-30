import React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';
import PurePortal from '../PurePortal';
import Button from '../Button';
import Icon from '../Icon';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


export interface ModalProps {
  /** 
   * 前缀
   */
  prefix: string;
  /** 
   * 类名
   */
  className?: string;
  /** 
   * 样式 
   */
  style?: React.CSSProperties;
  /** 
   * 标题 
   */
  title?: React.ReactNode;
  /** 
   * 是否可见
   */
  visible: boolean;
  /** 
   * 宽度
   */
  width: number;
  /** 
   * Modal 中的内容
   */
  children: React.ReactNode;
  /** 
   * 确认按钮文字
   */
  okText?: React.ReactNode;
  /** 
   * 取消按钮文字
   */
  cancelText?: React.ReactNode;
  /** 
   * 不要关闭按钮
   */
  noCloseIcon: boolean;
  /** 
   * 自定义的ModalFooter
   */
  footer?: React.ReactNode;
  /** 
   * 点击确定回调
   */
  onOk?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** 
   * 关闭操作回调函数
   */
  onClose?: (e: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  /**
   * 关闭时是否销毁子元素
   */
  destroyOnClose: boolean;
  /**
   * 是否显示遮罩
   */
  mask: boolean;
}


const TIMEOUT = 300;

/**
 * Modal 对话框
 */
class Modal extends PureComponent<ModalProps> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.node,
    visible: PropTypes.bool,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string,]),
    children: PropTypes.node,
    okText: PropTypes.node,
    cancelText: PropTypes.node,
    noCloseIcon: PropTypes.bool,
    footer: PropTypes.node,
    onOk: PropTypes.func,
    onClose: PropTypes.func,
    destroyOnClose: PropTypes.bool,
    mask: PropTypes.bool,
  }

  static defaultProps = {
    prefix: 'cat',
    visible: false,
    width: 428,
    noCloseIcon: false,
    destroyOnClose: false,
    mask: true,
    okText: 'Confirm',
    cancelText: 'Cancel',
  };

  handleClose = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    const { onClose } = this.props;
    onClose && onClose(e);
  }

  handleOk = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onOk } = this.props;
    onOk && onOk(e);
  };

  renderHeader = () => {
    const { prefix, title, noCloseIcon } = this.props;

    if (!title) {
      return null;
    }

    const modalPrefix = `${prefix}-modal`;

    return (
      <div className={`${modalPrefix}__header`}>
        {title}
        {!noCloseIcon && (
          <div className={`${modalPrefix}__close`}>
            <Icon type='close' onClick={this.handleClose} />
          </div>
        )}
      </div>
    )
  }

  renderBody = () => {
    const { prefix, children } = this.props
    const modalPrefix = `${prefix}-modal`;
    return <div className={`${modalPrefix}__body`}>{children}</div>
  }

  renderFooter = () => {
    const { footer, okText, cancelText, } = this.props;
    const footerPrefix = 'cat-modal__footer';

    return (
      <div
        className={classNames(footerPrefix, {
        })}
      >
        {footer ? footer : (
          <>
            <Button onClick={this.handleClose}>{cancelText}</Button>
            <Button onClick={this.handleOk} type='primary' className={`${footerPrefix}-confirm`}>{okText}</Button>
          </>
        )}
      </div>
    );
  };

  render() {
    const {
      prefix,
      className,
      style,
      visible,
      destroyOnClose,
      width,
      mask,
    } = this.props;
    const modalPrefix = `${prefix}-modal`;

    const classes = classNames(
      modalPrefix,
      className
    );

    let modalStyle: React.CSSProperties = { width };
    if (style) {
      modalStyle = { ...modalStyle, ...style };
    }

    return (
      <PurePortal selector='body'>
        <div>
          {mask && <CSSTransition
            timeout={TIMEOUT}
            in={visible}
            classNames={`${modalPrefix}__mask`}
            unmountOnExit={destroyOnClose}
            mountOnEnter
            appear
          >
            <div
              className={`${modalPrefix}__mask`}
              onClick={this.handleClose}
            />
          </CSSTransition>}


          <CSSTransition
            timeout={TIMEOUT}
            in={visible}
            classNames={modalPrefix}
            unmountOnExit={destroyOnClose}
            mountOnEnter
            appear
          >
            <div className={classes} style={modalStyle}>
              {this.renderHeader()}
              {this.renderBody()}
              {this.renderFooter()}
            </div>
          </CSSTransition>
        </div>
      </PurePortal>
    );
  }
}

export default Modal;
