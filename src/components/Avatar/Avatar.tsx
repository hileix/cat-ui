import * as React from 'react';
import * as PropTypes from 'prop-types';
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
class Avatar extends React.Component<AvatarProps, any> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    size: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf(['large', 'medium', 'small'])
    ]),
    shape: PropTypes.oneOf(['circle', 'square']),
    src: PropTypes.string,
    fallbackSrc: PropTypes.string,
    alt: PropTypes.string,
    srcSet: PropTypes.string,
    sizes: PropTypes.string,
    prefix: PropTypes.string,
    onError: PropTypes.func
  };

  static defaultProps = {
    prefix: 'cat-avatar',
    size: 'medium',
    shape: 'square'
  };

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
      prefix,
      shape,
      className,
      src,
      alt,
      srcSet,
      size,
      sizes,
      style,
      fallbackSrc,
      onError,
      ...restProps
    } = this.props;

    const sizeCls = classNames({
      [`${prefix}-lg`]: size === 'large',
      [`${prefix}-sm`]: size === 'small'
    });

    const classes = classNames(prefix, className, sizeCls, {
      [`${prefix}-${shape}`]: shape,
      [`${prefix}-image`]: src
    });

    let sizeStyle = {};
    if (typeof size === 'number') {
      sizeStyle = {
        width: size,
        height: size,
        lineHeight: size
      };
    }

    const mixStyle = {
      ...sizeStyle,
      ...style
    };

    return (
      <span className={classes} prefix={prefix} {...restProps} style={mixStyle}>
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
