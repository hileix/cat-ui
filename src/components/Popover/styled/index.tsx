import styled, { keyframes } from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { pageTurning } from '../../../styles/animation'

const StyledPopover = styled.div`
  display: inline-block;
`;

const StyledPopoverTrigger = styled.div``;

const StyledPopoverContent = styled.div`
  position: relative;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  font-size: 14px;
`;

const StyledPopBox = styled.div`
  position: relative;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  transform-origin: left center;
  animation: .15s ${pageTurning} ease-in;
`

export { StyledPopover, StyledPopoverTrigger, StyledPopoverContent, StyledPopBox }
