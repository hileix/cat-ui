import * as React from 'react'
import { Component } from 'react'
import { StyledTabs } from './styled'

export interface TabsProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * Tabs
 */
class Tabs extends Component<TabsProps, any> {

  render() {
    return (
      <StyledTabs>
        Tabs
      </StyledTabs>
    )
  }
}

export default Tabs

