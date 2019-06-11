import * as React from 'react';
import { TSize, Ttheme, TinputState } from './Input.d';
export interface IWrapperProps {
    value?: string;
    size?: TSize;
    theme?: Ttheme;
    state?: TinputState;
    className?: string;
    placeholder?: string;
    message?: string;
    showClear?: boolean;
    showEye?: boolean;
    showCount?: boolean;
    maxlength?: number;
    children?: any;
}
declare class Wrapper extends React.PureComponent<IWrapperProps, any> {
    render(): JSX.Element;
}
export default Wrapper;
