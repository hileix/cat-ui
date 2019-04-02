import * as React from 'react'
import { Component } from 'react'
// import { StyledTabPanel } from './styled'

export interface TabPanelProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 该TabPanel的id */
  id: string | number;
  /** 该TabPanel所对应的tab标签的名字	 */
  tab: string;
}

/**
 * TabPanel
 */
class TabPanel extends Component<TabPanelProps, any> {

  render() {
    return (
      <div>
        TabPanel
      </div>
    )
  }
}

export default TabPanel
