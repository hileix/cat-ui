import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';

export interface ElementSelectProps {
  /** 前缀 */
  prefix?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 是否显示 */
  visible?: boolean;
  /** 选中元素的 css 选择器 */
  selector?: string;
}

export interface PurePortalProps {
  children?: React.ReactNode;
  selector?: string;
  render?: () => React.ReactNode;
  onMount?: () => void;
  onUnmount?: () => void;
}

class PurePortal extends Component<PurePortalProps, any> {
  static propTypes = {
    children: PropTypes.node,
    selector: PropTypes.string
  };
  static defaultProps = {
    selector: 'body'
  };

  componentDidMount = () => {
    const { onMount } = this.props;
    onMount && onMount();
  };

  componentWillUnmount = () => {
    const { onUnmount } = this.props;
    onUnmount && onUnmount();
  };

  getContainer = (): Element | HTMLElement => {
    const { selector } = this.props;
    let dom = document.querySelector(selector);
    if (!dom) {
      dom = document.body;
    }
    return dom;
  };

  render() {
    const { render, children } = this.props;
    const dom = this.getContainer();
    let child = children;
    if (typeof render === 'function') {
      child = render();
    }
    console.log({ child, dom });
    return ReactDOM.createPortal(child, dom);
  }
}

interface PositionInterface {
  eleWidth: number;
  eleHeight: number;
  eleLeft: number;
  eleTop: number;
}

/**
 * ElementSelect 元素选择
 */
class ElementSelect extends Component<ElementSelectProps, any> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    visible: PropTypes.bool,
    selector: PropTypes.string
  };

  static defaultProps = {
    prefix: 'cat'
  };

  getSizeAndPosition = (): PositionInterface => {
    const { selector } = this.props;
    const element = document.querySelector(selector);
    return {
      eleWidth: 300,
      eleHeight: 100,
      eleLeft: 100,
      eleTop: 100
    };
  };

  getMakStyle = (position: 'top' | 'right' | 'bottom' | 'left' | 'center') => {
    const { eleWidth, eleHeight, eleLeft, eleTop } = this.getSizeAndPosition();
    let style: {
      top: number;
      right?: number;
      bottom?: number;
      left: number;
      width?: number;
      height?: number;
    };
    if (position === 'top') {
      style = {
        top: 0,
        left: 0,
        right: 0,
        height: eleTop
      };
    }
    if (position === 'right') {
      style = {
        top: eleTop,
        left: eleLeft + eleWidth,
        right: 0,
        height: eleHeight
      };
    }
    if (position === 'bottom') {
      style = {
        top: eleTop + eleHeight,
        left: 0,
        right: 0,
        bottom: 0
      };
    }
    if (position === 'left') {
      style = {
        left: 0,
        top: eleTop,
        width: eleLeft,
        height: eleHeight
      };
    }
    if (position === 'center') {
      style = {
        left: eleLeft,
        top: eleTop,
        width: eleWidth,
        height: eleHeight
      };
    }
    return style;
  };

  render() {
    const {
      prefix,
      className,
      children,
      visible,
      selector,
      ...restProps
    } = this.props;
    const classPrefix = `${prefix}-element-select`;
    if (!visible) {
      return null;
    }

    return (
      <PurePortal selector='body'>
        <div className={classPrefix} {...restProps}>
          <div
            className={`${classPrefix}__mask`}
            style={this.getMakStyle('top')}
          />
          <div
            className={`${classPrefix}__mask`}
            style={this.getMakStyle('right')}
          />
          <div
            className={`${classPrefix}__mask`}
            style={this.getMakStyle('bottom')}
          />
          <div
            className={`${classPrefix}__mask`}
            style={this.getMakStyle('left')}
          />
          <div
            className={`${classPrefix}__element`}
            style={this.getMakStyle('center')}
          ></div>
        </div>
      </PurePortal>
    );
  }
}

export default ElementSelect;
