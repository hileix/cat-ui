import { PureComponent } from 'react';
export interface AnimateHeightProps {
    /** 类名 */
    className?: string;
    /** 样式 */
    style?: any;
    duration: number;
    easing: string;
    /** 高度 */
    height: string | number;
}
/**
 * AnimateHeight
 */
declare class AnimateHeight extends PureComponent<AnimateHeightProps, any> {
    constructor(props: AnimateHeightProps);
    static defaultProps: {
        duration: number;
        easing: string;
    };
    render(): JSX.Element;
}
export default AnimateHeight;
