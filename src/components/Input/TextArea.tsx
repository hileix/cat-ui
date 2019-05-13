import * as React from 'react'
import { pick } from 'lodash'
import Wrapper from './Wrapper'

export interface TextAreaProps {
  /** 默认值 */
  defaultValue?: string;
  /** 值 - 如果传入value属性，则TextArea变为受控, 因此文本域的值只根据value设置 */
  value?: string;
  /** 自动大小计算 */
  autosize?: boolean;
  /** 显示计数 */
  showCount?: boolean;
  /** 最大长度 */
  maxLength?: number;
}

interface TextAreaStates {

}

class TextArea extends React.PureComponent<TextAreaProps, TextAreaStates> {
  render () {
    return (
      <textarea />
    )
  }
}

export default TextArea
