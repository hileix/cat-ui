import { PureComponent } from 'react';
import { IconType } from './IconTypeEnum';
export interface IconProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
    /** 图标类型 */
    type: string;
    /** 点击按钮时的回调 */
    onClick?: any;
}
/**
 * 图标
 */
declare class Icon extends PureComponent<IconProps, any> {
    static IconType: typeof IconType;
    handleClick: (event: any) => void;
    render(): JSX.Element;
}
export default Icon;
