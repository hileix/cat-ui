import React from 'react';
import { PureComponent } from 'react';
import TabPanel, { TabPanelProps } from './TabPanel';
import classNames from 'classnames';
import PropTypes from 'prop-types';

export type Children = React.ReactElement<TabPanelProps, typeof TabPanel>;

export interface TabsProps {
  /** 
   * 前缀
   */
  prefix: string;
  /** 
   * 类名
   */
  className?: string;
  /** 
   * 样式
   */
  style?: React.CSSProperties;
  /** 
   * 激活的 tab key
   */
  activeId: string | number;
  /** 
   * 选中的tab改变时
   */
  onChange?: (id: string | number) => void;
  /** 
   * tab bar 上额外的元素 
   */
  tabBarExtraContent?: React.ReactNode;
  /**
   * children
   */
  children: Children[]
}

export interface Nav {
  id: string | number;
  tab: React.ReactNode
}

/**
 * 选项卡
 */
class Tabs extends PureComponent<TabsProps> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    activeId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
      .isRequired,
    onChange: PropTypes.func,
    tabBarExtraContent: PropTypes.node
  };

  static defaultProps = {
    prefix: 'cat'
  };

  static TabPanel: typeof TabPanel;

  genNavsContents = () => {
    const { children } = this.props;
    let navs: Nav[] = [];
    let contents: Children[] = [];
    React.Children.forEach(children, (child) => {
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

  renderNav = (navs: Nav[]) => {
    const { prefix, activeId } = this.props;
    const classPrefix = `${prefix}-tabs__nav`;
    return navs.map((element) => {
      const isElement = React.isValidElement(element.tab);
      if (isElement) {
        return (
          <div
            key={element.id}
            onClick={() => {
              this.onTabClick(element.id);
            }}
            className={classNames(`${classPrefix}-link`, {
              [`${classPrefix}-link--active`]: activeId === element.id
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
            className={classNames(classPrefix, {
              [`${classPrefix}--active`]: activeId === element.id
            })}
          >
            {element.tab}
          </div>
        );
      }
    });
  };

  renderContent = (contents: Children[]) => {
    const { prefix, activeId } = this.props;
    const classPrefix = `${prefix}-tabs__content`;
    return contents.map((element) => {
      const { id } = element.props;
      return (
        <div
          key={id}
          className={classNames(classPrefix, {
            [`${classPrefix}--active`]: activeId === id
          })}
        >
          {element}
        </div>
      );
    });
  };

  render() {
    const { prefix, className, style, tabBarExtraContent } = this.props;
    const { navs, contents } = this.genNavsContents();

    const classPrefix = `${prefix}-tabs`;
    const classes = classNames(classPrefix, className);

    return (
      <div className={classes} style={style}>
        <div className={`${classPrefix}__nav-wrapper`}>
          <div className={`${classPrefix}__navs`}>{this.renderNav(navs)}</div>
          {tabBarExtraContent && (
            <div className={`${classPrefix}__extra-content`}>
              {tabBarExtraContent}
            </div>
          )}
        </div>
        <div className={`${classPrefix}__content-wrapper`}>
          {this.renderContent(contents)}
        </div>
      </div>
    );
  }
}

export default Tabs;
