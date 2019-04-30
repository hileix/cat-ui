import * as React from 'react'
import { Component } from 'react'
import classNames from 'classnames'
import { StyledPageItem } from './styled'

export interface PageItemProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** active */
  active?: boolean;
  /** value */
  value?: number;
  /** onItemClick */
  onItemClick?: any;
}

/**
 * PageItem
 */
class PageItem extends Component<PageItemProps, any> {
  handleClick = () => {
    const { onItemClick, value } = this.props
    onItemClick && onItemClick(value)
  }

  render() {
    const { className, style, active, children } = this.props
    const classes = classNames('hmly-page-item', className)

    return (
      <StyledPageItem
        className={classes}
        style={style}
        active={active}
        onClick={this.handleClick}>
        {children}
      </StyledPageItem>
    )
  }
}

export default PageItem
