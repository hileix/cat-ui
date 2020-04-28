import React from 'react';
import { Component, cloneElement } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export interface RadioGroupProps {
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
   * 是否选中
   */
  checked?: boolean;
  /** 
   * 默认值，仅在初始化有效
   */
  defaultValue?: any;
  /** 
   * 当前选中的值
   */
  value?: any;
  /** 
   * 选项变化时的回调函数
	 */
  onChange?: (e: any) => void;
}

export interface RadioGroupState {
  value: any;
}

/**
 * RadioGroup
 */
class RadioGroup extends Component<RadioGroupProps, RadioGroupState> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
    onChange: PropTypes.func,
  }
  static defaultProps = {
    disabled: false,
  };

  constructor(props: RadioGroupProps) {
    super(props);
    let value = '';
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    }
    this.state = {
      value: value,
    };
  }

  static getDerivedStateFromProps(nextProps: RadioGroupProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  handleRadioChange = (e: any) => {
    const { value } = e.target;
    const { onChange } = this.props;
    // 是否有value值传递下来
    if (!('value' in this.props)) {
      this.setState({
        value
      });
    }
    onChange && onChange(value);
  };

  render() {
    const { value } = this.state;
    const {
      className,
      style,
      disabled,
      children
    } = this.props;
    const classes = classNames('cat-radio-group', className);
    const radios = React.Children.map(children, (element: any, ) => {
      if (!element) {
        return element;
      }
      return cloneElement(element, {
        onChange: this.handleRadioChange,
        checked: value === element.props.value,
        disabled: disabled || element.props.disabled,
      });
    });

    return (
      <div className={classes} style={style}>
        {radios}
      </div>
    );
  }
}

export default RadioGroup;
