import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledMessage = styled.div``;

const StyledMessageContent = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: initial;
  background-color: #fff;
  box-shadow: 0 2px 8px 0 rgba(49, 54, 70, 0.2);
  padding: 20px 30px;
  font-size: 16px;
  font-weight: 600;
  white-space: normal;
  line-height: 24px;
  z-index: 9999;
  border-radius: 5px;
  &.theme-error {
    background-color: rgba(0, 0, 0, 0.7);
    color: #ffffff;
  }
`;

export { StyledMessage, StyledMessageContent }
