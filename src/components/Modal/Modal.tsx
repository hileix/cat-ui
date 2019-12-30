import * as React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';
import Portal from '../Portal';
import Button from '../Button';
import Icon from '../Icon';

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
  /** 不要关闭按钮的Icon */
  noCloseIcon: boolean;
  /** 自定义的ModalFooter */
  footer?: React.ReactNode;
  /** 点击确定回调	 */
  onOk?: (e: any) => {};
  /** 关闭操作回调函数 */
  onClose: (e: any) => void;
}

/**
 * 对话框
 */
class Modal extends PureComponent<ModalProps, any> {
  static modalId: number = 0;
  static pools: Array<number> = [];
  static originalBodyStyle: string = '';
  static originalFirstDivStyle: string = '';
  private mid: number;
  static defaultProps = {
    prefix: 'cat',
    theme: 'primary',
    size: 'md',
    visible: false,
    disabled: false,
    noCloseIcon: false
  };

  constructor(props: ModalProps) {
    super(props);
    this.mid = Modal.modalId++;
    Modal.pools.push(0);
  }

  componentDidUpdate() {
    this.setBodyStyle();
  }

  onMaskClick = (e: any) => {
    const { onClose } = this.props;
    if (e.target === e.currentTarget) {
      onClose && onClose(e);
    }
  };

  handleCancle = (e: any) => {
    const { onClose } = this.props;
    if (onClose) {
      onClose(e);
    } else {
      this.onMaskClick(e);
    }
  };

  handleOk = (e: any) => {
    const { onOk } = this.props;
    if (onOk) {
      onOk(e);
    } else {
      this.onMaskClick(e);
    }
  };

  setBodyStyle = () => {
    const nodeBody = document.querySelector('body');
    const nodeFirstDiv = document.querySelector('body > div');
    const { visible } = this.props;
    const hasScroll =
      document.body.scrollHeight > document.documentElement.clientHeight;
    if (visible) {
      Modal.pools[this.mid] = 1;
      Modal.originalBodyStyle = (nodeBody as any).getAttribute('style');
      Modal.originalFirstDivStyle = (nodeBody as any).getAttribute('style');
      const bodyStyle = hasScroll
        ? 'overflow: hidden; padding-right: 15px;'
        : 'padding-right: 15px;';
      (nodeBody as any).setAttribute('style', bodyStyle);
      // nodeFirstDiv.setAttribute('style', 'filter: blur(2px);')
    } else {
      Modal.pools[this.mid] = 0;
      if (Modal.pools.indexOf(1) === -1) {
        // 背景层不可滑动
        if (Modal.originalBodyStyle) {
          (nodeBody as any).setAttribute('style', Modal.originalBodyStyle);
        } else {
          (nodeBody as any).removeAttribute('style');
        }
        // 背景层模糊
        // if (Modal.originalFirstDivStyle) {
        //   nodeFirstDiv.setAttribute('style', Modal.originalFirstDivStyle)
        // } else {
        //   nodeFirstDiv.removeAttribute('style')
        // }
      }
    }
  };

  renderFooter = () => {
    const { footer, okText, cancelText, align } = this.props;

    if (footer) {
      return footer;
    } else {
      const footerPrefix = 'cat-modal__footer';

      return (
        <div
          className={classNames(footerPrefix, {
            [`${footerPrefix}--center`]: align
          })}
        >
          {cancelText.length > 0 && (
            <Button onClick={this.handleCancle}>{cancelText}</Button>
          )}
          <Button onClick={this.handleOk}>{okText}</Button>
        </div>
      );
    }
  };

  render() {
    const {
      prefix,
      className,
      style,
      theme,
      size,
      width,
      disabled,
      visible,
      title,
      okText,
      cancelText,
      align,
      noCloseIcon,
      children,
      ...others
    } = this.props;
    const modalPrefix = 'cat-modal';

    const classes = classNames(
      modalPrefix,
      {
        [`${modalPrefix}--${size}`]: size,
        [`${modalPrefix}--${align}`]: align
      },
      className
    );
    const modalFooter = this.renderFooter();

    return (
      <Portal visible={visible}>
        <div>
          <div
            className={`${modalPrefix}__background`}
            onClick={this.onMaskClick}
          />
          <div className={classes} style={style}>
            <div className={`${modalPrefix}__header`}>
              {title}
              {!noCloseIcon && (
                <div className={`${modalPrefix}__close`}>
                  <Icon type='close' onClick={this.onMaskClick} />
                </div>
              )}
            </div>
            <div className={`${modalPrefix}__body`}>{children}</div>
            {modalFooter}
          </div>
        </div>
      </Portal>
    );
  }
}

export default Modal;
