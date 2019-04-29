import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledPopover = styled.div`
  display: inline-block;
`;

const StyledPopoverTrigger = styled.div``;

const StyledPopoverContent = styled.div`
  position: relative;
  border: 1px solid #e5e5e5;
  /* padding: 10px; */
  border-radius: 4px;
  font-size: 14px;
`;

const StyledPopBox = styled.div`
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
`

export { StyledPopover, StyledPopoverTrigger, StyledPopoverContent,
  StyledPopBox }
