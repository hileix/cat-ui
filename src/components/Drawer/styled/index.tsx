import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledDrawer = styled.div`
  position: fixed;
  z-index: 1000;
  visibility: visible;
  opacity: 1;
  
  .hmly-drawer__mask {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    transition: 0.3s;
  }

  .hmly-drawer__mask-appear {
    visibility: hidden;
    opacity: 0;
  }

  .hmly-drawer__mask-appear-active {
    visibility: visible;
    opacity: 1;
  }

  .hmly-drawer__mask-appear-done {
    visibility: visible;
    opacity: 1;
  }

  .hmly-drawer__mask-enter {
    visibility: hidden;
    opacity: 0;
  }
  
  .hmly-drawer__mask-enter-active {
    visibility: visible;
    opacity: 1;
  }

  .hmly-drawer__mask-enter-done {
    visibility: visible;
    opacity: 1;
  }

  .hmly-drawer__mask-exit {
    visibility: visible;
    opacity: 1;
  }
  
  .hmly-drawer__mask-exit-active {
    visibility: hidden;
    opacity: 0;
  }

  .hmly-drawer__mask-exit-done {
    visibility: hidden;
    opacity: 0;
  }

  .hmly-drawer__content {
    transform: translateZ(0);
    position: fixed;
    transition: 0.3s;
  }

  .hmly-drawer__content-appear {
    transform: translateX(100%);
  }
  .hmly-drawer__content-appear-active {
    transform: translateX(0);
    box-shadow: 0 0 30px 0 rgba(75, 76, 77, 0.5);
  }
  .hmly-drawer__content-appear-done {
    transform: translateX(0);
    box-shadow: 0 0 30px 0 rgba(75, 76, 77, 0.5);
  }


  .hmly-drawer__content-enter {
    transform: translateX(100%);
  }
  .hmly-drawer__content-enter-active {
    transform: translateX(0);
    box-shadow: 0 0 30px 0 rgba(75, 76, 77, 0.5);
  }
  .hmly-drawer__content-enter-done {
    transform: translateX(0);
    box-shadow: 0 0 30px 0 rgba(75, 76, 77, 0.5);
  }

  .hmly-drawer__content-exit {
    transform: translateX(0);
    box-shadow: 0 0 30px 0 rgba(75, 76, 77, 0.5);
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
  }
`;

export { StyledDrawer }
