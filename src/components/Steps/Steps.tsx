import * as React from 'react';
import classnames from '../../utils/classnames';
import Step from './Step';

export interface StepsProps {
  /** 当前步 */
  current?: number;
  /** 方向 */
  direction?: string;
  /** 主题 */
  theme?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

export interface StepsStates {}

class Steps extends React.PureComponent<StepsProps, StepsStates> {
  static Step: typeof Step;

  static defaultProps = {
    direction: 'horizontal',
    style: {}
  };

  render() {
    const {
      current,
      direction,
      theme,
      className,
      style,
      children
    } = this.props;
    const classes = classnames({ prefix: 'hmly-steps', theme });
    const StepChildren = React.Children.map(
      children,
      (child: any, index: number) => {
        if (!child) return child;

        return React.cloneElement(child, {
          current,
          direction,
          theme,
          stepNumber: index + 1,
          isFirst: index === 0,
          isLast: index + 1 === (children as any).length,
          total: (children as any).length
        });
      }
    );

    return (
      <section className={classes('hmly-steps', className)} style={style}>
        {StepChildren}
      </section>
    );
  }
}

export default Steps;
