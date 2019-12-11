import React from 'react';
import { Component } from 'react';
import throttle from 'lodash/throttle';
import PurePortal from '../PurePortal';
import {
  getTriggerEvents,
  HorizontalPosition,
  VerticalPosition,
  getPosition
} from './utils';
import PropTypes from 'prop-types';

export interface PopoverContentProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: object;
  /**
   * 内容所在容器的 css 选择器
   */
  selector: string;
  /**
   * 弹层是否可见
   */
  visible?: boolean;
  /**
   * triggerDOM
   */
  triggerDOM?: any;
  /**
   * 触发类型
   */
  mode?: 'click' | 'hover';
  /**
   * 定位的方向
   */
  // position?:
  //   | 'bottomLeft'
  //   | 'bottomCenter'
  //   | 'bottomRight'
  //   | 'topLeft'
  //   | 'topCenter'
  //   | 'topRight';

  /**
   * 触发元素方位
   */
  triggerPosition: [HorizontalPosition, VerticalPosition];

  /**
   * 内容方位
   */
  contentPosition: [HorizontalPosition, VerticalPosition];
  /**
   * X轴的偏移量
   */
  offsetX?: number;
  /**
   * X轴的偏移量
   */
  offsetY?: number;
  /**
   * toggleVisible
   */
  toggleVisible?: any;
  /**
   * children
   */
  children: (visible: boolean) => React.ReactNode;
}

export interface PopoverContentState {
  positionStyle: { left: number; top: number };
}

const defaultPostionStyle = {
  position: 'absolute',
  top: 0,
  left: 0
};

/**
 * PopoverContent
 */
class PopoverContent extends Component<
  PopoverContentProps,
  PopoverContentState
> {
  static propTypes = {
    triggerPosition: PropTypes.array,
    contentPosition: PropTypes.array
  };

  static defaultProps = {
    selector: 'body',
    triggerPosition: ['left', 'bottom'],
    contentPosition: ['left', 'top']
  };

  private contentRef: any;
  constructor(props: PopoverContentProps) {
    super(props);
    this.state = {
      positionStyle: defaultPostionStyle
    };
    this.contentRef = React.createRef();
  }

  componentDidMount() {
    if (this.props.visible) {
      this.setPositionStyle();
    }
  }

  componentDidUpdate(prevProps: PopoverContentProps) {
    if (this.props.visible && prevProps.visible !== this.props.visible) {
      this.setPositionStyle();
    }
  }

  setPositionStyle = () => {
    const {
      visible,
      triggerDOM,
      triggerPosition,
      contentPosition,
      selector,
      offsetX,
      offsetY
    } = this.props;
    if (!visible || !triggerDOM) {
      return;
    }
    const contentDOM = this.contentRef.current;

    const positionStyle = getPosition(
      triggerDOM,
      contentDOM,
      triggerPosition,
      contentPosition,
      offsetX,
      offsetY,
      selector
    );

    this.setState({ positionStyle });
  };

  handleMouseEnter = () => {
    const { mode, toggleVisible } = this.props;
    if (mode === 'hover') {
      toggleVisible(true);
    }
  };

  handleMouseLeave = () => {
    const { mode, toggleVisible } = this.props;
    if (mode === 'hover') {
      toggleVisible(false);
    }
  };

  handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  open = () => {
    this.props.toggleVisible(true);
  };

  close = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.props.toggleVisible(false);
  };

  render() {
    const { positionStyle } = this.state;
    const { visible, children, selector, mode } = this.props;

    const triggerEvents = getTriggerEvents(mode, this.open, this.close);

    return (
      <PurePortal selector={selector}>
        <div
          className='cat-popover__content'
          ref={this.contentRef}
          style={positionStyle}
          {...triggerEvents}
        >
          {children(visible)}
        </div>
      </PurePortal>
    );
  }
}

export default PopoverContent;
