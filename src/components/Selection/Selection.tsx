import * as React from 'react'
import * as PropTypes from 'prop-types'
import keycode from 'keycode'
import { PureComponent, cloneElement } from 'react'
import classNames from 'classnames'
import '../../styles/Selection.scss'

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
  visible?: boolean;
  /**
   * 用于初始化的默认值
   */
  defaultValue?: string | number;
  /**
   * 指定当前选中项
   */
  value?: string | number;
  /**
   * 子组件
   */
  children?: any;
  /**
   * 选中一项触发的回调函数
   */
  onSelect?: (value?: string | number) => void;
}

export interface ISelectionState {
  /**
   * 是否显示当前组件
   */
  visible: boolean,
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
    visible: PropTypes.bool,
    defaultValue: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    children: PropTypes.node,
    onSelect: PropTypes.func
  };

  static defaultProps = {
    visible: true,
    prefix: 'cat'
  }

  constructor(props: ISelectionProps) {
    super(props)
    const { visible, defaultValue, value, children } = props
    const initialValue = defaultValue || value
    let focusIndex
    
    React.Children.forEach(children, (Option, index) => {
      if (Option.props.value === initialValue) {
        return focusIndex = index
      }
    })

    this.state = {
      visible,
      focusIndex,
      selectedIndex: focusIndex,
    }
  }

  private childrenLength = 0

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeydown)
  }

  componentWillUnmount () {
    document.removeEventListener('keydown', this.handleKeydown)
  }

  static getDerivedStateFromProps(nextProps: ISelectionProps, prevState: ISelectionState) {
    if (nextProps.visible !== prevState.visible) {
      return {
        visible: nextProps.visible,
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
    const { focusIndex } = this.state
    let nextIndex = focusIndex + offset
  
    if (nextIndex === this.childrenLength) {
      nextIndex = 0
    } else if (nextIndex < 0) {
      nextIndex = this.childrenLength - 1
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

    if (!children[focusIndex]) {
      return
    }

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
    const { visible } = this.state
    const keyName = keycode(e)

    if (!visible) {
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
    const { visible, focusIndex, selectedIndex } = this.state
    const classes = classNames(`${prefix}-selection-wrap`, {
      'visible': visible,
    }, className);

    this.childrenLength = 0
    const Options = React.Children.map(children, (Option: React.ReactElement, index) => {
      if (!Option) {
        return null
      }

      this.childrenLength++

      return cloneElement(Option, {
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