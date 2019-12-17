import * as React from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import { CommonProps } from '../../utils/commonInterface';
import Loading from '../Loading';

export interface ButtonProps extends CommonProps {
  /**
   * 按钮类型
   */
  type?: 'default' | 'primary' | 'link' | 'dashed' | 'golden';
  /**
   * 原生 button 的 type 属性
   */
  htmlType?: 'button' | 'submit' | 'reset';
  /**
   * 是否禁用
   */
  disabled?: boolean;
  /**
   * 是否将按钮宽度调整为其父宽度
   */
  block?: boolean;
  /**
   * 尺寸
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * 子元素
   */
  children?: React.ReactNode;
  /**
   * 按钮是否处于 loading 状态
   */
  loading?: boolean;

  shape?: 'square' | 'circle' | 'round' ;
}

const loadingSizeMap = {
  sm: 14,
  md: 14,
  lg: 18
};

/**
 * 按钮
 */
class Button extends React.PureComponent<
  ButtonProps & React.DOMAttributes<HTMLButtonElement>
> {
  static propTypes = {
    type: PropTypes.oneOf(['default', 'primary', 'link', 'dashed', 'golden']),
    htmlType: PropTypes.string,
    disabled: PropTypes.bool,
    block: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'md', 'lg']),
    children: PropTypes.node,
    shape: PropTypes.oneOf(['square', 'circle', 'round']),
  };
  static defaultProps = {
    prefix: 'cat',
    type: 'default',
    htmlType: 'button',
    size: 'md',
    disabled: false,
    block: false,
    loading: false,
    shape: 'square',
  };

  constructor(props: ButtonProps) {
    super(props);
  }

  render() {
    const {
      prefix,
      className,
      style,
      type,
      size,
      block,
      disabled,
      htmlType,
      children,
      loading,
      shape,
      ...othersProps
    } = this.props;
    const classes = classNames(
      `${prefix}-button`,
      `${prefix}-button--${type}`,
      `${prefix}-button--${shape}`,
      `${prefix}-button--${size}`,
      {
        [`${prefix}-button--block`]: block,
        [`${prefix}-button--disabled`]: disabled,
        [`${prefix}-button--loading`]: loading,
        [`${prefix}-button--padding-${size}`]: shape != 'circle'
      },
      className
    );
    let styles = {};
    if (style) {
      styles = { ...style };
    }

    return (
      <button
        className={classes}
        style={styles}
        disabled={disabled}
        type={htmlType}
        {...othersProps}
      >
        {loading && (
          <Loading
            visible
            className={`${prefix}-button__loading`}
            color={type === 'primary' ? '#fff' : '#537682'}
            size={loadingSizeMap[size]}
          />
        )}
        <span className={`${prefix}-button__children`}>{children}</span>
      </button>
    );
  }
}

export default Button;
