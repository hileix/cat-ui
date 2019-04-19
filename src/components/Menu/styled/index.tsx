import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledMenu = styled.ul`
  list-style: none;
  padding: 0;
`;

const StyledMenuItem = styled.li`
  color: #4a4a4a;
  width: 100%;
  height: 40px;
  padding: 0 22px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  &:hover {
    background-color: #f3f3f3;
    color: #4a4a4a;
    font-weight: 600;
  }
  &.hmly-menu-item-checked {
    font-weight: bold;
    color: #3a3a3a;
  }
`;

const StyledSubMenu = styled.li`
  height: auto;
`;

const InlineTitle = styled.div`
  color: #4a4a4a;
  width: 100%;
  height: 40px;
  padding: 0 22px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  text-align: left;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
`;

const InlineMenu = styled(StyledMenu)`
  /* height: auto; */
  height: 0px;
  overflow: hidden;
`;

const StyledAnimateHeight = styled.div``;

export { StyledMenu, StyledMenuItem, StyledSubMenu, InlineTitle, InlineMenu, StyledAnimateHeight }
