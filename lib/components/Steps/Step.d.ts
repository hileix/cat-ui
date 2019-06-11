import * as React from 'react';
export interface StepProps {
    /** 当前步 */
    current?: number;
    /** 方向 */
    direction?: string;
    /** 标题 */
    title?: string;
    /** 描述 */
    description?: string;
    /** 主题 */
    theme?: string;
    /** 当前步数 */
    stepNumber?: number;
    /** 是否第一个 */
    isFirst?: boolean;
    /** 是否最后一个 */
    isLast?: boolean;
    /** 步骤总个数 */
    total?: number;
}
export interface StepStates {
}
export declare const prefix = "hmly-steps-step";
declare class Step extends React.PureComponent<StepProps, StepStates> {
    render(): JSX.Element;
}
export default Step;
