import * as React from 'react'
import { Component } from 'react'
import { StyledTabs, TabsNav, TabsContent } from './styled'

export interface TabsProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 激活的tab-key */
  activeId?: string | number;
}

/**
 * Tabs
 */
class Tabs extends Component<TabsProps, any> {
  toRender = () => {
    const { children } = this.props
    React.Children.forEach(children, (child: any) => {
      const { props: { tab, id } } = child
      console.log('child', child, tab, id)
    })
  }

  toRenderNav = () => {

  }

  render() {
    let { className, children, activeId } = this.props
    this.toRender()

    return (
      <StyledTabs>
        <TabsNav>
          TabsNav
        </TabsNav>
        <TabsContent>
          TabsContent
        </TabsContent>
      </StyledTabs>
    )
  }
}

export default Tabs

