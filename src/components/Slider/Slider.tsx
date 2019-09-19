import * as React from 'react';
import { Component, createRef } from 'react';
import classNames from 'classnames';

export interface SliderOption {
  /** 前缀 */
  prefixCls?: string;
  /** 类名 */
  className?: string;
  /** 主题 */
  theme?: string;
  /** 输入条的值 */
  value?: number;
  /** 输入条值发生变化前触发 */
  onBeforeChange?: (value: number) => void;
  /** 输入条值发生变化时触发 */
  onChange?: (value: number) => void;
  /** 输入条值发生变化后触发 */
  onAfterChange?: (value: number) => void;
}

/**
 * Slider滑动输入条
 *
 * 为Slider组件提供value属性，可使Slider变为受控组件，否则当前组件为非受控
 *
 * Slider兼容至移动端，在移动端下会默认使用touch事件
 *
 */
class Slider extends Component<SliderOption, any> {
  static defaultProps = {
    className: '',
    prefixCls: 'hmly',
    theme: '',
    defaultValue: 0
  };

  refSlider: React.RefObject<HTMLDivElement>;

  constructor(props: any) {
    super(props);
    this.state = {
      value: props.value || props.defaultValue || 0
    };
    this.refSlider = createRef();
  }

  componentDidMount() {
    const slider = this.refSlider.current;
    if ('ontouchstart' in document) {
      slider.addEventListener('touchstart', this.onTouchStart);
    } else {
      slider.addEventListener('mousedown', this.onMouseDown);
    }
  }

  componentWillUnmount() {
    const slider = this.refSlider.current;
    if ('ontouchstart' in document) {
      slider.removeEventListener('touchstart', this.onTouchStart);
    } else {
      slider.removeEventListener('mousedown', this.onMouseDown);
    }
  }

  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    return 'value' in nextProps ? { value: nextProps.value } : null;
  }

  calcValue = (clientX: number) => {
    const slider = this.refSlider.current;
    let value =
      (clientX - slider.getBoundingClientRect().left) / slider.offsetWidth;
    if (value < 0) {
      value = 0;
    } else if (value > 1) {
      value = 1;
    }
    return value * 100;
  };

  onMouseDown = (e: any) => {
    const { onBeforeChange, onChange } = this.props;
    const value = this.calcValue(e.clientX);
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.setState({ dragging: true });
    onBeforeChange && onBeforeChange(value);
    onChange && onChange(value);
  };

  onMouseMove = (e: any) => {
    const { onChange } = this.props;
    const value: number = this.calcValue(e.clientX);
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    onChange && onChange(value);
  };

  onMouseUp = (e: any) => {
    const { onAfterChange } = this.props;
    const value = this.calcValue(e.clientX);
    this.setState({ dragging: false });
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    onAfterChange && onAfterChange(value);
  };

  onTouchStart = (e: any) => {
    const { onBeforeChange, onChange } = this.props;
    const value = this.calcValue(e.touches[0].clientX);
    document.addEventListener('touchmove', this.onTouchMove);
    document.addEventListener('touchend', this.onTouchEnd);
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    this.setState({ dragging: true });
    onBeforeChange && onBeforeChange(value);
    onChange && onChange(value);
  };

  onTouchMove = (e: any) => {
    const { onChange } = this.props;
    const value = this.calcValue(e.touches[0].clientX);
    if (!('value' in this.props)) {
      this.setState({ value });
    }
    onChange && onChange(value);
  };

  onTouchEnd = (e: any) => {
    const { onAfterChange } = this.props;
    const value = this.calcValue(e.changedTouches[0].clientX);
    this.setState({ dragging: false });
    document.removeEventListener('touchmove', this.onTouchMove);
    document.removeEventListener('touchend', this.onTouchEnd);
    onAfterChange && onAfterChange(value);
  };

  render() {
    const { className, prefixCls, theme } = this.props;
    const { value, dragging } = this.state;
    const trackStyle = { width: `${value}%` };
    const handleStyle = { left: `${value}%` };
    const classes = classNames(
      `${prefixCls}-slider`,
      {
        [`${prefixCls}-slider-${theme}`]: theme,
        dragging
      },
      className
    );

    return (
      <div className={classes} ref={this.refSlider}>
        <div className="slider-rail" />
        <div className="slider-track" style={trackStyle} />
        <div className="slider-handle-wrap">
          <div className="slider-handle" style={handleStyle} title={value}>
            <div className="circle" />
          </div>
        </div>
      </div>
    );
  }
}

export default Slider;
