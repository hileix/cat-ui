import * as React from 'react';
import { InputProps, InputStates } from './Input';
import { TextAreaProps, TextAreaStates } from './TextArea';
import { THandleDOM } from './Input.d';
declare type HandlesProps = InputProps | TextAreaProps;
declare type HandlesStates = InputStates | TextAreaStates;
declare const Handles: (WrappedComponent: React.ComponentType<HandlesProps>) => {
    new (props: Readonly<TextAreaProps> | Readonly<InputProps>): {
        handleFocus(e: React.FocusEvent<THandleDOM>): void;
        handleBlur(e: React.FocusEvent<THandleDOM>): void;
        handleChange(e: React.ChangeEvent<THandleDOM>): void;
        handleKeyDown(e: React.KeyboardEvent<THandleDOM>): void;
        handleMouseEnter(e: React.MouseEvent<THandleDOM, MouseEvent>): void;
        handleMouseLeave(e: React.MouseEvent<THandleDOM, MouseEvent>): void;
        handleClipboard(e: React.MouseEvent<THandleDOM, MouseEvent> | React.ClipboardEvent<THandleDOM>): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "value" | "inputState">(state: TextAreaStates | InputStates | ((prevState: Readonly<TextAreaStates> | Readonly<InputStates>, props: Readonly<TextAreaProps> | Readonly<InputProps>) => TextAreaStates | InputStates | Pick<HandlesStates, K>) | Pick<HandlesStates, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: (Readonly<TextAreaProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<InputProps> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<TextAreaStates> | Readonly<InputStates>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextState: Readonly<TextAreaStates> | Readonly<InputStates>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<InputProps>, prevState: Readonly<TextAreaStates> | Readonly<InputStates>): any;
        componentDidUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<InputProps>, prevState: Readonly<TextAreaStates> | Readonly<InputStates>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextState: Readonly<TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextState: Readonly<TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
    };
    new (props: HandlesProps, context?: any): {
        handleFocus(e: React.FocusEvent<THandleDOM>): void;
        handleBlur(e: React.FocusEvent<THandleDOM>): void;
        handleChange(e: React.ChangeEvent<THandleDOM>): void;
        handleKeyDown(e: React.KeyboardEvent<THandleDOM>): void;
        handleMouseEnter(e: React.MouseEvent<THandleDOM, MouseEvent>): void;
        handleMouseLeave(e: React.MouseEvent<THandleDOM, MouseEvent>): void;
        handleClipboard(e: React.MouseEvent<THandleDOM, MouseEvent> | React.ClipboardEvent<THandleDOM>): void;
        render(): JSX.Element;
        context: any;
        setState<K extends "value" | "inputState">(state: TextAreaStates | InputStates | ((prevState: Readonly<TextAreaStates> | Readonly<InputStates>, props: Readonly<TextAreaProps> | Readonly<InputProps>) => TextAreaStates | InputStates | Pick<HandlesStates, K>) | Pick<HandlesStates, K>, callback?: () => void): void;
        forceUpdate(callBack?: () => void): void;
        readonly props: (Readonly<TextAreaProps> & Readonly<{
            children?: React.ReactNode;
        }>) | (Readonly<InputProps> & Readonly<{
            children?: React.ReactNode;
        }>);
        state: Readonly<TextAreaStates> | Readonly<InputStates>;
        refs: {
            [key: string]: React.ReactInstance;
        };
        componentDidMount?(): void;
        shouldComponentUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextState: Readonly<TextAreaStates> | Readonly<InputStates>, nextContext: any): boolean;
        componentWillUnmount?(): void;
        componentDidCatch?(error: Error, errorInfo: React.ErrorInfo): void;
        getSnapshotBeforeUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<InputProps>, prevState: Readonly<TextAreaStates> | Readonly<InputStates>): any;
        componentDidUpdate?(prevProps: Readonly<TextAreaProps> | Readonly<InputProps>, prevState: Readonly<TextAreaStates> | Readonly<InputStates>, snapshot?: any): void;
        componentWillMount?(): void;
        UNSAFE_componentWillMount?(): void;
        componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        UNSAFE_componentWillReceiveProps?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextContext: any): void;
        componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextState: Readonly<TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
        UNSAFE_componentWillUpdate?(nextProps: Readonly<TextAreaProps> | Readonly<InputProps>, nextState: Readonly<TextAreaStates> | Readonly<InputStates>, nextContext: any): void;
    };
    TextArea: any;
    contextType?: React.Context<any>;
};
export default Handles;
