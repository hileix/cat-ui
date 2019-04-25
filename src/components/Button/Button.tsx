import * as React from 'react'
import * as _ from 'lodash'
import { debounce } from 'lodash'
import { PureComponent } from 'react'
// import * as PropTypes from 'prop-types'
import classNames from 'classnames'
import { StyledButton } from './styled'

export interface ButtonProps {
  /** 前缀 */
  prefix?: string;
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
  /** 主题 */
  theme?: 'primary' | 'primary-up' | 'yellow' | 'white-primary' | 'white-cyan' | 'borderless';
  /** 是否禁用 */
  disabled?: boolean;
  /** 样式 */
  htmlType?: 'submit' | 'button' | 'reset';
  /** 是否将按钮宽度调整为其父宽度 */
  block?: boolean;
  /** 尺寸 */
  size?: 'sm' | 'md' | 'lg';
  /** 设置按钮的图标类型 */
  icon?: string;
  /** 子元素 */
  children?: React.ReactNode;
  /** 点击按钮时的回调 */
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/**
 * 按钮
 */
class Button extends PureComponent<ButtonProps, any> {
  private buttonRef: any;
  private originalBtnStyle: string = '';
  static defaultProps = {
    prefix: 'hmly',
    htmlType: 'button',
    theme: 'primary',
    size: 'lg',
    disabled: false
  }

  constructor (props: ButtonProps) {
    super(props)
    this.state = {}
    this.buttonRef = React.createRef()
  }

  componentDidMount () {
    const btnDOM = this.buttonRef.current
    this.originalBtnStyle = btnDOM.getAttribute('style') ? btnDOM.getAttribute('style') : ''
    // console.log('componentDidMount', debounce)
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const { disabled, onClick } = this.props
    if (disabled) return
    onClick && onClick(event)
  }

  setBtnUp = debounce((e: any) => {
    const { theme } = this.props
    if (theme === 'primary-up') {
      const btnDOM = this.buttonRef.current
      const newStyle = this.originalBtnStyle + 'transform: translateY(-3px);'
      btnDOM.setAttribute('style', newStyle)
    }
  }, 50)

  setBtnDown = debounce(() => {
    const { theme } = this.props
    if (theme === 'primary-up') {
      const btnDOM = this.buttonRef.current
      const downStyle = 'background-color: #ff4444;box-shadow: 0 4px 12px 0 rgba(255, 68, 68, 0.5);'
      const newStyle = this.originalBtnStyle + downStyle
      btnDOM.setAttribute('style', newStyle)
    }
  }, 50)

  onMouseLeave = debounce(() => {
    const { theme } = this.props
    if (theme === 'primary-up') {
      const btnDOM = this.buttonRef.current
      if (this.originalBtnStyle) {
        btnDOM.setAttribute('style', this.originalBtnStyle)
      } else {
        btnDOM.removeAttribute('style')
      }
    }
  }, 50)

  render() {
    const { prefix, className, style, theme, size, block, disabled,
      htmlType, children, ...others } = this.props
    const classes = classNames(`${prefix}-button`, {
      [`${prefix}-button-${theme}`]: theme,
      [`${prefix}-button-${size}`]: size,
      [`${prefix}-button-block`]: block,
      [`${prefix}-button-disabled`]: disabled
    }, className)

    return (<StyledButton
      ref={this.buttonRef}
      className={classes}
      style={style}
      type={htmlType}
      disabled={disabled}
      onClick={this.handleClick}
      onMouseEnter={this.setBtnUp}
      onMouseLeave={this.onMouseLeave}
      onMouseDown={this.setBtnDown}
      onMouseUp={this.setBtnUp}>
      {children}
    </StyledButton>)
  }
}

export default Button
