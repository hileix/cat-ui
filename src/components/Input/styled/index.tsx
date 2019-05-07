import styled from 'styled-components'
import { colorQuaternary, colorTertiary, colorPrimary, colorRedPrimary } from '../../../styles/theme'
import { IWrapperProps } from '../Wrapper'

const enum inputStates {
  default,
  hover,
  active,
  error
}

const StyledInput = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;
  position: relative;
  z-index: 1;
  background-color: transparent;
  color: ${colorPrimary};
  border: 0;
  &:focus{
    outline: none;
  }
  &::-ms-clear{
    display:none;
  }
  &::-ms-reveal{
    display:none;
  }
  &::-webkit-credentials-auto-fill-button {
    visibility: hidden;
    display: none !important;
    pointer-events: none;
    position: absolute;
    right: 0;
  }
  &::placeholder,
  &::-webkit-input-placeholder{
    font-size: 16px;
    font-weight: normal;
    line-height: 1;
    color: ${colorTertiary};
  };
`

const StyledWrapper = styled.div<IWrapperProps>`
  display: inline-block;
  width: 100%;
  height: 100%;
  position: relative;
  box-sizing: border-box;
  padding-left: ${props => (props.theme === 'box' || props.theme === 'box-pwd' ? '20px' : 0)};
`

const StyledWrapperBorder = styled.span<IWrapperProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .3s;
  &:hover{
    border-color: ${colorTertiary};
  }
  border-left: ${props => {
    if (props.theme === 'line' || props.theme === 'line-pwd') return 0
    return '1px solid'
  }};
  border-right: ${props => {
    if (props.theme === 'line' || props.theme === 'line-pwd') return 0
    return '1px solid'
  }};
  border-top: ${props => {
    if (props.theme === 'line' || props.theme === 'line-pwd') return 0
    return '1px solid'
  }};
  border-bottom: 1px solid;
  border-color: ${props => {
    let color
    switch (props.state) {
      case inputStates.default:
        color = colorQuaternary
        break
      case inputStates.hover:
        color = colorTertiary
        break
      case inputStates.active:
        color = colorPrimary
        break
      case inputStates.error:
        color = colorRedPrimary
        break
      default:
        color = colorQuaternary
    };
    return color
  }};
  border-radius: ${props => (props.theme === 'box' || props.theme === 'box-pwd' ? '4px' : 0)};
`

const StyledWrapperPlaceholder = styled.span<IWrapperProps>`
  position: absolute;
  top: 50%
  left: ${props => (props.theme === 'box' || props.theme === 'box-pwd' ? '20px' : 0)};
  transform: translate(0, -50%);
  font-size: 16px;
  font-weight: normal;
  transition: all .3s;
  color: ${props => (props.state === inputStates.active ? colorPrimary : 'transparent')};
`

const StyledWrapperMsg = styled.span<IWrapperProps>`
  display: block;
  font-size: 12px;
  color: ${props => (props.state === inputStates.error ? colorRedPrimary : colorPrimary)};
  font-weight: normal;
  margin-top: 8px;
`

export { StyledInput, StyledWrapper, StyledWrapperBorder, StyledWrapperPlaceholder, StyledWrapperMsg }