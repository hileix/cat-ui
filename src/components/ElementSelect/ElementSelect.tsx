import * as React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import * as PropTypes from 'prop-types';
import PurePortal from '../PurePortal';
import { scroll, getViewportSize } from '@hife/utils';

export interface ElementSelectProps {
  /**
   * 前缀
   */
  prefix?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 是否显示
   */
  visible?: boolean;
  /**
   * 选中元素的 css 选择器
   */
  selector?: string;
  /**
   * 选中的元素的样式
   */
  selectedElementStyle?: object;
  /**
   * 选中的元素的类名
   */
  selectedElementClassName?: string;
  /**
   * 额外的内容
   */
  extraContent?: (sizeAndPos: {
    width: number;
    height: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
  }) => React.ReactNode;
  /**
   * 不在视图内时，自动滚动的多余的距离
   */
  offset?: number;
}

export interface ElementSelectState {
  /**
   * 组件是否 didmount 了
   */
  isDidmount: boolean;
  /**
   * 选中元素的 css 选择器
   */
  selector: string;
  domRect?: DOMRect | ClientRect;
  hasDetect?: boolean;
}

export interface PositionInterface {
  eleWidth: number;
  eleHeight: number;
  eleLeft: number;
  eleTop: number;
}

/**
 * 目标 dom 在垂直方向上是否完全被根 dom 包含
 * @param root 根 dom
 * @param target 目标 dom
 */
const isExistRoot = (root: HTMLElement, target: HTMLElement): boolean => {
  const rootRect = root.getBoundingClientRect();
  const targetRect = target.getBoundingClientRect();

  return targetRect.top <= rootRect.top && targetRect.bottom <= rootRect.bottom;
};

/**
 * 获取 dom rect
 * @param selector css 选择器
 */
const getDomRect = (selector: string) => {
  const element = document.querySelector<HTMLElement>(selector);
  if (!element) {
    throw new Error(
      `[@hife/catui - ElementSelect Component]: Dom with no ${selector} for selector.`
    );
  }
  return element.getBoundingClientRect();
};

/**
 * ElementSelect 元素选择
 */
class ElementSelect extends Component<ElementSelectProps, ElementSelectState> {
  static propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    visible: PropTypes.bool,
    selector: PropTypes.string,
    extraContent: PropTypes.func,
    selectedElementStyle: PropTypes.object,
    selectedElementClassName: PropTypes.string,
    offset: PropTypes.number
  };

  static defaultProps = {
    prefix: 'cat',
    offset: 0
  };

  public state = {
    isDidmount: false, // 是否 didmount 了
    selector: '', // 选中元素的 css 选择器
    hasDetect: false,
    domRect: null
  };

  public domRect: DOMRect | ClientRect;

  static getDerivedStateFromProps(
    props: ElementSelectProps,
    state: ElementSelectState
  ) {
    if (!state.isDidmount) {
      return null;
    }

    if (state.selector !== props.selector) {
      const selector = props.selector;
      const domRect = getDomRect(selector);
      return {
        domRect,
        selector
      };
    }

    return null;
  }

  componentDidMount = () => {
    this.setState({ isDidmount: true });
    setTimeout(() => {
      this.detectSelectedElementPosition();
    });
  };

  componentDidUpdate = prevProps => {
    if (this.props.visible) {
      scroll.disableScroll(document.body);
    } else {
      scroll.enableScroll(document.body);
    }

    if (this.props.selector !== prevProps.selector) {
      console.log('deteched');
      this.detectSelectedElementPosition();
    }
  };

  componentWillUnmount = () => {
    scroll.enableScroll(document.body);
  };

  detectSelectedElementPosition = () => {
    const { selector, offset } = this.props;

    const root = document.documentElement;
    const target = document.querySelector<HTMLElement>(selector);

    // 不在 viewport 中，则滚动
    if (!isExistRoot(root, target)) {
      const targetRect = target.getBoundingClientRect();

      const scrollDistance =
        targetRect.top - getViewportSize().height + targetRect.height;

      const top = root.scrollTop + scrollDistance + offset;

      // document.body 兼容 safari
      document.documentElement.scrollTop = document.body.scrollTop = top;

      const domRect = getDomRect(selector);
      this.setState({ domRect });
    }
  };

  getSizeAndPosition = (): PositionInterface => {
    const {
      left: eleLeft,
      top: eleTop,
      width: eleWidth,
      height: eleHeight
    } = this.state.domRect;
    return {
      eleWidth,
      eleHeight,
      eleLeft,
      eleTop
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

  getExtraContentParams = () => {
    const { domRect } = this.state;
    const viewPortWidth = window.innerWidth;
    const viewPortHeight = window.innerHeight;
    const width = domRect.width;
    const height = domRect.height;
    const left = domRect.left;
    const top = domRect.top;
    const right = viewPortWidth - left - width;
    const bottom = viewPortHeight - top - height;
    return {
      width,
      height,
      left,
      top,
      right,
      bottom
    };
  };

  render() {
    const {
      prefix,
      className,
      children,
      visible,
      selector,
      selectedElementStyle,
      selectedElementClassName,
      extraContent,
      ...restProps
    } = this.props;
    const { isDidmount } = this.state;
    const classPrefix = `${prefix}-element-select`;

    if (!visible || !isDidmount) {
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
            className={classNames(
              `${classPrefix}__element`,
              selectedElementClassName
            )}
            style={{ ...selectedElementStyle, ...this.getMakStyle('center') }}
          ></div>
          {extraContent && extraContent(this.getExtraContentParams())}
        </div>
      </PurePortal>
    );
  }
}

export default ElementSelect;
