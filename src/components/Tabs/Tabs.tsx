import * as React from 'react'
import { PureComponent } from 'react'
import { StyledTabs, TabsNavBox, TabsNav, TabsNavLink, TabsContentBox, TabsContent } from './styled'
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
 * 选项卡
 */
class Tabs extends PureComponent<TabsProps, any> {
  static TabPanel: typeof TabPanel;

  toRender = () => {
    const { children } = this.props
    let navs: Object[] = []
    let contents: Object[] = []
    React.Children.forEach(children, (child: any) => {
      const isElemet = React.isValidElement(child)
      if (!isElemet) { return }
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

  renderNav = (navs: Object[]) => {
    const { activeId } = this.props
    return navs.map((element: any) => {
      const classes = activeId === element.id ? 'active': ''
      const isElement = React.isValidElement(element.tab)
      if (isElement) {
        return (
          <TabsNavLink
            key={element.id}
            onClick={() => {this.onTabClick(element.id)}}
            className={classes}>
            {element.tab}
          </TabsNavLink>
        )
      } else {
        return (
          <TabsNav
            key={element.id}
            onClick={() => {this.onTabClick(element.id)}}
            className={classes}>
            {element.tab}
          </TabsNav>
        )
      }
    })
  }

  renderContent = (contents: any) => {
    const { activeId } = this.props
    return contents.map((element: any, index: number) => {
      const { id } = element.props
      const classes = activeId === id ? 'active': ''
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
    const { className, style } = this.props
    const { navs, contents } = this.toRender()

    return (
      <StyledTabs
        className={className}
        style={style}>
        <TabsNavBox>
          {this.renderNav(navs)}
        </TabsNavBox>
        <TabsContentBox>
          {this.renderContent(contents)}
        </TabsContentBox>
      </StyledTabs>
    )
  }
}

export default Tabs

