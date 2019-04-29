import styled from 'styled-components'
import { keyframes } from 'styled-components'
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

const fadeIn = keyframes`
  0% {
    transform: perspective(200px) rotateX(20deg);
    opacity: 0;
  }
  50% {
    transform: perspective(200px) rotateX(10deg);
    opacity: 0.5;
  }
  100% {
    transform: perspective(200px) rotateX(0deg);
    opacity: 1;
  }
`;

const StyledPopBox = styled.div`
  position: relative;
  border-radius: 4px;
  background: #fff;
  font-size: 14px;
  transform-origin: left center;
  animation: .15s ${fadeIn} ease-in;
`

export { StyledPopover, StyledPopoverTrigger, StyledPopoverContent,
  StyledPopBox }
