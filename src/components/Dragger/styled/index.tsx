import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledDragger = styled.div`
  padding: 10px 0;
`;

const StyledDraggerItem = styled.div`
  cursor: move;
  &.hmly-dragger-item-dragging {
    box-shadow: 0 2px 8px 0 rgba(74, 74, 74, 0.3);
  }
`

export { StyledDragger, StyledDraggerItem }
