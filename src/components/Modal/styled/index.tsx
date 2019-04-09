import styled from 'styled-components'
import { primaryBtnColor, yellowBtnColor } from '../../../styles/theme'

const ModalBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,.6);
  height: 100%;
  z-index: 1050;
  &.hmly-modal-center div {
    text-align: center;
  }
`;

const StyledModal = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: initial;
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;
  font-size: 14px;
  white-space: normal;
  min-width: 450px;
  max-width: 600px;
`;

const ModalHeader = styled.div`
  font-size: 18px;
  font-weight: 600;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.33;
  letter-spacing: normal;
  margin-bottom: 20px;
  color: #4a4a4a;
`;

const ModalBody = styled.div`
  font-size: 18px;
  color: #4a4a4a;
`;

interface ModalFooterProps {
  align: 'left' | 'center';
}

const ModalFooter = styled.div`
  float: ${(props: ModalFooterProps) => (props.align === 'center') ? 'none' : 'right'};
`;

const CloseBox = styled.div`
  position: absolute;
  top: 15px;
  right: 20px;
  .hmly-icon {
    font-size: 12px;
    cursor: pointer;
  }
`;

export { ModalBox, StyledModal, ModalHeader, ModalBody, ModalFooter, CloseBox }
