import React from 'react';
import { Component } from 'react';
import PurePortal from '../PurePortal';
import { getPosition, getModeArray } from './utils';
import { PositionType } from './interface';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export interface PopoverContentProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 样式
   */
  style?: React.CSSProperties;
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
  mode: 'click' | 'hover';
  /**
   * 触发元素方位
   */
  triggerPosition: PositionType;
  /**
   * 内容方位
   */
  contentPosition: PositionType;
  /**
   * X 轴的偏移量
   */
  offsetX: number;
  /**
   * Y 轴的偏移量
   */
  offsetY: number;
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
    contentPosition: ['left', 'top'],
    offsetX: 0,
    offsetY: 0,
    mode: 'click'
  };

  public contentRef: React.RefObject<HTMLDivElement>;
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

    if (!contentDOM) {
      return;
    }

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
    const { toggleVisible } = this.props
    e.stopPropagation();
    toggleVisible && toggleVisible(true);
  };

  close = () => {
    const { toggleVisible } = this.props
    toggleVisible && toggleVisible(false);
  };

  getTriggerEvents = () => {
    const { mode } = this.props;
    const modeArray = getModeArray(mode);
    let triggerEvents: {
      onClick?: (e: React.MouseEvent) => void;
      onMouseEnter?: (e: React.MouseEvent) => void;
      onMouseLeave?: (e: React.MouseEvent) => void;
    } = {};
    modeArray.forEach(item => {
      switch (item) {
        case 'click': {
          triggerEvents.onClick = this.open;
          break;
        }
        case 'hover': {
          triggerEvents.onMouseEnter = this.open;
          triggerEvents.onMouseLeave = this.close;
          break;
        }
        default: {
          triggerEvents.onClick = this.open;
          break;
        }
      }
    });
    return triggerEvents;
  };

  render() {
    const { positionStyle } = this.state;
    const { className, style, visible, children, selector } = this.props;

    const classes = classNames('cat-popover__content', className);
    const styles = { ...style, ...positionStyle };

    const triggerEvents = this.getTriggerEvents();

    return (
      <PurePortal selector={selector}>
        <div
          className={classes}
          ref={this.contentRef}
          style={styles}
          {...triggerEvents}
        >
          {children(visible as boolean)}
        </div>
      </PurePortal>
    );
  }
}

export default PopoverContent;
