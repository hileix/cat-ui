import * as React from 'react';
import { Component, cloneElement } from 'react';
import classNames from 'classnames';

export interface RadioGroupProps {
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
  /** 默认值，仅在初始化有效 */
  defaultValue?: string | number;
  /** 值 */
  value?: string | number;
  /** 布局 */
  layout?: 'vertical' | 'horizontal';
  /** 选项变化时的回调函数	 */
  onChange?: any;
}

/**
 * RadioGroup
 */
class RadioGroup extends Component<RadioGroupProps, any> {
  static defaultProps = {
    layout: 'horizontal'
  };

  constructor(props: RadioGroupProps) {
    super(props);
    let value: string | number = '';
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    }
    this.state = {
      value: value
    };
  }

  static getDerivedStateFromProps(nextProps: RadioGroupProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    } else {
      return null;
    }
  }

  onRadioChange = (e: any) => {
    const { value } = e.target;
    const { onChange } = this.props;
    // 是否有value值传递下来
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    onChange && onChange(value);
  };

  render() {
    const self = this;
    const { value } = this.state;
    const {
      className,
      style,
      layout,
      disabled,
      readOnly,
      checked,
      children
    } = this.props;
    const classes = classNames('cat-radio-group', className);
    const radios = React.Children.map(children, (element: any, index) => {
      if (!element) {
        return element;
      }
      return cloneElement(element, {
        key: index,
        layout: layout,
        onChange: self.onRadioChange,
        checked: value === element.props.value
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
