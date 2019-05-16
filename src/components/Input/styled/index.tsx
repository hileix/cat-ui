import styled, { keyframes } from 'styled-components'
import { colorQuaternary, colorTertiary, colorPrimary, colorRedPrimary } from '../../../styles/theme'
import { IdomProps, inputStates } from '../Input'
import { IWrapperProps } from '../Wrapper'

const size_width = {
  'large': '400px',
  'normal': '300px',
  'small': '200px'
}

const size_height = {
  'large': '50px',
  'normal': '40px',
  'small': '30px'
}

const StyledInput = styled.input<IdomProps>`
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
  outline: 0;
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
    line-height: 1.5;
    color: ${colorTertiary};
  };
  cursor: ${props => props.disabled && 'not-allowed'}
`

const StyledIcon = styled.span<IWrapperProps>`
  cursor: pointer;
  position: absolute;
  top: 50%
  transform: translate(0, -50%);
  z-index: 1;
  width: 10px;
  height: 10px;
  right: 5.5%;
  color: ${props => (props.state === inputStates.error ? colorRedPrimary : colorPrimary)};
  font-size: ${props => props.showClear ? '10px' : '16px'};
`

const StyledWrapper = styled.div<IWrapperProps>`
  display: inline-block;
  width: ${props => props.size ? (size_width[props.size] || '100%') : '100%'};
  height: ${props => props.size ? (size_height[props.size] || '100%') : '100%'};
  position: relative;
  box-sizing: border-box;
  padding-left: ${props => (props.theme === 'box' || props.theme === 'box-pwd' ? '20px' : 0)};
  padding-right: ${props => props.showClear || props.showEye ? '3.5%' : 0};
`

const StyledWrapperBorder = styled.span<IWrapperProps>`
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all .3s;
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
  border-radius: ${props => props.theme === 'textarea' ? '2px' : (props.theme === 'box' || props.theme === 'box-pwd' ? '4px' : 0)};
`

const flyout = keyframes`
  from {
    font-size: 16px;
    color: ${colorTertiary};
    background-color: transparent;
    transform: translate(0, -50%);
    top: 50%;
  }

  to {
    font-size: 12px;
    color: ${colorPrimary};
    background-color: #ffffff;
    transform: translate(0, 0);
    top: -15%;
  }
`;

const flyin = keyframes`
  from {
    font-size: 12px;
    color: ${colorPrimary};
    background-color: #ffffff;
    transform: translate(0, 0);
    top: -15%;
  }

  to {
    font-size: 16px;
    color: ${colorTertiary};
    background-color: transparent;
    transform: translate(0, -50%);
    top: 50%;
  }
`;

const StyledWrapperPlaceholder = styled.span<IWrapperProps>`
  position: absolute;
  top: 50%
  z-index: 1;
  left: ${props => (props.theme === 'box' || props.theme === 'box-pwd' ? '15px' : 0)};
  padding: ${props => (props.theme === 'box' || props.theme === 'box-pwd' ? '0 5px' : 0)};
  transform: translate(0, -50%);
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  letter-spacing: 0.75px;
  color: ${colorTertiary};
  transition: all .3s;
  animation: ${props => ((props.state === inputStates.active || props.value) ? flyout : flyin)} .2s ease-out forwards;
`

const StyledWrapperMsg = styled.span<IWrapperProps>`
  display: block;
  font-size: 12px;
  color: ${props => (props.state === inputStates.error ? colorRedPrimary : colorPrimary)};
  font-weight: normal;
  margin-top: 8px;
`

const StyledTextArea = styled.textarea<IWrapperProps>`
  display: block;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-weight: normal;
  position: relative;
  padding: 10px 15px;
  z-index: 1;
  background-color: transparent;
  color: ${colorPrimary};
  border: 0;
  outline: 0;
  &:focus{
    outline: none;
  };
  resize:none;
`

export { StyledInput, StyledIcon, StyledWrapper, StyledWrapperBorder, StyledWrapperPlaceholder, StyledWrapperMsg, StyledTextArea }