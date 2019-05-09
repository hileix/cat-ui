import * as React from 'react'
import * as PropTypes from 'prop-types'
import { pick } from 'lodash'
import { StyledInput } from './styled'
import { Ttheme, TinputState } from './Input.d'
import Wrapper from './Wrapper'

export interface InputProps {
  /** 自动聚焦 */
  autoFocus?: boolean;
  /** 自动选择 */
  autoSelect?: boolean;
  /** 类名 */
  className?: string;
  /** 默认值 */
  defaultValue?: string;
  /** 禁用 */
  disabled?: boolean;
  /** 值 - 如果传入value属性，则input框变为受控, 因此输入框的值只根据value设置 */
  value?: string;
  /** 是否只读 */
  readOnly?: boolean;
  /** 大小尺寸 */
  size?: 'large' | 'normal' | 'small';
  /** 类型 'line' | 'line-pwd' | 'box' | 'box-pwd' */
  type?: Ttheme;
  /** 占位符 */
  placeholder?: string;
  /** 展示一键清除按钮 */
  showClear?: boolean;
  /** 展示密码和文本切换按钮 */
  showEye?: boolean;
  /** 是否出错 */
  error?: boolean;
  /** 输入框消息提示 */
  message?: string;
  /** 聚焦回调 */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any;
  /** 失焦回调 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  /** 值改变的回调 */
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  /** 按键的回调 */
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  /** 按下回车键的回调 */
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
}

export interface InputStates {
  type: 'text' | 'password';
  value: string;
  domProps: Array<string>;
  inputState: TinputState;
}

interface IdomProps {
  placeholder?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

const domProps: IdomProps = {
  placeholder: '',
  disabled: false,
  readOnly: false
}

const enum inputStates {
  default,
  hover,
  active,
  error
}

class Input extends React.PureComponent<InputProps, InputStates> {
  static defaultProps = {
    type: 'line',
    error: false
  }

  static PropTypes = {
    autoFocus: PropTypes.bool,
    autoSelect: PropTypes.bool,
    className: PropTypes.string,
    defaultValue: PropTypes.string,
    disabled: PropTypes.bool,
    value: PropTypes.string,
    readOnly: PropTypes.bool,
    size: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    showClear: PropTypes.bool,
    showEye: PropTypes.bool,
    error: PropTypes.bool,
    message: PropTypes.string,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    onPressEnter: PropTypes.func
  }

  static getDerivedStateFromProps(nextProps: InputProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  private input: React.RefObject<HTMLInputElement>;

  public constructor (props: InputProps) {
    super(props)
    const type = typeof props.type === 'undefined' ? 'text' : (props.type === 'line-pwd' || props.type === 'box-pwd' ? 'password' : 'text')
    const value = (typeof props.value === 'undefined' ? props.defaultValue : props.value) || ''
    const inputState = props.error ? inputStates.error : inputStates.default
    this.state = {
      type,
      value,
      domProps: Object.keys(domProps),
      inputState
    }

    this.input = React.createRef()
  }

  public getSnapShotBeforeUpdate (prevProps: InputProps, prevState: InputStates) {
    
  }

  private handleFocus (e: React.FocusEvent<HTMLInputElement>): void {
    const { domProps, inputState } = this.state
    // set input active state
    inputState !== inputStates.error && this.setState({
      inputState: inputStates.active
    })

    // remove placeholder prop
    !!~domProps.indexOf('placeholder') && this.setState({
      domProps: Array.prototype.filter.call(domProps, (v: string) => v !== 'placeholder')
    })

    const { onFocus } = this.props
    onFocus && onFocus(e)
  }

  private handleBlur (e: React.FocusEvent<HTMLInputElement>): void {
    const { domProps, inputState } = this.state
    // set input default state
    inputState !== inputStates.error && this.setState({
      inputState: inputStates.default
    })

    // add placeholder prop
    !~domProps.indexOf('placeholder') && this.setState({
      domProps: Array.prototype.concat.call(domProps, ['placeholder'])
    })

    const { onBlur } = this.props
    onBlur && onBlur(e)
  }

  private handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
    this.setValue(e.target.value, e)
  }

  private handleKeyDown (e: React.KeyboardEvent<HTMLInputElement>): void {
    const { onPressEnter, onKeyDown } = this.props
    if (e.keyCode === 13 && onPressEnter) {
      onPressEnter(e)
    }
    if (onKeyDown) {
      onKeyDown(e)
    }
  }

  private handleMouseEnter (e: React.MouseEvent<HTMLInputElement>) {
    const { inputState } = this.state
    inputState === inputStates.default && this.setState({
      inputState: inputStates.hover
    })
  }

  private handleMouseLeave (e: React.MouseEvent<HTMLInputElement>) {
    const { inputState } = this.state
    inputState === inputStates.hover && this.setState({
      inputState: inputStates.default
    })
  }

  private setValue(
    value: string,
    e: React.ChangeEvent<HTMLInputElement> | React.MouseEvent<HTMLElement, MouseEvent>,
    callback?: () => void,
  ) {
    if (!('value' in this.props)) {
      this.setState({ value }, callback);
    }
    const { onChange } = this.props
    if (onChange) {
      let event = e
      if (e.type === 'click') {
        // click clear icon
        event = Object.create(e)
        event.target = this.input.current
        event.currentTarget = this.input.current
        const originalInputValue = this.input.current.value

        this.input.current.value = ''
        onChange(event as React.ChangeEvent<HTMLInputElement>)
        this.input.current.value = originalInputValue;
        return
      }
      onChange(event as React.ChangeEvent<HTMLInputElement>);
    }
  }

  public render () {
    const { type, value, domProps, inputState } = this.state
    const { className, message, placeholder } = this.props
    const theme = this.props.type
    const props = pick(this.props, domProps) as IdomProps

    return (
      <Wrapper
        theme={theme}
        state={inputState}
        className={className}
        message={message}
        placeholder={placeholder}
      >
        <StyledInput
          type={type}
          value={value}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          onMouseEnter={this.handleMouseEnter.bind(this)}
          onMouseLeave={this.handleMouseLeave.bind(this)}
          ref={this.input}
          {...props}
        />
      </Wrapper>
    )
  }
}

export default Input
