import * as React from 'react';
import { Component, cloneElement } from 'react';
import classNames from 'classnames';
import Option from './Option';
import Popover from '../Popover';

export interface SelectProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 默认提示文案 */
  placeholder?: string;
  /** 默认值，仅在初始化有效 */
  defaultValue?: string | number;
  /** 指定当前选中的条目；为空字符串时，显示placeholder */
  value?: string | number;
  /** 选中option时的value变化 */
  onChange?: (value?: string | number, text?: any) => {};
}

/**
 * 下拉选择
 */
class Select extends Component<SelectProps, any> {
  static Option: typeof Option;
  private selectRef: any;

  constructor(props: SelectProps) {
    super(props);
    let value: string | number = '';
    if ('value' in props) {
      value = props.value;
    } else if ('defaultValue' in props) {
      value = props.defaultValue;
    }
    this.state = {
      isPopOpen: false,
      selectWidth: 'auto',
      value: value
    };
    this.selectRef = React.createRef();
  }

  static getDerivedStateFromProps(nextProps: SelectProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    } else {
      return null;
    }
  }

  componentDidMount() {
    const selectDOM = this.selectRef.current;
    if (selectDOM) {
      const selectRect = selectDOM.getBoundingClientRect();
      const { width } = selectRect;
      this.setState({ selectWidth: width + 'px' });
    }
  }

  onPopoverChange = (value: boolean) => {
    this.setState({ isPopOpen: value });
  };

  onOptionClick = (value: string | number, child: any) => {
    const { onChange } = this.props;
    // 是否有value值传递下来
    if (!('value' in this.props)) {
      this.setState({
        value: value
      });
    }
    onChange && onChange(value, child);
  };

  render() {
    const self = this;
    const { isPopOpen, selectWidth, value } = this.state;
    const { className, style, placeholder, children } = this.props;
    let filler = placeholder;
    const options = React.Children.map(children, (element: any, index) => {
      if (!element) {
        return element;
      }
      // 显示value值对应的文本内容
      if (element.props && element.props.value === value) {
        filler = element.props.children;
      }
      return cloneElement(element, {
        key: index,
        onOptionClick: self.onOptionClick
      });
    });
    const isValueEmpty = value === '' || typeof value === undefined;

    const prefix = 'cat-select';
    const classes = classNames(
      prefix,
      {
        [`${prefix}--open`]: isPopOpen,
        [`${prefix}--placeholder`]: isValueEmpty
      },
      className
    );

    return (
      <Popover mode='click' onChange={this.onPopoverChange}>
        <Popover.Trigger>
          <div ref={this.selectRef} className={classes} style={style}>
            {filler}
          </div>
        </Popover.Trigger>
        <Popover.Content>
          {function() {
            return (
              <div
                className={classNames(`${prefix}__options-wrapper`)}
                style={{ width: selectWidth }}
              >
                {options}
              </div>
            );
          }}
        </Popover.Content>
      </Popover>
    );
  }
}

export default Select;
