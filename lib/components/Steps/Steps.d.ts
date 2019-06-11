import * as React from 'react';
import Step from './Step';
export interface StepsProps {
    /** 当前步 */
    current?: number;
    /** 方向 */
    direction?: string;
    /** 主题 */
    theme?: string;
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: object;
}
export interface StepsStates {
}
declare class Steps extends React.PureComponent<StepsProps, StepsStates> {
    static Step: typeof Step;
    static defaultProps: {
        direction: string;
        style: {};
    };
    render(): JSX.Element;
}
export default Steps;
