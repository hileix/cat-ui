import styled from 'styled-components'
import { textColor, borderColor } from '../../../styles/colors'
import { smallRadius } from '../../../styles/size'
import { TagProps } from '../Tag';

const StyledTag = styled.span`
  display: inline-block;
  border-radius: ${smallRadius};
  padding: 1px 4px;
  font-size: 12px;
  color: ${(props: TagProps) => props.textColor || textColor};
  border: 1px solid ${(props: TagProps) => props.borderColor || borderColor};
  background-color: ${(props: TagProps) => props.bgColor || '#fff'}
`;

export { StyledTag }
