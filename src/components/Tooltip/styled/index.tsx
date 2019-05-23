import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { StyledTooltipContentProps } from '../interface'

const StyledTooltip = styled.div``;

const StyledTooltipContent = styled.div`
  position: relative;
  padding: 9px 12px;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(1px);
  box-shadow: 0 2px 5px 0
  border-radius: 3px;
  max-width: ${(props: StyledTooltipContentProps) => props.width + 'px'};
  word-wrap:break-word;
  box-sizing: border-box;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  font-stretch: normal;
  line-height: 1.5;
  letter-spacing: normal;
  color: rgba(255, 255, 255, 0.9);
  &.hmly-tooltip-topCenter::after {
    position: absolute;
    bottom: -10px;
    left: ${(props: StyledTooltipContentProps) => props.left + 'px'};
    content: " ";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid rgba(0, 0, 0, 0.7);
  }
`;

export { StyledTooltip, StyledTooltipContent }
