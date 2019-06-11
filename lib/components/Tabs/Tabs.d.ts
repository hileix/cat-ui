import * as React from 'react';
import { PureComponent } from 'react';
import TabPanel from './TabPanel';
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
declare class Tabs extends PureComponent<TabsProps, any> {
    static TabPanel: typeof TabPanel;
    genNavsContents: () => {
        navs: Object[];
        contents: Object[];
    };
    onTabClick: (id: React.ReactText) => void;
    renderNav: (navs: Object[]) => JSX.Element[];
    renderContent: (contents: any) => any;
    render(): JSX.Element;
}
export default Tabs;
