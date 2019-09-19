import * as React from 'react';
import { Component, cloneElement } from 'react';
import classNames from 'classnames';
import * as noop from 'lodash/noop';
import AnimateHeight from './AnimateHeight';

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
  /** Menu改变事件的回调 */
  onSwitchMenu?: any;
  /** 返回上一级菜单的header */
  backHeader?: any;
}

/**
 * SubMenu
 */
class SubMenu extends Component<SubMenuProps, any> {
  private enterTimer: number;
  private leaveTimer: number;
  private popSubMenuRef: any;
  private popSubMenuWidth: number | string = 'auto';
  private popSubMenuRight: number | string = 'auto';

  constructor(props: SubMenuProps) {
    super(props);
    this.state = {
      isPopVisible: false,
      isInlineExpand: false
    };
    this.popSubMenuRef = React.createRef();
  }

  componentWillUnmount() {
    clearTimeout(this.leaveTimer);
    clearTimeout(this.enterTimer);
  }

  onSubMenuClick = (e: any) => {
    const { onClick, onMenuChange, id } = this.props;
    onClick && onClick(e);
    onMenuChange && onMenuChange(id);
  };

  onSubMenuTitleClick = () => {
    const { isInlineExpand } = this.state;
    const { mode, onSwitchMenu, backHeader, children } = this.props;
    if (mode === 'inline') {
      this.setState({ isInlineExpand: !isInlineExpand });
    }
    if (mode === 'replace') {
      onSwitchMenu && onSwitchMenu(children, backHeader);
    }
  };

  onMouseEnter = () => {
    const { mode } = this.props;
    if (mode !== 'pop') {
      return;
    }
    if (this.leaveTimer) {
      clearTimeout(this.leaveTimer);
    }
    this.enterTimer = setTimeout(() => {
      this.setState({ isPopVisible: true });
    }, 200);
  };

  onMouseLeave = () => {
    const { mode } = this.props;
    if (mode !== 'pop') {
      return;
    }
    if (this.enterTimer) {
      clearTimeout(this.enterTimer);
    }
    this.leaveTimer = setTimeout(() => {
      this.setState({ isPopVisible: false });
    }, 200);
  };

  renderContent = () => {
    const { mode, title, checked, children } = this.props;
    const { isPopVisible, isInlineExpand } = this.state;
    let subMenuItems = null;

    const prefix = 'hmly-submenu__title';
    const classes = classNames({
      [`${prefix}--${mode}`]: mode,
      [`${prefix}--expand`]: isInlineExpand
    });

    const subMenuTitle = (
      <div className={classes} onClick={this.onSubMenuTitleClick}>
        {title}
      </div>
    );

    const items = React.Children.map(children, (element: any, index) => {
      if (!element) {
        return element;
      }
      return cloneElement(element, {
        key: index,
        id: element.key,
        mode: mode
      });
    });

    // 行内内嵌
    if (mode === 'inline') {
      const prefix = 'hmly-submenu--inline';
      subMenuItems = (
        <React.Fragment>
          {subMenuTitle}
          <AnimateHeight duration={200} height={isInlineExpand ? 'auto' : 0}>
            <ul
              className={classNames(prefix, {
                [`${prefix}--expand`]: isInlineExpand
              })}
            >
              {items}
            </ul>
          </AnimateHeight>
        </React.Fragment>
      );
    }

    // 扩展弹出
    if (mode === 'pop') {
      const popDOM = this.popSubMenuRef.current;
      const popRect = popDOM && popDOM.getBoundingClientRect();
      const { width = 'auto' } = popRect || {};
      if (this.popSubMenuWidth === 'auto' && width !== 'auto') {
        this.popSubMenuWidth = width + 'px';
        this.popSubMenuRight = '-' + this.popSubMenuWidth;
      }

      const popPrefix = 'hmly-submenu__pop';
      subMenuItems = (
        <React.Fragment>
          {subMenuTitle}
          {isPopVisible && (
            <div
              className={classNames(popPrefix)}
              style={{
                right: this.popSubMenuRight,
                width: this.popSubMenuWidth
              }}
              ref={this.popSubMenuRef}
            >
              <ul className="hmly-submenu__pop-menu">{items}</ul>
            </div>
          )}
        </React.Fragment>
      );
    }

    // 原地替换
    if (mode === 'replace') {
      subMenuItems = <React.Fragment>{subMenuTitle}</React.Fragment>;
    }

    return subMenuItems;
  };

  render() {
    const { className, style, mode, title, checked, children } = this.props;

    const prefix = 'hmly-submenu';
    const classes = classNames(
      prefix,
      {
        [`${prefix}--${mode}`]: mode,
        [`${prefix}-checked`]: checked
      },
      className
    );
    const subMenuItems = this.renderContent();

    return (
      <li
        className={classes}
        style={style}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}
        onClick={this.onSubMenuClick}
      >
        {subMenuItems}
      </li>
    );
  }
}

export default SubMenu;
