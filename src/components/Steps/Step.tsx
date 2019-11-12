import * as React from 'react';
import classnames from '../../utils/classnames';

export interface StepProps {
  /** 当前步 */
  current?: number;
  /** 方向 */
  direction?: string;
  /** 标题 */
  title?: string;
  /** 描述 */
  description?: string;
  /** 主题 */
  theme?: string;
  /** 当前步数 */
  stepNumber?: number;
  /** 是否第一个 */
  isFirst?: boolean;
  /** 是否最后一个 */
  isLast?: boolean;
  /** 步骤总个数 */
  total?: number;
}

export interface StepStates {}

export const prefix = 'cat-steps__step';

class Step extends React.PureComponent<StepProps, StepStates> {
  render() {
    const {
      current,
      direction,
      theme,
      stepNumber,
      title,
      description,
      total,
      isLast
    } = this.props;
    const suffix =
      +current === +stepNumber
        ? 'current'
        : +current > +stepNumber
        ? 'active'
        : '';
    const classes = classnames({ prefix, theme, suffix });

    return (
      <section className={classes()}>
        <div className={`${classes('icon')}`}>
          <span className={classes('icon-index')}>{stepNumber}</span>
        </div>
        <div className={classes('content')}>
          <div className={`${classes('content-title')}`}>{title}</div>
          <div className={`${classes('content-description')}`}>
            {description}
          </div>
        </div>
      </section>
    );
  }
}

export default Step;
