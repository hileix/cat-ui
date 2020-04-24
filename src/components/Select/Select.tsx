import React, { ReactNode, ReactElement, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import classNames from 'classnames';
import Selection from '../Selection';
import Option from '../Selection/Option';
import Popover from '../Popover';
import { positionNameConvert } from '../Popover/utils';
import { PositionNameType } from '../interface';

export interface ISelectProps {
  /**
   * 样式前缀
   */
  prefix?: string;
  /**
   * 类名
   */
  className?: string;
  /**
   * 最外层包裹盒子样式
   */
  style?: React.CSSProperties;
  /**
   * 触发盒子样式
   */
  triggerStyle?: React.CSSProperties;
  /**
   * 内容盒子样式
   */
  contentStyle?: React.CSSProperties;
  /**
   * 宽度
   */
  width?: string | number;
  /**
   * 禁用搜索
   */
  disabled?: boolean;
  /**
   * 指定默认选中的项
   */
  defaultValue?: string;
  /**
   * 指定当前选中的项
   */
  value?: string | number;
  /**
   * 选择的项发生变化时调用
   */
  onChange?: (value: string | number, index: number) => void;
  /**
   * 选择一项时调用
   */
  onSelect?: (value: string | number, index: number) => void;
  /**
   * 弹出层所在容器的 css 选择器
   */
  containerSelector: string;
  /**
   * 弹出层的方位
   */
  position: PositionNameType;
  /**
   * 子组件
   */
  children?: ReactElement[];
}

export interface ISelectState {
  /**
   * 当前选择项的值
   */
  value: string | number;
  /**
   * 是否显示选项列表
   */
  visible: boolean;
  /**
   * label
   */
  label: string;
}

class Select extends React.Component<ISelectProps, ISelectState> {
  static proptypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func,
    onSelect: PropTypes.func,
    containerSelector: PropTypes.string
  };

  static defaultProps = {
    prefix: 'cat',
    disabled: false,
    position: 'bottomLeft',
    containerSelector: 'body'
  };

  constructor(props: ISelectProps) {
    super(props);
    const { defaultValue, value } = props;
    const selectValue = defaultValue || value || ''
    let defaultLabel = ''
    React.Children.map(props.children, Option => {
      if (isValidElement(Option) && Option.props.value === selectValue) {
        defaultLabel = Option.props.children as string
      }
    })
    this.state = {
      value: selectValue,
      visible: false,
      label: defaultLabel,
    };
  }

  static Option: typeof Option;

  static getDerivedStateFromProps(nextProps: ISelectProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      };
    }
    return null;
  }

  handlePopoverChange = (visible: boolean) => {
    this.setState({
      visible
    });
  };

  handleSelect = (value: string | number, index: number, label: string) => {
    const { onSelect, onChange } = this.props;

    if (!('value' in this.props)) {
      this.setState({
        value,
        label
      });
    }

    this.setState({
      visible: false,
      label
    });

    onSelect && onSelect(value, index);

    if (value !== this.state.value) {
      onChange && onChange(value, index);
    }
  };

  renderSelection = () => {
    let { prefix, defaultValue, width, contentStyle, children } = this.props;
    const { visible, value } = this.state;

    let contentComputedStyle: React.CSSProperties = { ...contentStyle };
    width && (contentComputedStyle.width = width);

    return (
      <CSSTransition
        timeout={300}
        in={visible}
        classNames='visible'
        mountOnEnter
        unmountOnExit
        appear
      >
        <Selection
          className={`${prefix}-select-selection`}
          style={contentComputedStyle}
          visible={visible}
          value={value}
          onSelect={this.handleSelect}
        >
          {children}
        </Selection>
      </CSSTransition>
    );
  };

  handleClick = () => {
    const { disabled } = this.props;

    if (disabled) {
      return;
    }

    this.setState(prevState => ({
      visible: !prevState.visible
    }));
  };

  handleBlur = (e: React.FocusEvent<HTMLSpanElement>) => {
    e.persist();

    setTimeout(() => {
      this.setState({
        visible: false
      });
    }, 200);
  };

  renderArrow = () => {
    const { visible } = this.state;
    return (
      <i
        className={classNames('select-arrow', {
          'select-arrow--rotate': visible
        })}
      >
        <svg
          viewBox='64 64 896 896'
          focusable='false'
          className=''
          data-icon='down'
          width='1em'
          height='1em'
          fill='currentColor'
          aria-hidden='true'
        >
          <path d='M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z'></path>
        </svg>
      </i>
    );
  };

  render() {
    const {
      prefix,
      style,
      triggerStyle,
      className = '',
      width,
      disabled,
      containerSelector,
      position,
    } = this.props;
    const { label } = this.state;
    const classes = classNames(`${prefix}-select-wrap`, className);
    let triggerAttr: React.HTMLAttributes<HTMLSpanElement> = {};
    let triggerComputedStyle: React.CSSProperties = { ...triggerStyle };
    width && (triggerComputedStyle.width = width);
    if (!disabled) {
      triggerAttr.tabIndex = 0;
    }

    return (
      <div className={classes} style={style}>
        <Popover
          mode='click'
          {...positionNameConvert(position)}
          onChange={this.handlePopoverChange}
          selector={containerSelector}
        >
          <Popover.Trigger disabled={disabled}>
            <span
              className={classNames('selected-section', {
                disabled: disabled
              })}
              style={triggerComputedStyle}
              {...triggerAttr}
              onClick={this.handleClick}
              onBlur={this.handleBlur}
            >
              {label}
              {this.renderArrow()}
            </span>
          </Popover.Trigger>
          <Popover.Content>{this.renderSelection}</Popover.Content>
        </Popover>
      </div>
    );
  }
}

export default Select;
