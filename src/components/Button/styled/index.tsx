import styled from 'styled-components'
import { primaryBtnColor, yellowBtnColor } from '../../../styles/theme'

const StyledButton = styled.button`
  display: inline-block;
  border-radius: 2px;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 0.2px;
  cursor: pointer;
  outline: 0;
  border: 1px solid transparent;

  &:active {
    outline: none;
    box-shadow: none;
    text-decoration: none;
  }

  &.hmly-button-primary {
    background-color: ${primaryBtnColor};
    color: #ffffff;
  }

  &.hmly-button-sm {
    padding: 6px 20px;
  }
  &.hmly-button-md {
    padding: 10px 25px;
  }
  &.hmly-button-lg {
    padding: 14px 29px;
    font-size: 16px;
    font-weight: bold;
  }

  &.hmly-button-primary {
    background-color: ${primaryBtnColor};
    color: #ffffff;
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

  &.hmly-button-block {
    width: 100%;
  }

  &.hmly-button-disabled {
    background-color: #a6a6a6;
    color: #ffffff;
    cursor: not-allowed;
    border: 1px solid transparent;
  }
`;

export { StyledButton }
