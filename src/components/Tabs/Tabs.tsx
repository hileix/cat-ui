import * as React from 'react';
import { PureComponent } from 'react';
import TabPanel from './TabPanel';
import classNames from 'classnames';

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

  genNavsContents = () => {
    const { children } = this.props;
    let navs: Object[] = [];
    let contents: Object[] = [];
    React.Children.forEach(children, (child: any) => {
      const isElemet = React.isValidElement(child);
      if (!isElemet) {
        return;
      }
      const {
        props: { tab, id }
      } = child;
      navs.push({ id: id, tab: tab });
      contents.push(child);
    });
    return { navs, contents };
  };

  onTabClick = (id: string | number) => {
    const { onChange } = this.props;
    onChange && onChange(id);
  };

  renderNav = (navs: Object[]) => {
    const { activeId } = this.props;
    const prefix = 'hmly-tabs__nav';
    return navs.map((element: any) => {
      const classes = activeId === element.id ? 'active' : '';
      const isElement = React.isValidElement(element.tab);
      if (isElement) {
        return (
          <div
            key={element.id}
            onClick={() => {
              this.onTabClick(element.id);
            }}
            className={classNames(`${prefix}-link`, {
              [`${prefix}-link--active`]: activeId === element.id
            })}
          >
            {element.tab}
          </div>
        );
      } else {
        return (
          <div
            key={element.id}
            onClick={() => {
              this.onTabClick(element.id);
            }}
            className={classNames(prefix, {
              [`${prefix}--active`]: activeId === element.id
            })}
          >
            {element.tab}
          </div>
        );
      }
    });
  };

  renderContent = (contents: any) => {
    const { activeId } = this.props;
    const prefix = 'hmly-tabs__content';
    return contents.map((element: any, index: number) => {
      const { id } = element.props;
      return (
        <div
          key={index}
          className={classNames(prefix, {
            [`${prefix}--active`]: activeId === id
          })}
        >
          {element}
        </div>
      );
    });
  };

  render() {
    const { className, style } = this.props;
    const { navs, contents } = this.genNavsContents();

    const prefix = 'hmly-tabs';

    return (
      <div className={prefix} style={style}>
        <div className={`${prefix}__nav-wrapper`}>{this.renderNav(navs)}</div>
        <div className={`${prefix}__content-wrapper`}>
          {this.renderContent(contents)}
        </div>
      </div>
    );
  }
}

export default Tabs;
