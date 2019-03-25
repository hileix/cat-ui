import * as React from 'react'
import * as PropTypes from 'prop-types'
import classnames from '../../utils/classnames'

export type InputType = 'line' | 'line-password' | 'text' | 'text-password' | 'textarea'

export interface InputProps {
  autoFocus?: boolean;
  autoSelect?: boolean;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  value?: string;
  type?: InputType;
  readOnly?: boolean;
  size?: 'large' | 'normal' | 'small';
  placeholder?: string;
  showClear?: boolean;
  showEye?: boolean;
}

export interface InputStates {
  value: string
}

class Input extends React.PureComponent<InputProps, InputStates> {
  static defaultProps = {
    type: 'text',
    disabled: false
  }

  constructor (props: InputProps) {
    super(props)
    const value = typeof props.value === 'undefined' ? props.defaultValue : props.value
    this.state = {
      value
    }
  }

  public state = {
    value: ''
  }

  public render () {
    return (
      <input />
    )
  }
}

export default Input