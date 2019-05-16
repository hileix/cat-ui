import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { StyledOptionBoxProps } from '../interface'

const StyledSelect = styled.div`
  position: relative;
  width: 100%;
  min-width: 50px;
  padding: 14px 30px 14px 14px;
  line-height: 18px;
  border-radius: 2px;
  border: solid 1px #e2e2e2;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #313646;
  box-sizing: border-box;
  &::after {
    position: absolute;
    top: 17px;
    right: 14px;
    content: " ";
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid #313646;
  }
  &.hmly-select-open::after {
    transform: rotate(180deg);
  }
  &.hmly-select-placeholder {
    color: #bcbcbc;
  }
`;

const StyledOptionBox = styled.div`
  width: ${(props: StyledOptionBoxProps) => props.width};
`

const StyledOption = styled.div`
  width: 100%;
  padding: 8px 19px;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #313646;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #eee;
  }
  &.hmly-option-disable {
    cursor: not-allowed;
    color: #ccc;
  }
`

export { StyledSelect, StyledOption, StyledOptionBox }
