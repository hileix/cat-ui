import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'
import { pageTurning } from '../../../styles/animation'
import { InlineSubMenuProps, PopSubMenuBoxProps } from '../interface'

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
  white-space:nowrap;
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
    top: calc(50% - 8px);
    right: 25px;
    height: 10px;
    width: 10px;
    content: " ";
    border-right: 2px solid #9B9B9B;
    border-top: 2px solid #9B9B9B;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    display: inline-block;
    transform: rotate(135deg);
    box-sizing: border-box;
  }
  &.hmly-submenu-title-pop::after,
  &.hmly-submenu-title-replace::after {
    position: absolute;
    top: calc(50% - 5px);
    right: 10px;
    height: 10px;
    width: 10px;
    content: " ";
    border-right: 2px solid #9B9B9B;
    border-top: 2px solid #9B9B9B;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    display: inline-block;
    transform: rotate(45deg);
    box-sizing: border-box;
  }
  &.hmly-submenu-title-inline.hmly-submenu-title-expand::after {
    transform: rotate(-45deg);
  }
`;

const InlineSubMenu = styled(StyledMenu)`
  height: ${(props: InlineSubMenuProps) => props.height};
  overflow: hidden;
  padding-left: 20px;
`;

const PopSubMenuBox = styled.div`
  position: absolute;
  top: 0;
  right: ${(props: PopSubMenuBoxProps) => props.right};
  z-index: 999;
  width: ${(props: PopSubMenuBoxProps) => props.width};
  border: 1px solid #eee;
  box-sizing: border-box;
  transform-origin: left center;
  animation: .15s ${pageTurning} ease-in;
`

const PopSubMenu = styled.ul`
  list-style: none;
  padding: 0;
  background-color: #fff;
  box-sizing: border-box;
`

const BackToMenu = styled.div`
  color: #4a4a4a;
  width: 100%;
  height: 40px;
  padding: 0 22px 0 45px;
  line-height: 40px;
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  position: relative;
  cursor: pointer;
  &::after {
    position: absolute;
    top: calc(50% - 5px);
    left: 25px;
    height: 10px;
    width: 10px;
    content: " ";
    border-right: 2px solid #9B9B9B;
    border-top: 2px solid #9B9B9B;
    border-left: 2px solid transparent;
    border-bottom: 2px solid transparent;
    display: inline-block;
    transform: rotate(225deg);
    box-sizing: border-box;
  }
`

const StyledAnimateHeight = styled.div``;

export { StyledMenu, StyledMenuItem, StyledSubMenu, SubMenuTitle,
  InlineSubMenu, PopSubMenu, PopSubMenuBox, StyledAnimateHeight,
  BackToMenu }
