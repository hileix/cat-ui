import styled from 'styled-components'
import { primaryCheckboxColor } from '../../../styles/theme'
import { CheckboxInnerProps, CheckboxInputProps, CheckboxSlotProps } from '../interface'

const StyledCheckboxBox = styled.div`
  position: relative;
  padding: 0;
  list-style: none;
  display: inline-block;
  line-height: 1.5;
  white-space: nowrap;
  cursor: pointer;
  box-sizing: border-box;
  margin-top: -2px;
  color: #767676;
  font-weight: 600;
  & + & {
    margin-left: 40px;
  }
`;

const StyledCheckbox = styled.span`
  position: relative;
  display: inline-block;
  margin: 0;
  padding: 0;
  list-style: none;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  line-height: 1;
  vertical-align: text-top;
`

const CheckboxInner = styled.span`
  position: relative;
  top: 0;
  left: 0;
  display: block;
  width: 16px;
  height: 16px;
  border-radius: 2px;
  transition: all 0.1s;
  box-sizing: border-box;
  background-color: #f5f5f5;
  border-color: ${(props: CheckboxInnerProps) => props.disabled ? '#979797': primaryCheckboxColor};
  border-width: 1px;
  border-style: solid;
  &::after {
    position: absolute;
    transform: rotate(45deg) scale(1);
    border-color: ${(props: CheckboxInnerProps) => props.checked ? (props.disabled ? 'rgba(0,0,0,.25)' : '#313646'): '#f5f5f5'};
    border-width: 2px;
    border-style: solid;
    border-top: 0;
    border-left: 0;
    left: 5px;
    top: 1px;
    display: table;
    width: 5px;
    height: 9px;
    content: " ";
    transition: all 0.1s cubic-bezier(.78,.14,.15,.86);
    box-sizing: border-box;
  }
`

const CheckboxInput = styled.input`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 1;
  opacity: 0;
  padding: 0;
  width: 50px;
  height: 20px;
  box-sizing: border-box;
  color: ${(props: CheckboxInputProps) => props.disabled ? 'rgba(0,0,0,.25)': ''};
  cursor: ${(props: CheckboxInputProps) => props.disabled ? 'not-allowed': 'pointer'};
`;

const CheckboxSlot = styled.span`
  display: inline-block;
  word-wrap: break-word;
  white-space: pre-wrap;
  margin-top: -2px;
  padding-left: 13px;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;
  box-sizing: border-box;
  vertical-align: text-top;
  color: ${(props: CheckboxSlotProps) => props.disabled ? 'rgba(0,0,0,.25)': ''};
  cursor: ${(props: CheckboxSlotProps) => props.disabled ? 'not-allowed': 'pointer'};
`
const StyledCheckboxGroup = styled.div``

export { StyledCheckboxBox, StyledCheckbox, CheckboxInput, CheckboxInner, CheckboxSlot, StyledCheckboxGroup }
