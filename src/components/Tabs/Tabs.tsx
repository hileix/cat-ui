import * as React from 'react'
import { Component } from 'react'
import { StyledTabs, TabsNavBox, TabsNav, TabsContent } from './styled'

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
  toRender = () => {
    const { children } = this.props
    let navs: Object[] = []
    React.Children.forEach(children, (child: any) => {
      const { props: { tab, id } } = child
      navs.push({id: id, tab: tab})
    })
    return navs
  }

  onTabClick = (id: string | number) => {
    const { onChange } = this.props
    onChange && onChange(id)
  }

  toRenderNav = (navs: Object[]) => {
    const { activeId } = this.props
    return navs.map((ele: any) => {
      let cls
      if (activeId === ele.id) {
        cls = 'active'
      }
      return (
        <TabsNav
          key={ele.id}
          onClick={() => {this.onTabClick(ele.id)}}
          className={cls}>
          {ele.tab}
        </TabsNav>
      )
    })
  }

  render() {
    let { className, children, activeId } = this.props
    let navs = this.toRender()

    return (
      <StyledTabs>
        <TabsNavBox>
          {this.toRenderNav(navs)}
        </TabsNavBox>
        <TabsContent>
          TabsContent
        </TabsContent>
      </StyledTabs>
    )
  }
}

export default Tabs

