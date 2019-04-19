import * as React from 'react'
import { PureComponent } from 'react'
import classNames from 'classnames'
import { StyledAnimateHeight } from './styled'

export interface AnimateHeightProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * AnimateHeight
 */
class AnimateHeight extends PureComponent<AnimateHeightProps, any> {
  render() {
    const { className, style } = this.props
    const classes = classNames('hmly-animate', className)

    return (
      <StyledAnimateHeight
        className={classes}
        style={style}>
        AnimateHeight
      </StyledAnimateHeight>
    )
  }
}

export default AnimateHeight
