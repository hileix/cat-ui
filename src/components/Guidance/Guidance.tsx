import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

export interface GuidanceProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * Guidance 引导
 */
class Guidance extends Component<GuidanceProps, any> {
  render() {
    const { className, children, ...restProps } = this.props;

    return (
      <div className={classNames('cat-card', className)} {...restProps}>
        {children}
      </div>
    );
  }
}

export default Guidance;
