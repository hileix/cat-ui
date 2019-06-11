import * as React from 'react';
import { Component } from 'react';
export interface UploadProps {
    id?: string;
    className?: string;
    style?: object;
    multiple?: boolean;
    disabled?: boolean;
    name?: string | string[];
    filesize?: number;
    accept?: string;
    theme?: string;
    maxCount?: number;
    concurrent?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
    onError?: (type: number, e?: any) => any;
}
export interface UploadStates {
    isMounted: boolean;
}
declare class Upload extends Component<UploadProps, UploadStates> {
    static defaultProps: {
        theme: string;
        style: {};
        multiple: boolean;
        disabled: boolean;
    };
    private file;
    constructor(props: UploadProps);
    componentDidMount(): void;
    private handleChange;
    private _disposeAccept;
    render(): JSX.Element;
}
export default Upload;
