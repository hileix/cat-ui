import * as React from 'react';
import { TSize, Ttheme, TinputState } from './Input.d';
import classNames from 'classnames';

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

class Wrapper extends React.PureComponent<IWrapperProps, any> {
  public render() {
    const {
      value,
      className,
      size,
      theme,
      state,
      placeholder,
      message,
      showClear,
      showEye,
      children
    } = this.props;

    const prefix = 'cat-input-wrapper';

    const classes = classNames(
      'cat-input-wrapper',
      {
        [`${prefix}--large`]: size === 'large',
        [`${prefix}--normal`]: size === 'normal',
        [`${prefix}--small`]: size === 'small',
        [`${prefix}--line`]: theme === 'line',
        [`${prefix}--line-pwd`]: theme === 'line-pwd',
        [`${prefix}--box`]: theme === 'box',
        [`${prefix}--box-pwd`]: theme === 'box-pwd',
        [`${prefix}--textarea`]: theme === 'textarea',
        [`${prefix}--default`]: state === 0,
        [`${prefix}--hover`]: state === 1,
        [`${prefix}--active`]: state === 2,
        [`${prefix}--error`]: state === 3,
        [`${prefix}--show-clear`]: showClear,
        [`${prefix}--show-eye`]: showEye
      },
      className
    );

    const borderPrefix = 'cat-input-wrapper-border';
    const placeholderPrefix = 'cat-input-wrapper-placeholder';
    const messagePrefix = 'cat-input-wrapper-message';

    return (
      <div className={classes}>
        <span
          className={classNames(borderPrefix, {
            [`${borderPrefix}--line`]: theme === 'line',
            [`${borderPrefix}--line-pwd`]: theme === 'line-pwd',
            [`${borderPrefix}--box`]: theme === 'box',
            [`${borderPrefix}--box-pwd`]: theme === 'box-pwd',
            [`${borderPrefix}--textarea`]: theme === 'textarea',
            [`${borderPrefix}--default`]: state === 0,
            [`${borderPrefix}--hover`]: state === 1,
            [`${borderPrefix}--active`]: state === 2,
            [`${borderPrefix}--error`]: state === 3
          })}
        >
          {placeholder && (
            <span
              className={classNames(placeholderPrefix, {
                [`${placeholderPrefix}--line`]: theme === 'line',
                [`${placeholderPrefix}--line-pwd`]: theme === 'line-pwd',
                [`${placeholderPrefix}--box`]: theme === 'box',
                [`${placeholderPrefix}--box-pwd`]: theme === 'box-pwd',
                [`${placeholderPrefix}--textarea`]: theme === 'textarea',
                [`${placeholderPrefix}--default`]: state === 0,
                [`${placeholderPrefix}--hover`]: state === 1,
                [`${placeholderPrefix}--active`]: state === 2,
                [`${placeholderPrefix}--error`]: state === 3,
                [`${placeholderPrefix}--value`]: !!value
              })}
            >
              {placeholder}
            </span>
          )}
        </span>
        {children}
        {message && (
          <span
            className={classNames(messagePrefix, {
              [`${messagePrefix}--line`]: theme === 'line',
              [`${messagePrefix}--line-pwd`]: theme === 'line-pwd',
              [`${messagePrefix}--box`]: theme === 'box',
              [`${messagePrefix}--box-pwd`]: theme === 'box-pwd',
              [`${messagePrefix}--textarea`]: theme === 'textarea',
              [`${messagePrefix}--default`]: state === 0,
              [`${messagePrefix}--hover`]: state === 1,
              [`${messagePrefix}--active`]: state === 2,
              [`${messagePrefix}--error`]: state === 3
            })}
          >
            {message}
          </span>
        )}
      </div>
    );
  }
}

export default Wrapper;
