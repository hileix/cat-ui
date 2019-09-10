import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledDrawer = styled.div`
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  transition: 0.3s;
  visibility: visible;
  opacity: 1;
  
  &.hmly-drawer--hide {
    visibility: hidden;
    opacity: 0;
  }
  .hmly-drawer__mask {
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
    transition: 0.3s;
  }
  .hmly-drawer__mask--show {
    visibility: visible;
    opacity: 1;
  }
  .hmly-drawer__mask--hide {
    visibility: hidden;
    opacity: 0;
  }
  .hmly-drawer__content {
    transform: translateZ(0);
    position: fixed;
    box-shadow: 0 0 30px 0 rgba(75, 76, 77, 0.5);
  }
  .hmly-drawer__content-appear {
    transform: translateX(100%);
  }
  .hmly-drawer__content-appear-active {
    transform: translateX(0);
  }
  .hmly-drawer__content-appear-done {
    transform: translateX(0);
  }


  .hmly-drawer__content-enter {
    transform: translateX(100%);
  }
  .hmly-drawer__content-enter-active {
    transform: translateX(0);
  }
  .hmly-drawer__content-enter-done {
    transform: translateX(0);
  }

  .hmly-drawer__content-exit {
    transform: translateX(0);
  }
  .hmly-drawer__content-exit-active {
    transform: translateX(100%);
  }
  .hmly-drawer__content-exit-done {
    transform: translateX(100%);
  }

  

  .hmly-drawer__content--right {
    right: 0;
    top: 0;
    bottom: 0;
    background: #fff;
    transition: 0.3s;
  }
`;

export { StyledDrawer }
