import React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';

export interface TabPanelProps {
  /** 
   * 类名
   */
  className?: string;
  /** 
   * 样式
   */
  style?: React.CSSProperties;
  /** 
   * 该 TabPanel 的 id
   */
  id: string | number;
  /** 
   * 该TabPanel所对应的tab标签的名字
   */
  tab: React.ReactNode;
}

/**
 * TabPanel
 */
class TabPanel extends Component<TabPanelProps> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number,]).isRequired,
    tab: PropTypes.node.isRequired,
  }

  render() {
    const { children } = this.props;
    return <div>{children}</div>;
  }
}

export default TabPanel;
