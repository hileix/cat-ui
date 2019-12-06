import * as React from 'react';
import { Component } from 'react';
import * as PropTypes from 'prop-types';
import omit from 'omit.js';

export interface StepProps {
  /**
   * 前缀
   */
  prefix?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * id
   */
  id?: number | string;
  /**
   * 该步骤选中元素的 css 选择器
   */
  selector?: string;
}

/**
 * Guidance 引导 step
 */
class Guidance extends Component<StepProps> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    selector: PropTypes.string
  };
  static defaultProps = {
    prefix: 'cat'
  };

  render() {
    const { prefix, className, style, children, ...restProps } = this.props;
    const classPrefix = `${prefix}-guidance`;
    const otherProps = omit(restProps, ['id']);

    return (
      <div className={classPrefix} style={style} {...otherProps}>
        {children}
      </div>
    );
  }
}

export default Guidance;
