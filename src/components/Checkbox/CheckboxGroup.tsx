import * as React from 'react';
import { Component, cloneElement } from 'react';
import classNames from 'classnames';

export interface CheckboxGroupProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 整组失效是否禁用 */
  disabled?: boolean;
  /** 整组失效是否只读 */
  readOnly?: boolean;
  /** 是否选中 */
  checked?: boolean;
  /** 默认值，仅在初始化有效 */
  defaultValue?: Array<any>;
  /** 值 */
  value?: Array<any>;
  /** 选项变化时的回调函数 */
  onChange?: any;
}

/**
 * CheckboxGroup
 */
class CheckboxGroup extends Component<CheckboxGroupProps, any> {
  constructor(props: CheckboxGroupProps) {
    super(props);
    let value = [];
    if ('value' in props) {
      value = props.value as any;
    } else if ('defaultValue' in props) {
      value = props.defaultValue as any;
    }
    this.state = {
      value: value
    };
  }

  static getDerivedStateFromProps(nextProps: CheckboxGroupProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    } else {
      return null;
    }
  }

  onCheckboxChange = (e: any) => {
    const { value } = this.state;
    const { onChange } = this.props;
    const newValue = e.target.value;
    const optionIndex = value.indexOf(newValue);

    const values = [...value];
    if (optionIndex === -1) {
      values.push(newValue);
    } else {
      values.splice(optionIndex, 1);
    }
    // 是否有value值传递下来
    if (!('value' in this.props)) {
      this.setState({ value: values });
    }
    onChange && onChange(values);
  };

  render() {
    const { value } = this.state;
    const {
      className,
      style,
      disabled,
      readOnly,
      checked,
      children
    } = this.props;
    const classes = classNames('cat-checkbox-group', className);
    const Checkboxs = React.Children.map(children, (element: any, index) => {
      if (!element) {
        return element;
      }
      const checked = value.indexOf(element.props.value) > -1;
      return cloneElement(element, {
        onChange: this.onCheckboxChange,
        key: value,
        checked,
        disabled: disabled,
        readOnly: readOnly
      });
    });

    return (
      <div className={classes} style={style}>
        {Checkboxs}
      </div>
    );
  }
}

export default CheckboxGroup;
