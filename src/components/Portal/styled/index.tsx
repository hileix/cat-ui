import styled from 'styled-components'
import { PortalContentProps } from '../interface'

const StyledPortalContent = styled.div`
  display: ${(props: PortalContentProps) => props.visible ? 'block': 'none'};
`;

export { StyledPortalContent }
