import * as React from 'react'
import { Component } from 'react'
import { StyledTabs, TabsNavBox, TabsNav, TabsContentBox, TabsContent } from './styled'
import TabPanel from './TabPanel'

export interface TabsProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 激活的tab-key */
  activeId?: string | number;
  /** 选中的tab改变时 */
  onChange?: (id: string | number) => {};
}

/**
 * Tabs
 */
class Tabs extends Component<TabsProps, any> {
  static TabsPanel = TabPanel;

  toRender = () => {
    const { children } = this.props
    let navs: Object[] = []
    let contents: Object[] = []
    React.Children.forEach(children, (child: any) => {
      const { props: { tab, id } } = child
      navs.push({id: id, tab: tab})
      contents.push(child)
    })
    return { navs, contents }
  }

  onTabClick = (id: string | number) => {
    const { onChange } = this.props
    onChange && onChange(id)
  }

  toRenderNav = (navs: Object[]) => {
    const { activeId } = this.props
    return navs.map((element: any) => {
      let classes = activeId === element.id ? 'active': ''
      return (
        <TabsNav
          key={element.id}
          onClick={() => {this.onTabClick(element.id)}}
          className={classes}>
          {element.tab}
        </TabsNav>
      )
    })
  }

  toRenderContent = (contents: any) => {
    const { activeId } = this.props
    return contents.map((element: any, index: number) => {
      const { id } = element.props
      let classes = activeId === id ? 'active': ''
      return (
        <TabsContent
          key={index}
          className={classes}>
          {element}
        </TabsContent>
      )
    })
  }

  render() {
    let { className, style } = this.props
    let { navs, contents } = this.toRender()

    return (
      <StyledTabs
        className={className}
        style={style}>
        <TabsNavBox>
          {this.toRenderNav(navs)}
        </TabsNavBox>
        <TabsContentBox>
          {this.toRenderContent(contents)}
        </TabsContentBox>
      </StyledTabs>
    )
  }
}

export default Tabs

