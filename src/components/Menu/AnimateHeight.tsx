import * as React from 'react';
import { PureComponent } from 'react';
import classNames from 'classnames';

export interface AnimateHeightProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: any;
  duration: number;
  easing: string;
  /** 高度 */
  height: string | number;
}

/**
 * AnimateHeight
 */
class AnimateHeight extends PureComponent<AnimateHeightProps, any> {
  constructor(props: AnimateHeightProps) {
    super(props);
    this.state = {
      overflow: 'visible'
    };
  }

  static defaultProps = {
    duration: 250,
    easing: 'ease'
  };

  render() {
    const {
      className,
      style = {},
      height,
      duration,
      easing,
      children
    } = this.props;
    const { overflow } = this.state;
    const classes = classNames('cat-animate', className);

    const userTransition = style.transition ? `${style.transition},` : '';
    const transitionString = `${userTransition} height ${duration}ms ${easing}`;
    const componentStyle = {
      ...style,
      height,
      overflow: overflow || style.overflow
    };

    return (
      <div className={classes} style={componentStyle}>
        {children}
      </div>
    );
  }
}

export default AnimateHeight;
