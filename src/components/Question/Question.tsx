import * as React from 'react';
import { PureComponent } from 'react';
import Tooltip from '../Tooltip';
import Icon from '../Icon';

export interface QuestionProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** Question hover后显示的内容 */
  tips?: string | React.ReactNode;
}

/**
 * 文字提示
 */
class Question extends PureComponent<QuestionProps, any> {
  render() {
    const { className, style, tips } = this.props;

    return (
      <Tooltip content={tips}>
        <Icon type="question" className={className} style={style} />
      </Tooltip>
    );
  }
}

export default Question;
