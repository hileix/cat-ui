import styled from 'styled-components'
import { primaryBtnColor, yellowBtnColor } from '../../../styles/theme'

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 4px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  cursor: pointer;
  outline: 0;
  border: 1px solid transparent;
  position: relative;

  &:active {
    outline: none;
    box-shadow: none;
    text-decoration: none;
  }

  &.hmly-button-sm {
    padding: 5px 12px;
    font-size: 14px;
    font-weight: normal;
  }
  &.hmly-button-md {
    padding: 9px 24px;
    font-size: 14px;
    font-weight: 600;
  }
  &.hmly-button-lg {
    padding: 12px 36px;
    font-size: 16px;
    font-weight: bold;
  }

  &.hmly-button-primary,
  &.hmly-button-primary-up {
    background-color: ${primaryBtnColor};
    color: #ffffff;
    transition: all .15s ease;
    &:hover {
      box-shadow: 0 6px 16px 0 rgba(255, 68, 68, 0.5);
      background-color: #ff6464;
    }
  }
  &.hmly-button-yellow {
    background-color: ${yellowBtnColor};
    color: #ffffff;
  }
  &.hmly-button-white-primary {
    background-color: #ffffff;
    color: #9b9b9b;
    border: 1px solid rgba(83, 118, 130, 0.8);
  }
  &.hmly-button-white-cyan {
    background-color: #ffffff;
    color: ${primaryBtnColor};
    border: 1px solid ${primaryBtnColor};
  }
  &.hmly-button-borderless {
    color: ${primaryBtnColor};
  }

  &.hmly-button-block {
    width: 100%;
  }

  &.hmly-button-disabled {
    background-color: #eeeeee;
    color: #bcbcbc;
    cursor: not-allowed;
    border: 1px solid transparent;
    &:hover {
      background-color: #eeeeee;
      color: #bcbcbc;
      box-shadow: none;
    }
  }
`;

export { StyledButton }
