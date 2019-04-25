import * as React from 'react'
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
    this.originalBtnStyle = btnDOM.getAttribute('style')
  }

  handleClick: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    const { disabled, onClick } = this.props
    console.log('Button:handleClick: disabled', disabled)
    if (disabled) return
    onClick && onClick(event)
  }

  onMouseEnter = () => {
    const { theme } = this.props
    const btnDOM = this.buttonRef.current
    if (theme === 'primary-up') {
      btnDOM.setAttribute('style', 'top: -3px;')
      // console.log('onMouseEnter', btnDOM)
    }
  }

  onMouseLeave = () => {
    const { theme } = this.props
    const btnDOM = this.buttonRef.current
    if (theme === 'primary-up') {
      if (this.originalBtnStyle) {
        btnDOM.setAttribute('style', this.originalBtnStyle)
      } else {
        btnDOM.removeAttribute('style')
      }
      // console.log('onMouseLeave', btnDOM)
    }
  }

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
      onMouseEnter={this.onMouseEnter}
      onMouseLeave={this.onMouseLeave}>
      {children}
    </StyledButton>)
  }
}

export default Button
