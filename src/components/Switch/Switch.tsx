import * as React from 'react';
import classNames from 'classnames';
import { Component } from 'react';
import noop from 'lodash/noop';

export interface SwitchProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 禁用 */
  disabled?: boolean;
  /** 激活时 */
  checkedChildren?: any;
  /** 未激活时 */
  unCheckedChildren?: any;
  /** 开关状态变化时 */
  onChange?: any;
  /** 鼠标松开 */
  onMouseUp?: any;
  /** 鼠标点击 */
  onClick?: any;
  /** tab索引 */
  tabIndex?: number;
  /** 是否激活 */
  checked?: boolean;
  /** 默认值 */
  defaultChecked?: boolean;
  /** 自动聚焦 */
  autoFocus?: boolean;
  /** 自动聚焦 */
  loadingIcon?: any;
}
/**
 * Switch
 */

class Switch extends Component<SwitchProps, any> {
  private switchRef: any;
  private node: any;
  [key: string]: any;

  static defaultProps = {
    // checkedChildren: '',
    // unCheckedChildren: '',
    className: '',
    defaultChecked: false,
    onChange: noop,
    onClick: noop
  };

  constructor(props: SwitchProps) {
    super(props);
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = { checked };
    this.switchRef = React.createRef();
  }

  componentDidMount() {
    const { autoFocus, disabled } = this.props;
    this.node = this.switchRef.current;
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

  setChecked(checked: any) {
    if (this.props.disabled) {
      return;
    }
    if (!('checked' in this.props)) {
      this.setState({ checked });
    }
    this.props.onChange(checked);
  }

  toggle: React.MouseEventHandler<HTMLButtonElement> = () => {
    const { onClick } = this.props;
    const checked = !this.state.checked;
    this.setChecked(checked);
    onClick(checked);
  };

  handleKeyDown = (e: any) => {
    if (e.keyCode === 37) {
      // Left
      this.setChecked(false);
    } else if (e.keyCode === 39) {
      // Right
      this.setChecked(true);
    }
  };

  // Handle auto focus when click switch in Chrome
  handleMouseUp = (e: any) => {
    if (this.node) {
      this.node.blur();
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

  saveNode = (node: any) => {
    this.node = node;
  };

  render() {
    const {
      className,
      disabled,
      loadingIcon,
      checkedChildren,
      unCheckedChildren,
      ...restProps
    } = this.props;
    const checked = this.state.checked;

    const prefix = 'cat-switch';
    const calsses = classNames(
      prefix,
      {
        'cat-switch--checked': checked,
        'cat-switch--disabled': disabled
      },
      className
    );
    return (
      <button
        {...restProps}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        className={calsses}
        ref={this.saveNode}
        onKeyDown={this.handleKeyDown}
        onClick={this.toggle}
        onMouseUp={this.handleMouseUp}
      >
        {loadingIcon}
        <span className="cat-switch__inner">
          {checked ? checkedChildren : unCheckedChildren}
        </span>
      </button>
    );
  }
}

export default Switch;
