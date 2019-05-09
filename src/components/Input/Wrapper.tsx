import * as React from 'react'
import { StyledWrapper, StyledWrapperBorder, StyledWrapperPlaceholder, StyledWrapperMsg, StyledWrapperIcon } from './styled'
import { Ttheme, TinputState } from './Input.d'
import Icon from '../Icon'

export interface IWrapperProps {
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
    const { className, theme, state, placeholder, message, children } = this.props

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
        <StyledWrapperIcon>
          <Icon type={'close'} />
        </StyledWrapperIcon>
      </StyledWrapper>
    )
  }
}

export default Wrapper
