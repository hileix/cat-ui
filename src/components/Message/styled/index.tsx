import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledMessage = styled.div``;

const StyledMessageContent = styled.div`
  max-width: 300px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  background-color: #fff;
  padding: 8px 20px;
  font-size: 16px;
  line-height: 24px;
  z-index: 9999;
  border-radius: 0 0 4px 4px;
  color: #fff;


  .hmly-message__icon {
    color: #fff;
  }

  .hmly-message__text {
    margin-left: 12px;
  }
  
  &.hmly-message--success {
    box-shadow: 0 2px 8px 0 rgba(0, 153, 255, 0.3);
    background-color: #0099ff;
  }

  &.hmly-message--warn {
    box-shadow: 0 2px 8px 0 rgba(255, 102, 51, 0.3);
    background-color: #ff6633;
  }
  &.hmly-message--error {
    box-shadow: 0 2px 8px 0 rgba(255, 108, 108, 0.3);
    background-color: #ff6c6c;
  }
  
`;

export { StyledMessage, StyledMessageContent }
