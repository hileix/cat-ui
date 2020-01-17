import React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import noop from 'lodash/noop';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';

export interface SwitchProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /**
   * 类名前缀
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
   * 禁用
   */
  disabled?: boolean;
  /** 
   * 选中时的内容
   */
  checkedChildren?: React.ReactNode;
  /** 
   * 非选中时的内容
   */
  unCheckedChildren?: React.ReactNode;
  /** 
   * 变化时的回调
   */
  onChange?: (checked: boolean) => void;
  /** 
   * 是否激活
   */
  checked?: boolean;
  /** 
   * 默认值
   */
  defaultChecked?: boolean;
  /** 
   * 自动聚焦
   */
  autoFocus: boolean;
}

export interface SwitchState {
  checked: boolean;
}

/**
 * Switch
 */
class Switch extends Component<SwitchProps, SwitchState> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    checkedChildren: PropTypes.node,
    unCheckedChildren: PropTypes.node,
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    autoFocus: PropTypes.bool,
  }

  static defaultProps = {
    prefix: 'cat',
    disabled: false,
    onChange: noop,
    defaultChecked: false,
    autoFocus: false,
  };

  private node: HTMLButtonElement;

  constructor(props: SwitchProps) {
    super(props);
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = {
      checked
    };
  }

  componentDidMount() {
    const { autoFocus, disabled } = this.props;
    if (autoFocus && !disabled) {
      this.focus();
    }
  }

  static getDerivedStateFromProps(nextProps: SwitchProps) {
    if ('checked' in nextProps) {
      return { checked: !!nextProps.checked };
    }
    return null;
  }

  setChecked(checked: boolean) {
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({ checked });
    }

    const { onChange } = this.props;

    onChange && onChange(checked);
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { onClick } = this.props;
    const checked = !this.state.checked;
    this.setChecked(checked);
    onClick && onClick(event);
  };

  handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.keyCode === 37) {
      // Left
      this.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      this.setChecked(true);
    }
  };

  // Handle auto focus when click switch in Chrome
  handleMouseUp = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (this.node) {
      this.blur();
    }
    if (this.props.onMouseUp) {
      this.props.onMouseUp(e);
    }
  };

  focus = () => {
    this.node.focus();
  };

  blur = () => {
    this.node.blur();
  };

  getButtonNode = (node: HTMLButtonElement) => {
    this.node = node;
  };

  render() {
    const {
      prefix,
      className,
      disabled,
      checkedChildren,
      unCheckedChildren,
      ...restProps
    } = this.props;
    const checked = this.state.checked;

    const classPrefix = `${prefix}-switch`;
    const calsses = classNames(
      classPrefix,
      {
        'cat-switch--checked': checked,
        'cat-switch--disabled': disabled
      },
      className
    );

    const buttonProps = omit(restProps, ['onChange'])

    return (
      <button
        {...buttonProps}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={calsses}
        ref={this.getButtonNode}
        onKeyDown={this.handleKeyDown}
        onClick={this.handleClick}
        onMouseUp={this.handleMouseUp}
      >
        <span className="cat-switch__inner">
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </button>
    );
  }
}

export default Switch;
