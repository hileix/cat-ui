import * as React from 'react'
import * as PropTypes from 'prop-types'
import { StyledWrapper, StyledWrapperBorder, StyledWrapperPlaceholder, StyledWrapperErrorMsg } from './styled'
import { Ttheme, TinputState } from './Input.d'

export interface IWrapperProps {
  theme?: Ttheme;
  state?: TinputState;
  className?: string;
  placeholder?: string;
  errMsg?: string;
  children?: any;
}

class Wrapper extends React.PureComponent<IWrapperProps, any> {
  public render () {
    const { className, theme, state, placeholder, errMsg, children } = this.props

    return (
      <StyledWrapper
        theme={theme}
        state={state}
        className={className}
      >
        <StyledWrapperBorder
          theme={theme}
          state={state}
        >
          {placeholder && <StyledWrapperPlaceholder>{placeholder}</StyledWrapperPlaceholder>}   
        </StyledWrapperBorder>
        {children}
        {errMsg && <StyledWrapperErrorMsg>{errMsg}</StyledWrapperErrorMsg>}
      </StyledWrapper>
    )
  }
}

export default Wrapper
