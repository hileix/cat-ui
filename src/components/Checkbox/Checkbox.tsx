import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import CheckboxGroup from './CheckboxGroup';

export interface CheckboxProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 值 */
  value?: any;
  /** 选项变化时的回调函数	 */
  onChange?: any;
}

/**
 * 多选框
 */
class Checkbox extends Component<CheckboxProps, any> {
  static Group = CheckboxGroup;

  handleClick = (e: any) => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }

    onChange &&
      onChange({
        target: {
          ...this.props,
          checked: e.target.checked
        },
        stopPropagation() {
          e.stopPropagation();
        },
        preventDefault() {
          e.preventDefault();
        },
        nativeEvent: e.nativeEvent
      });
  };

  render() {
    const {
      className,
      style,
      disabled,
      readOnly,
      checked,
      value,
      children,
      onChange
    } = this.props;
    const classes = classNames('cat-checkbox', className);

    return (
      <div className={classes} style={style}>
        <span className="cat-checkbox__wrapper">
          <span
            className={classNames('cat-checkbox__inner', {
              'cat-checkbox__inner--checked': checked,
              'cat-checkbox__inner--disabled': disabled
            })}
          />
          <input
            className={classNames('cat-checkbox__input', {
              'cat-checkbox__input--disabled': disabled
            })}
            value={value}
            checked={checked}
            disabled={disabled}
            readOnly={readOnly}
            onClick={this.handleClick}
            onChange={onChange}
          />
        </span>
        <span
          className={classNames('cat-checkbox__label', {
            'cat-checkbox__label--disabled': disabled
          })}
        >
          {children}
        </span>
      </div>
    );
  }
}

export default Checkbox;
