import { PureComponent } from 'react';
export interface PageItemProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** active */
    active?: boolean;
    /** value */
    value?: any;
    /** onItemClick */
    onItemClick?: any;
}
/**
 * PageItem
 */
declare class PageItem extends PureComponent<PageItemProps, any> {
    handleClick: () => void;
    render(): JSX.Element;
}
export default PageItem;
