import styled from 'styled-components'
import { colorPrimary } from '../../../styles/theme'

const StyledLabel = styled.label`
  display: inline-block;
`
const StyledInput = styled.input`
  display: inline-block;
  width: 100%;
  font-size: 16px;
  font-weight: 600;
  color: ${colorPrimary}
`

export { StyledLabel, StyledInput }