import * as React from 'react'
import { StyledWrapper, StyledWrapperBorder, StyledWrapperPlaceholder, StyledWrapperMsg } from './styled'
import { TSize, Ttheme, TinputState } from './Input.d'

export interface IWrapperProps {
  size?: TSize;
  theme?: Ttheme;
  state?: TinputState;
  className?: string;
  placeholder?: string;
  message?: string;
  showClear?: boolean;
  showEye?: boolean;
  children?: any;
}

class Wrapper extends React.PureComponent<IWrapperProps, any> {
  public render () {
    const { className, size, theme, state, placeholder, message, showClear, showEye, children } = this.props

    return (
      <StyledWrapper
        size={size}
        theme={theme}
        state={state}
        showClear={showClear}
        showEye={showEye}
        className={className}
      >
        <StyledWrapperBorder
          theme={theme}
          state={state}
        >
          {placeholder && <StyledWrapperPlaceholder theme={theme} state={state} >
            {placeholder}
            </StyledWrapperPlaceholder>
          }   
        </StyledWrapperBorder>
        {children}
        {message && <StyledWrapperMsg theme={theme} state={state} >
          {message}
          </StyledWrapperMsg>
        }
      </StyledWrapper>
    )
  }
}

export default Wrapper
