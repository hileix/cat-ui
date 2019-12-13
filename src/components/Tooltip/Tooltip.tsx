import React from 'react';
import { Component } from 'react';
import classNames from 'classnames';
import Popover from '../Popover';
import { ModeType, PositionNameType } from '../Popover/interface';
import { positionNameConvert } from '../Popover/utils';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import memoizeOne from 'memoize-one';

export interface TooltipProps {
  /**
   * 外部状态控制是否显示
   */
  visible?: boolean;
  /**
   * 触发显示的模式
   */
  mode?: ModeType;
  /**
   * 定位的方向
   */
  position?: PositionNameType;
  /**
   * 弹层最大宽度
   */
  maxWidth?: number;
  /**
   * 弹层内容
   */
  content: React.ReactNode;
  /**
   * 触发弹层显示的 children
   */
  children: React.ReactElement;
  /**
   * 显示或隐藏的回调
   */
  onChange?: (visible: boolean) => void;
}

const OFFSET = 10;

/**
 * 文字提示
 */
class Tooltip extends Component<TooltipProps> {
  static propTypes = {
    visible: PropTypes.bool,
    mode: PropTypes.oneOfType([
      PropTypes.oneOf(['click', 'hover']),
      PropTypes.array
    ]),
    position: PropTypes.oneOf([
      'top',
      'right',
      'bottom',
      'left',
      'topLeft',
      'topRight',
      'rightTop',
      'rightBottom',
      'bottomLeft',
      'bottomRight',
      'leftTop',
      'leftBottom'
    ]),
    maxWidth: PropTypes.number,
    content: PropTypes.node,
    children: PropTypes.node
  };
  static defaultProps = {
    mode: 'hover',
    position: 'top',
    maxWidth: 400
  };

  getOffset = memoizeOne((position: PositionNameType): {
    offsetX: number;
    offsetY: number;
  } => {
    let offsetX: number = 0,
      offsetY: number = 0;

    switch (position) {
      case 'top':
      case 'topLeft':
      case 'topRight': {
        offsetY = -OFFSET;
        break;
      }

      case 'right':
      case 'rightTop':
      case 'rightBottom': {
        offsetX = OFFSET;
        break;
      }

      case 'bottom':
      case 'bottomLeft':
      case 'bottomRight': {
        offsetY = OFFSET;
        break;
      }

      case 'left':
      case 'leftTop':
      case 'leftBottom': {
        offsetX = -OFFSET;
        break;
      }

      default: {
        offsetY = -OFFSET;
      }
    }
    return { offsetX, offsetY };
  });

  renderTooltipContent = (visible: boolean) => {
    const { content, maxWidth, position } = this.props;
    const contentPrefix = 'cat-tooltip__content';
    const classes = classNames(contentPrefix, `${contentPrefix}--${position}`);
    const newStyle: React.CSSProperties = { maxWidth };
    return (
      <CSSTransition
        timeout={300}
        in={visible}
        classNames={`${contentPrefix}--${position}`}
        unmountOnExit
        mountOnEnter
        appear
      >
        <div className={classes} style={newStyle}>
          {content}
        </div>
      </CSSTransition>
    );
  };

  render() {
    const { mode, children, visible, position } = this.props;
    const { triggerPosition, contentPosition } = positionNameConvert(position);
    const { offsetX, offsetY } = this.getOffset(position);

    return (
      <Popover
        visible={visible}
        mode={mode}
        triggerPosition={triggerPosition}
        contentPosition={contentPosition}
        offsetX={offsetX}
        offsetY={offsetY}
      >
        <Popover.Trigger>{children}</Popover.Trigger>
        <Popover.Content>{this.renderTooltipContent}</Popover.Content>
      </Popover>
    );
  }
}

export default Tooltip;
