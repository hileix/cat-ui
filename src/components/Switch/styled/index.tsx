import styled,  { keyframes }  from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const duration: string = '.2s'

export const rcSwitchOn = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1.1);
  }
`;

export const rcSwitchOff = keyframes`
  0% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`;


const StyledSwitch = styled.button`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  width: 36px;
  height: 22px;
  line-height: 20px;
  padding: 0;
  vertical-align: middle;
  border-radius: 20px 20px;
  border: 1px solid #d8d8d8;
  background-color: #d8d8d8;
  cursor: pointer;
  transition: all ${duration} cubic-bezier(0.35, 0, 0.25, 1);

  .hmly-switch-inner {
    color:#fff;
    font-size: 12px;
    position: absolute;
    left: 24px;
    top: 0;
  }

  &:after {
    position: absolute;
    width: 18px;
    height: 18px;
    left: 2px;
    top: 1px;
    border-radius: 50% 50%;
    background-color: #fff;
    content: " ";
    cursor: pointer;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
    transform: scale(1);
    transition: left ${duration} cubic-bezier(0.35, 0, 0.25, 1);
    animation-timing-function: cubic-bezier(0.35, 0, 0.25, 1);
    animation-duration: ${duration};
    animation-name: ${rcSwitchOff};
  }

  &:hover:after {
    transform: scale(1.1);
    animation-name: ${rcSwitchOn};
  }

  &:focus {
    box-shadow: 0 0 0 2px tint(#2db7f5, 80%);
    outline: none;
  }

  &.hmly-switch-checked {
    border: 1px solid #333;
    background-color: #333;

    .hmly-switch-inner {
      left: 6px;
    }

    &:after{
      left: 15px;
    }
  }

  &.hmly-switch-disabled {
    cursor: no-drop;
    background: #ccc;
    border-color: #ccc;

    &:after{
      background: #9c9c9c;
      animation-name: none;
      cursor: no-drop;
    }

    &:hover:after{
      transform: scale(1);
      animation-name: none;
    }
  }

  .hmly-switch-label {
    display: inline-block;
    line-height: 20px;
    font-size: 14px;
    padding-left: 10px;
    vertical-align: middle;
    white-space: normal;
    pointer-events: none;
    user-select: text;
  }
`;

export { StyledSwitch }
  