import * as React from 'react';
import pick from 'lodash/pick';
import { TSize, Ttheme, TinputState, HandleProps } from './interface';
import Wrapper from './Wrapper';
import Handles from './Handles';
import Icon from '../Icon';
import classNames from 'classnames';

export interface InputProps extends HandleProps {
  /**
   * 自动聚焦
   */
  autoFocus?: boolean;
  /**
   * 类名
   */
  className?: string;
  /**
   * 默认值
   */
  defaultValue?: string;
  /**
   * 禁用
   */
  disabled?: boolean;
  /**
   * 值 - 如果传入value属性，则input框变为受控, 因此输入框的值只根据value设置
   */
  value?: string;
  /**
   * 大小尺寸 'large' | 'normal' | 'small'
   */
  size?: TSize;
  /**
   * 类型 'line' | 'line-pwd' | 'box' | 'box-pwd'
   */
  type?: Ttheme;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 是否启用原生占位符(无动效)
   */
  placeholderOrigin?: boolean;
  /**
   * 展示一键清除按钮
   */
  showClear?: boolean;
  /**
   * 自定义清除按钮
   */
  customClear?: React.ReactNode;
  /**
   * 展示密码和文本切换按钮
   */
  showEye?: boolean;
  /**
   * 是否出错
   */
  error?: boolean;
  /**
   * 输入框消息提示
   */
  message?: string;
  /**
   * 是否能对输入框进行复制、粘贴、剪贴的操作
   */
  clipboardFree?: boolean;
  /**
   * 是否能对输入框进行复制的操作
   */
  copyFree?: boolean;
  /**
   * 是否能对输入框进行粘贴的操作
   */
  pasteFree?: boolean;
  /**
   * 是否能对输入框进行剪贴的操作
   */
  cutFree?: boolean;
  /**
   * icon style样式
   */
  iconStyle?: object;
  /**
   * 聚焦回调
   */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any;
  /**
   * 失焦回调
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  /**
   * 值改变的回调
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  /**
   * 按键的回调
   */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  /**
   * 按下回车键的回调
   */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  /**
   * 点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLInputElement>) => any;
  /**
   * 执行粘贴操作的回调
   */
  onPaste?: (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.ClipboardEvent<HTMLInputElement>
  ) => any;
  /**
   * 点击鼠标右键的回调
   */
  onContextMenu?: (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.ClipboardEvent<HTMLInputElement>
  ) => any;
  /**
   * 执行复制操作的回调
   */
  onCopy?: (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.ClipboardEvent<HTMLInputElement>
  ) => any;
  /**
   * 执行剪切操作的回调
   */
  onCut?: (
    e:
      | React.MouseEvent<HTMLInputElement, MouseEvent>
      | React.ClipboardEvent<HTMLInputElement>
  ) => any;
}

export interface InputStates {
  type: 'text' | 'password';
  value: string;
  domProps: Array<string>;
  inputState: TinputState;
}

export interface IdomProps {
  disabled?: boolean;
  [propName: string]: any;
}

const domProps: IdomProps = {
  disabled: false
};

export const enum inputStates {
  default,
  hover,
  active,
  error
}

class Input extends React.PureComponent<InputProps, InputStates> {
  static defaultProps = {
    autoFocus: false,
    disabled: false,
    type: 'line',
    error: false,
    placeholderOrigin: false,
    clipboardFree: true,
    copyFree: true,
    pasteFree: true,
    cutFree: true
  };

  static getDerivedStateFromProps(nextProps: InputProps) {
    let updateProps = {
      value: nextProps.value,
      error: nextProps.error,
      message: nextProps.message,
      className: nextProps.className
    }

    return updateProps;
  }

  private input: React.RefObject<HTMLInputElement>;
  private isIconBlur: boolean;

  public constructor(props: InputProps) {
    super(props);
    const type =
      typeof props.type === 'undefined'
        ? 'text'
        : props.type === 'line-pwd' || props.type === 'box-pwd'
        ? 'password'
        : 'text';
    const value =
      (typeof props.value === 'undefined' ? props.defaultValue : props.value) ||
      '';
    const inputState = props.error ? inputStates.error : inputStates.default;
    this.state = {
      type,
      value,
      domProps: Object.keys(domProps),
      inputState
    };

    this.input = React.createRef();
    this.isIconBlur = false;
  }

  public componentDidMount() {
    const { autoFocus } = this.props;
    if (autoFocus) (this.input.current as any).focus();
  }

  private handleClear(e: React.MouseEvent<HTMLElement, MouseEvent>): void {
    this.setState({ value: '' });
    const { onChange } = this.props;
    if (onChange) {
      let event = e;
      event = Object.create(e);
      event.target = this.input.current as any;
      event.currentTarget = this.input.current as any;
      const originalInputValue = (this.input.current as any).value;
      (this.input.current as any).value = '';
      onChange(event as any);
      (this.input.current as any).value = originalInputValue;
    }
  }

  private handleEye(): void {
    this.setState(prevState => {
      const type = prevState.type === 'text' ? 'password' : 'text';
      return { type };
    });
  }

  private handleBlur(e: React.FocusEvent<HTMLInputElement>): void {
    if (!this.isIconBlur) {
      const { handleBlur } = this.props;
      (handleBlur as any).call(this, e);
    }
  }

  private iconForbidBlur(): void {
    this.isIconBlur = true;
  }

  private iconAllowBlur(): void {
    (this.input.current as any).focus();
    this.isIconBlur = false;
  }

  handleClick = (e: any) => {
    const { onClick } = this.props;
    onClick && onClick(e);
  };

  renderClear = () => {
    const { customClear } = this.props;
    if (customClear) {
      return <span onClick={this.handleClear.bind(this)}>{customClear}</span>;
    }
    return <Icon type='close' onClick={this.handleClear.bind(this)} />;
  };

  public render() {
    const { type, value, domProps, inputState } = this.state;
    const {
      size,
      className,
      message,
      placeholder,
      placeholderOrigin,
      showClear,
      showEye,
      iconStyle,
      handleFocus,
      handleChange,
      handleKeyDown,
      handleMouseEnter,
      handleMouseLeave,
      handleClipboard,
      disabled
    } = this.props;
    const theme = this.props.type;
    const props = pick(this.props, domProps) as IdomProps;
    const prefix = 'cat-input';
    const iconPrefix = 'cat-input-icon';

    return (
      <Wrapper
        value={value}
        theme={theme}
        size={size}
        state={inputState}
        className={className}
        placeholder={!placeholderOrigin && (placeholder as any)}
        message={message}
        showClear={showClear}
        showEye={showEye}
      >
        <input
          className={classNames(prefix, {
            [`${prefix}--disabled`]: disabled
          })}
          type={type}
          value={value}
          onFocus={(handleFocus as any).bind(this)}
          onBlur={(this.handleBlur as any).bind(this)}
          onChange={(handleChange as any).bind(this)}
          onKeyDown={(handleKeyDown as any).bind(this)}
          onMouseEnter={(handleMouseEnter as any).bind(this)}
          onMouseLeave={(handleMouseLeave as any).bind(this)}
          onPaste={(handleClipboard as any).bind(this)}
          onContextMenu={(handleClipboard as any).bind(this)}
          onCopy={(handleClipboard as any).bind(this)}
          onCut={(handleClipboard as any).bind(this)}
          onClick={this.handleClick}
          placeholder={placeholderOrigin ? placeholder : ''}
          ref={this.input}
          {...props}
        />
        <span
          className={classNames(iconPrefix, {
            [`${iconPrefix}--error`]: inputState === 3,
            [`${iconPrefix}--show-clear`]: showClear
          })}
          style={iconStyle}
          onMouseDown={this.iconForbidBlur.bind(this)}
          onMouseUp={this.iconAllowBlur.bind(this)}
          onTouchStart={this.iconForbidBlur.bind(this)}
          onTouchEnd={this.iconAllowBlur.bind(this)}
        >
          {showClear && this.renderClear()}
          {!showClear &&
            (theme === 'line-pwd' || theme === 'box-pwd') &&
            showEye && (
              <Icon
                type={type === 'text' ? 'eye-open' : 'eye-close'}
                onClick={this.handleEye.bind(this)}
              />
            )}
        </span>
      </Wrapper>
    );
  }
}

export default Handles(Input as any);
