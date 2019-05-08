import * as React from 'react'
import * as PropTypes from 'prop-types'
import { pick } from 'lodash'
import { StyledInput } from './styled'
import { Ttheme, TinputState } from './Input.d'
import Wrapper from './Wrapper'

export interface IinputProps {
  autoFocus?: boolean;
  autoSelect?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  readOnly?: boolean;
  size?: 'large' | 'normal' | 'small';
  theme?: Ttheme;
  placeholder?: string;
  showClear?: boolean;
  showEye?: boolean;
  error?: boolean;
  message?: string;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
}

export interface IinputStates {
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

class Input extends React.PureComponent<IinputProps, IinputStates> {
  static defaultProps = {
    type: 'text',
    theme: 'line',
    error: false
  }

  static getDerivedStateFromProps(nextProps: IinputProps) {
    if ('value' in nextProps) {
      return {
        value: nextProps.value
      }
    }
    return null
  }

  private input: React.RefObject<HTMLInputElement>;

  public constructor (props: IinputProps) {
    super(props)
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value
    const inputState = props.error ? inputStates.error : inputStates.default
    this.state = {
      value,
      domProps: Object.keys(domProps),
      inputState
    }

    this.input = React.createRef()
  }

  public getSnapShotBeforeUpdate (prevProps: IinputProps, prevState: IinputStates) {
    
  }

  private handleFocus (e: React.FocusEvent<HTMLInputElement>): void {
    const { onFocus } = this.props
    const { domProps, inputState } = this.state
    // set input active state
    inputState !== inputStates.error && this.setState({
      inputState: inputStates.active
    })

    // remove placeholder prop
    !!~domProps.indexOf('placeholder') && this.setState({
      domProps: Array.prototype.filter.call(domProps, (v: string) => v !== 'placeholder')
    })
    onFocus && onFocus(e)
  }

  private handleBlur (e: React.FocusEvent<HTMLInputElement>): void {
    const { onBlur } = this.props
    const { domProps, inputState } = this.state
    // set input default state
    inputState !== inputStates.error && this.setState({
      inputState: inputStates.default
    })

    // add placeholder prop
    !~domProps.indexOf('placeholder') && this.setState({
      domProps: Array.prototype.concat.call(domProps, ['placeholder'])
    })
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
    const { value, domProps, inputState } = this.state
    const { theme, className, message, placeholder } = this.props
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
