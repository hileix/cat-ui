import * as React from 'react'
import { Component } from 'react'
import { StyledTag } from './styled'
import * as PropTypes from 'prop-types'

export type Props = {
  textColor?: string;
  bgColor?: string;
  borderColor?: string;
}

export interface TagProps {
  /** 文字 */
  children: React.ReactNode;
  /** 文字颜色 */
  textColor?: string;
  /** 背景颜色 */
  bgColor?: string;
  /** 边框颜色 */
  borderColor?: string;
  /** 类名 */
  className?: string;
  /** 行内样式 */
  style?: React.CSSProperties;
}

function Tag({ children, ...restProps }: Partial<TagProps>) {

  return (
    <StyledTag {...restProps}>
      {children}
    </StyledTag>
  )
}

Tag.propTypes = {
  children: PropTypes.node,
  textColor: PropTypes.string,
  bgColor: PropTypes.string,
  borderColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
}


export default Tag
