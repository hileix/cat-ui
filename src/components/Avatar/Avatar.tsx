import * as React from "react";
import { Component } from "react";
import classNames from "classnames";

export interface AvatarProps {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 尺寸 */
  size?: number | "large" | "medium" | "small";
  /** 形状 */
  shape?: "circle" | "square";
  /** 图片地址 */
  src?: string;
  /** 容错图片地址 */
  fallbackSrc?: string;
  /** 图片名称 */
  alt?: string;
  /** src扩展，会根据ua请求相应的资源 */
  srcSet?: string;
  /** 响应式图片，和srcSet一起使用 */
  sizes?: string;
  /** 样式前缀 */
  prefix?: string;
  /** 错误回调 */
  onError?: (e: any) => boolean;
}

/**
 * Avatar
 */
class Avatar extends Component<AvatarProps, any> {
  constructor(props) {
    super(props);
    this.state = {
      loadErr: false,
      src: props.src
    };
  }

  handleImgLoadError = (e: any) => {
    if (this.props.fallbackSrc) {
      this.setState({
        src: this.props.fallbackSrc
      });
    }
    this.props.onError && this.props.onError(e);
  };

  render() {
    const {
      prefix = "cat-avatar",
      shape,
      className,
      src,
      alt,
      srcSet,
      size,
      sizes,
      fallbackSrc,
      onError,
      ...restProps
    } = this.props;

    const sizeCls = classNames({
      [`${prefix}-lg`]: size === "large",
      [`${prefix}-sm`]: size === "small"
    });

    const classes = classNames(prefix, className, sizeCls, {
      [`${prefix}-${shape}`]: shape,
      [`${prefix}-image`]: src
    });

    return (
      <span className={classes} prefix={prefix} {...restProps}>
        <img
          alt={alt}
          srcSet={srcSet}
          sizes={sizes}
          src={this.state.src}
          onError={this.handleImgLoadError}
        />
      </span>
    );
  }
}

export default Avatar;
