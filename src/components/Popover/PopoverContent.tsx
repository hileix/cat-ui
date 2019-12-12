import React from 'react';
import { Component } from 'react';
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
  triggerDOM?: HTMLElement;
  /**
   * 触发类型
   */
  mode?: 'click' | 'hover';
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
  toggleVisible?: (visible: boolean) => void;
  /**
   * children
   */
  children: (visible: boolean) => React.ReactNode;
}

export interface PositionStyle {
  position: 'absolute';
  left: number;
  top: number;
}

export interface PopoverContentState {
  positionStyle: PositionStyle;
}

const defaultPostionStyle: PositionStyle = {
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

  private contentRef: React.RefObject<HTMLDivElement>;
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

  open = (e: React.MouseEvent) => {
    e.stopPropagation();
    this.props.toggleVisible(true);
  };

  close = () => {
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
