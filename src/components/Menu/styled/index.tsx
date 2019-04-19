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
  position: relative;
`;

const SubMenuTitle = styled.div`
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
  &.hmly-submenu-title-inline::after {
    position: absolute;
    top: calc(50% - 10px);
    right: 25px;
    height: 10px;
    width: 10px;
    content: "";
    border-right: 2px solid #9B9B9B;
    border-top: 2px solid #9B9B9B;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    display: inline-block;
    transform: rotate(135deg);
  }
  &.hmly-submenu-title-pop::after,
  &.hmly-submenu-title-replace::after {
    position: absolute;
    top: calc(50% - 5px);
    right: 10px;
    height: 10px;
    width: 10px;
    content: "";
    border-right: 2px solid #9B9B9B;
    border-top: 2px solid #9B9B9B;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    display: inline-block;
    transform: rotate(45deg);
  }
`;

const InlineSubMenu = styled(StyledMenu)`
  /* height: auto; */
  height: 0px;
  overflow: hidden;
`;

const PopSubMenuBox = styled.div`
  position: absolute;
  top: 0;
  right: -200px;
  z-index: 999;
  width: 200px;
  border: 1px solid #eee;
`

const PopSubMenu = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
`

const StyledAnimateHeight = styled.div``;

export { StyledMenu, StyledMenuItem, StyledSubMenu, SubMenuTitle,
  InlineSubMenu, PopSubMenu, PopSubMenuBox, StyledAnimateHeight }
