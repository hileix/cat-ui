import * as React from 'react';
import * as PropTypes from 'prop-types';
import { PureComponent } from 'react';
import classNames from 'classnames';

interface IOptionInfo {
  /**
   * 当前项的值
   */
  value?: string | number;
  /**
   * 当前项的索引
   */
  index?: number;
  /**
   * 当前项的索引
   */
  disabled?: boolean;
  /**
   * label
   */
  label: string;
}

export interface IOptionProps {
  /**
   * 样式前缀
   */
  prefix?: string;
  /**
   * css 类名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: object;
  /**
   * 当前项的值
   */
  value?: string | number;
  /**
   * 当前项的索引
   */
  index?: number;
  /**
   * 禁用该项
   */
  disabled?: boolean;
  /**
   * react element
   */
  children?: React.ReactNode;
  /**
   * 点击的回调
   */
  onClick?: (optionInfo: IOptionInfo) => {};
  /**
   * 鼠标移入的回调
   */
  onMouseEnter?: (optionInfo: IOptionInfo) => {};
  /**
   * 鼠标移出的回调
   */
  onMouseLeave?: (optionInfo: IOptionInfo) => {};
  /**
   * label
   */
  label?: string;
}

/**
 * Option组件： 一个可选项的容器组件
 * 服务于Selection
 */
class Option extends PureComponent<IOptionProps, {}> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    index: PropTypes.number,
    disabled: PropTypes.bool,
    children: PropTypes.node,
    onClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func
  };

  static defaultProps = {
    prefix: 'cat'
  };

  constructor(props: IOptionProps) {
    super(props);
  }

  handleClick = () => {
    const { value, index, disabled, onClick, label, children } = this.props;
    onClick && onClick({ value, index, disabled, label: label || children as string });
  };

  handleMouseEnter = () => {
    const { value, index, disabled, onMouseEnter, label, children } = this.props;
    onMouseEnter && onMouseEnter({ value, index, disabled, label: label || children as string });
  };

  handleMouseLeave = () => {
    const { value, index, disabled, onMouseLeave, label, children  } = this.props;
    onMouseLeave && onMouseLeave({ value, index, disabled, label: label || children as string });
  };

  render() {
    const { prefix, style, className, value, children } = this.props;
    const classes = classNames(`${prefix}-select-option`, className);

    return (
      <div
        className={classes}
        style={style}
        onClick={this.handleClick}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      >
        {children || value}
      </div>
    );
  }
}

export default Option;
