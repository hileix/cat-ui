import * as React from 'react'
import { Component, cloneElement } from 'react'
import classNames from 'classnames'
import { StyledSubMenu, SubMenuTitle, InlineSubMenu, PopSubMenuBox, PopSubMenu } from './styled'

export interface SubMenuProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 菜单类型，现在支持扩展弹出、行内内嵌、原地替换三种 */
  mode?: 'pop' | 'inline' | 'replace';
  /** 当前SubMenu的id */
  id?: boolean;
  /** 当前SubMenu的title */
  title?: string | React.ReactNode;
  /** 是否选中 */
  checked?: boolean;
  /** 是否禁用 */
  disabled?: boolean;
  /** SubMenu点击事件的回调 */
  onClick?: any;
  /** Menu改变事件的回调 */
  onMenuChange?: any;
}

/**
 * SubMenu
 */
class SubMenu extends Component<SubMenuProps, any> {
  private enterTimer: number
  private leaveTimer: number

  constructor (props: SubMenuProps) {
    super(props)
    this.state = {
      popMenuVisible: false
    }
  }

  onSubMenuClick = (e: any) => {
    const { onClick, onMenuChange, id } = this.props
    onClick && onClick(e)
    onMenuChange && onMenuChange(id)
  }

  onMouseEnter = () => {
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer)
    }
    this.enterTimer = setTimeout(() => {
      this.setState({ popMenuVisible: true })
    }, 200)
  }

  onMouseLeave = () => {
    if (this.enterTimer) {
      clearTimeout(this.enterTimer)
    }
    this.leaveTimer = setTimeout(() => {
      this.setState({ popMenuVisible: false })
    }, 200)
  }

  renderContent = () => {
    const { mode, title, checked, children } = this.props
    const { popMenuVisible } = this.state
    let subMenuItems = null
    const classes = classNames({
      [`hmly-submenu-title-${mode}`]: mode
    })
    const subMenuTitle = (
      <SubMenuTitle className={classes}>
        {title}
      </SubMenuTitle>
    )
    const items = React.Children.map(children, (element: any, index) => {
      if (!element) { return element }
      return cloneElement(element, {
        key: index,
        id: element.key,
        mode: mode
      })
    })
    // console.log('renderContent:children', mode, children)

    // 行内内嵌
    if (mode === 'inline') {
      subMenuItems = (
        <React.Fragment>
          {subMenuTitle}
          <InlineSubMenu>
            {items}
          </InlineSubMenu>
        </React.Fragment>
      )
    }
    // 扩展弹出
    if (mode === 'pop') {
      subMenuItems = (
        <React.Fragment>
          {subMenuTitle}
          {popMenuVisible && <PopSubMenuBox>
            <PopSubMenu>
              {items}
            </PopSubMenu>
          </PopSubMenuBox>}
        </React.Fragment>
      )
    }
    // 原地替换
    if (mode === 'replace') {
      subMenuItems = (
        <React.Fragment>
          {subMenuTitle}
        </React.Fragment>
      )
    }
    return subMenuItems
  }

  render() {
    const { className, style, mode, title, checked, children } = this.props
    const classes = classNames('hmly-submenu', {
      [`hmly-submenu-${mode}`]: mode,
      [`hmly-submenu-checked`]: checked
    }, className)

    const subMenuItems = this.renderContent()
    // console.log('subMenuItems', mode, subMenuItems)

    return (
      <StyledSubMenu
        className={classes}
        style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onSubMenuClick}>
        {subMenuItems}
      </StyledSubMenu>
    )
  }
}

export default SubMenu
