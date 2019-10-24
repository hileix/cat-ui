import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface GuidanceProps {
  /** 前缀 */
  prefix?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 被激活的 step id */
  activeId?: number | string;
  /** 点击下一步的回调 */
  onNext?: (activeId: number | string) => void;
}

/**
 * Guidance 引导
 */
class Guidance extends Component<GuidanceProps, any> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    activeId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onNext: PropTypes.func
  };
  static defaultProps = {
    prefix: 'cat'
  };
  render() {
    const { prefix, className, children, ...restProps } = this.props;

    return (
      <div className={classNames('cat-card', className)} {...restProps}>
        {children}
      </div>
    );
  }
}

export default Guidance;
