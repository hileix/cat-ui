import * as React from 'react'
import * as PropTypes from 'prop-types'
import { pick } from 'lodash'
import classnames from '../../utils/classnames'
import { StyledLabel, StyledInput } from './styled'

export type TinputType = 'line' | 'line-password' | 'text' | 'text-password' | 'textarea'

export interface IinputProps {
  autoFocus?: boolean;
  autoSelect?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  type?: TinputType;
  readOnly?: boolean;
  size?: 'large' | 'normal' | 'small';
  theme?: 'line' | 'line-pwd' | 'box' | 'box-pwd';
  placeholder?: string;
  showClear?: boolean;
  showEye?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => any;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
  onPressEnter?: (e: React.KeyboardEvent<HTMLInputElement>) => any;
}

export interface IinputStates {
  value: string;
}

interface IdomProps {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

const domProps: IdomProps = {
  placeholder: '',
  defaultValue: '',
  value: '',
  disabled: false,
  readOnly: false
}

class Input extends React.PureComponent<IinputProps, IinputStates> {
  static defaultProps = {
    type: 'text',
    theme: 'line',
    disabled: false
  }

  public constructor (props: IinputProps) {
    super(props)
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value
    this.state = {
      value
    }
  }

  private handleFocus (e: React.FocusEvent<HTMLInputElement>): void {
    const { onFocus } = this.props
    onFocus && onFocus(e)
  }

  private handleBlur (e: React.FocusEvent<HTMLInputElement>): void {
    const { onBlur } = this.props
    onBlur && onBlur(e)
  }

  private handleChange (e: React.ChangeEvent<HTMLInputElement>): void {
    const { onChange } = this.props
    onChange && onChange(e)
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

  public render () {
    const { theme, className } = this.props
    const props = pick(this.props, Object.keys(domProps)) as IdomProps
    const classes = classnames({
      prefix: 'hmly-input',
      theme
    })

    return (
      <StyledLabel className={classes('label', className)}>
        <StyledInput
          className={classes('', className)}
          onFocus={this.handleFocus.bind(this)}
          onBlur={this.handleBlur.bind(this)}
          onChange={this.handleChange.bind(this)}
          onKeyDown={this.handleKeyDown.bind(this)}
          {...props}
        />
      </StyledLabel>
    )
  }
}

export default Input
