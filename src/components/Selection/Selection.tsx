import * as React from 'react'
import * as PropTypes from 'prop-types'
import keycode from 'keycode'
import { PureComponent, cloneElement } from 'react'
import classNames from 'classnames'
import './style/Selection.scss'

export interface ISelectionProps {
  /**
   * 样式前缀
   */
  prefix?: string;
  /**
   * css 类名
   */
  className?: string;
  /**
   * 行内样式
   */
  style?: object;
  /**
   * 是否显示选择菜单
   */
  open?: boolean;
  /**
   * 用于初始化的默认值
   */
  defaultValue?: string | number;
  /**
   * 指定当前选中项
   */
  value?: string | number;
  /**
   * Option
   */
  children?: Array<React.ReactElement>;
  /**
   * 选中一项触发的回调函数
   */
  onSelect?: (value?: string | number) => void;
}

export interface ISelectionState {
  /**
   * 是否显示当前组件
   */
  open: boolean,
  /**
   * 获得焦点项的索引
   */
  focusIndex?: number,
  /**
   * 选中项的索引
   */
  selectedIndex?: number
}

/**
 * 选择菜单组件
 * 应用在具有选择的场景
 * 比如Select、Search、列表等
 */
class Selection extends PureComponent<ISelectionProps, ISelectionState> {
  static propTypes = {
    prefix: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    open: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    children: PropTypes.arrayOf(PropTypes.element),
    onSelect: PropTypes.func
  };

  static defaultProps = {
    open: true,
    prefix: 'cat'
  }

  constructor(props: ISelectionProps) {
    super(props)
    const { open, defaultValue, value, children } = props
    const initialValue = defaultValue || value
    let focusIndex
    
    React.Children.forEach(children, (Option: React.ReactElement, index) => {
      if (Option.props.value === initialValue) {
        return focusIndex = index
      }
    })

    this.state = {
      open,
      focusIndex,
      selectedIndex: focusIndex,
    }
  }


  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  static getDerivedStateFromProps(nextProps: ISelectionProps, prevState: ISelectionState) {
    if (nextProps.open !== prevState.open) {
      return {
        open: nextProps.open,
        focusIndex: -1
      }
    }
    return null
  }

  getValidItemIndex = (itemIndex: number, offset: number) => {
    const { children } = this.props

    let nextIndex = itemIndex
    while (children[nextIndex].props.disabled) {
      nextIndex += offset
    }

    return nextIndex
  }

  moveFocusIndex = (offset: number) => {
    const { children } = this.props
    const { focusIndex } = this.state
    let nextIndex = focusIndex + offset
  
    if (nextIndex === children.length) {
      nextIndex = 0
    } else if (nextIndex < 0) {
      nextIndex = children.length - 1
    }

    this.setState({
      focusIndex: this.getValidItemIndex(nextIndex, offset)
    })
  }

  handleClickOption = ({value, index, disabled}) => {
    const { onSelect } = this.props

    if (disabled) {
      return 
    }

    this.setState({
      selectedIndex: index,
      focusIndex: -1
    })
    onSelect && onSelect(value)
  }

  handleMouseEnterOption = ({index, disabled}) => {
    if (disabled) {
      return
    }

    this.setState({
      focusIndex: index
    })
  }

  handleMouseLeaveOption = ({index, disabled}) => {
    if (disabled) {
      return
    }

    this.setState({
      focusIndex: index
    })
  }

  selectCurrentFocusIndex = () => {
    const { onSelect, children } = this.props
    const { focusIndex } = this.state
    let value = children[focusIndex].props.value
    let disabled = children[focusIndex].props.disabled

    if (disabled) {
      return
    }

    this.setState({
      selectedIndex: focusIndex
    })
    onSelect && onSelect(value)
  }

  handleKeydown = e => {
    const { open } = this.state
    const keyName = keycode(e)

    if (!open) {
      return
    }

    switch (keyName) {
      case 'down':
        e.preventDefault()
        this.moveFocusIndex(1)
        break;

      case 'up': {
        e.preventDefault();
        this.moveFocusIndex(-1)
        break;
      }

      case 'enter': {
        this.selectCurrentFocusIndex()
        break;
      }

      default:
    }
  }

  render () {
    const { prefix, style, className, children } = this.props
    const { focusIndex, selectedIndex } = this.state
    const classes = classNames(`${prefix}-selection-wrap`, className);

    const Options = React.Children.map(children, (Option: React.ReactElement, index) => {
      if (!Option) {
        return null
      }

      return cloneElement(Option, {
        key: index,
        className: classNames(Option.props.className, {
          'disabled': Option.props.disabled,
          'focus': index === focusIndex,
          'selected': index === selectedIndex
        }),
        index,
        disabled: Option.props.disabled,
        onClick: this.handleClickOption,
        onMouseEnter: this.handleMouseEnterOption,
        onMouseLeave: this.handleMouseLeaveOption,
      })
    })

    return (
      <div
        className={classes}
        style={style}
        onKeyDown={this.handleKeydown}
      >
        {Options}
      </div>
    )
  }
}

export default Selection;