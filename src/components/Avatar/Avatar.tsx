import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';

export interface AvatarProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 尺寸 */
  size?: number | 'large' | 'medium' | 'small';

  /** 形状 */
  shape?: 'circle' | 'square';

  /** 图片地址 */
  src: string;
  /** 图片名称 */
  alt?: string;
  /** src扩展，会根据ua请求相应的资源 */
  srcSet?: string;

  fit?: 'fill' | 'contain' | 'cover' | 'none' | 'scale-down';

  prefix?: string;

  onError?: (e: any) => boolean;
}

/**
 * Avatar
 */
class Avatar extends Component<AvatarProps, any> {

  handleImgLoadError = (e: any) =>{
    this.props.onError && this.props.onError(e)
  }

  render() {
    const {
      prefix = 'hmly-avatar',
      shape,
      className,
      children,
      src,
      alt,
      srcSet,
      size,
      onError,
      ...restProps
    } = this.props;
    if (!src) return null;

    const sizeCls = classNames({
      [`${prefix}-lg`]: size === 'large',
      [`${prefix}-sm`]: size === 'small'
    });

    const classes = classNames(prefix, className, sizeCls, {
      [`${prefix}-${shape}`]: shape,
      [`${prefix}-image`]: src
    });

    return (
      <span className={classes} prefix={prefix} {...restProps}>
        <img
          src={src}
          alt={alt}
          srcSet={srcSet}
          onError={this.handleImgLoadError}
        />
      </span>
    );
  }
}

export default Avatar;
