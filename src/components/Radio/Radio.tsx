import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import RadioGroup from './RadioGroup';
import PropTypes from 'prop-types';

export interface RadioProps {
  id?: string;
  name?: string;
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
   * 是否禁用
   */
  disabled: boolean;
  /**
   * 默认是否选中
   */
  defaultChecked: boolean;
  /** 
   * 是否选中
   */
  checked?: boolean;
  /** 
   * 值
   */
  value: any;
  /**
   * 点击时的回调
   */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface RadioState {
  checked: boolean;
}

/**
 * 单选框
 */
class Radio extends Component<RadioProps, RadioState> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.any,
  }

  static defaultProps = {
    prefix: 'cat',
    disabled: false,
    defaultChecked: false,
  };

  static Group: typeof RadioGroup;

  static getDerivedStateFromProps(nextProps: RadioProps) {
    if ('checked' in nextProps) {
      return { checked: nextProps.checked };
    }
    return null;
  }

  constructor(props: RadioProps) {
    super(props);
    let checked = false;
    if ('checked' in props) {
      checked = !!props.checked;
    } else {
      checked = !!props.defaultChecked;
    }
    this.state = {
      checked,
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { disabled, onChange } = this.props;
    if (disabled) {
      return;
    }

    this.setState({ checked: !this.state.checked });
    onChange && onChange(e);
  };

  render() {
    const {
      id,
      name,
      className,
      style,
      disabled,
      children,
      prefix,
      value,
    } = this.props;
    const { checked } = this.state;

    const classPrefix = `${prefix}-radio`;
    const classes = classNames(
      `${classPrefix}-wrapper`,
      {
        [`${classPrefix}-wrapper--disabled`]: disabled,
      },
      className,
    );

    return (
      <label className={classes} style={style}>
        <span
          className={classNames(
            `${classPrefix}__inner-wrapper`,
          )}
        >
          <span
            className={classNames(`${classPrefix}__inner`, {
              [`${classPrefix}__inner--disabled`]: disabled,
              [`${classPrefix}__inner--checked`]: checked
            })}
          />
          <input
            className={classNames(classPrefix, {
              [`${classPrefix}--disabled`]: disabled
            })}
            type='radio'
            name={name}
            id={id}
            value={value}
            checked={checked}
            disabled={disabled}
            onChange={this.handleChange}
          />
        </span>
        {children && (
          <span
            className={classNames(
              'cat-radio__label',
              {
                [`cat-radio__label--disabled`]: disabled
              }
            )}
          >
            {children}
          </span>
        )}
      </label>
    );
  }
}

export default Radio;
