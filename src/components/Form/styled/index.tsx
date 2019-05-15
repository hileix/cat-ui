import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { LabelBoxProps, ControlBoxProps } from '../interface'

const StyledForm = styled.form``;

const StyledFormItem = styled.div`
  & + & {
    margin-top: 30px;
  }
`;

const LabelBox = styled.div`
  display: inline-block;
  width: ${(props: LabelBoxProps) => props.width};
`;

const ControlBox = styled.div`
  display: inline-block;
`;

const FormItemLabel = styled.label``;

const FormItemDesc = styled.div`
  opacity: 0.7;
  font-size: 12px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #313646;
`;

const FormItemControl = styled.div``;

export { StyledForm, StyledFormItem, FormItemLabel, FormItemControl,
  FormItemDesc, LabelBox, ControlBox }
