import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { StyledTooltipContentProps } from '../interface'

const StyledTooltip = styled.div``;

const StyledTooltipContent = styled.div`
  position: relative;
  padding: 5px;
  background-color: #eee;
  max-width: 500px;
  word-wrap:break-word;
  box-sizing: border-box;
  &.hmly-tooltip-topCenter::after {
    position: absolute;
    top: ${(props: StyledTooltipContentProps) => props.top + 'px'};
    left: ${(props: StyledTooltipContentProps) => props.left + 'px'};
    content: " ";
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 10px solid #eee;
  }
`;

export { StyledTooltip, StyledTooltipContent }
