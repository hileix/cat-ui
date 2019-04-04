import * as React from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'
import { StyledIcon } from './styled'

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

    return (<React.Fragment>
      <i
        className={classes}
        style={style} />
      <StyledIcon />
    </React.Fragment>
    )
  }
}

export default Icon
