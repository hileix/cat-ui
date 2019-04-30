import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { StyledPageItem } from '../interface'
import Icon from '../../Icon'

const StyledPagination = styled.div``;

const StyledPageItem = styled.div`
  display: inline-block;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: normal;
  color: ${(props: StyledPageItem) => props.active ? '#313646' : '#bcbcbc' };
  padding: 0 10px;
  cursor: pointer;
`

const StyledIcon = styled(Icon)`
  cursor: pointer;
  padding: 0 10px;
`

export { StyledPagination, StyledPageItem, StyledIcon }
