import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledPopover = styled.div`
  color: red;
`;

const StyledPopoverTrigger = styled.div``;

const StyledPopoverContent = styled.div`
  position: relative;
  border: 1px solid #e5e5e5;
  padding: 10px;
  border-radius: 4px;
  background: rebeccapurple;
  font-size: 14px;
  color: red;
`;

const StyledPopBox = styled.div`
  border: 1px solid #e5e5e5;
  padding: 10px;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
`

export { StyledPopover, StyledPopoverTrigger, StyledPopoverContent,
  StyledPopBox }
