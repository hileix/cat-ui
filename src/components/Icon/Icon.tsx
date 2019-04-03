import * as React from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'
// import { StyledIcon } from './styled'
import './Icon.css'

export interface IconProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 图标类型 */
  type: string;
}

/**
 * Icon
 */
class Icon extends PureComponent<IconProps, any> {

  render() {
    const { className, style, type } = this.props
    const classes = classNames('hmly-icon', `hmly-icon-${type}`, className)

    return (
      <i
        className={classes}
        style={style} />
    )
  }
}

export default Icon
