import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledTooltip = styled.div``;

const StyledTooltipContent = styled.div`
  position: relative;
  padding: 5px;
  background-color: #eee;
  &.hmly-tooltip-topCenter::after {
    position: absolute;
    top: 30px;
    left: calc(50% - 6px);
    content: " ";
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 10px solid #eee;
  }
`;

export { StyledTooltip, StyledTooltipContent }
