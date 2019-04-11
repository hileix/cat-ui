import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledTabs = styled.div``;

const TabsNavBox = styled.div`
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 20px;
`;

const TabsNav = styled.div`
  position: relative;
  display: inline-block;
  box-sizing: border-box;
  height: 100%;
  padding: 12px 0;
  text-decoration: none;
  cursor: pointer;
  transition: color .3s cubic-bezier(.645, .045, .355, 1);
  font-size: 18px;
  color: #4a4a4a;

  &.active {
    font-weight: bold;
    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      content: "";
      width: 40px;
      height: 3px;
      background-color: #ff4444;
    }
  }

  & + & {
    margin-left: 40px;
  }
`;

const TabsNavLink = styled(TabsNav)`
  padding: 0;
  & > a {
    display: inline-block;
    padding: 12px 0;
  }
`

const TabsContentBox = styled.div`
`;

const TabsContent = styled.div`
  display: none;

  &.active {
    display: block;
  }
`;

const StyledTabPanel = styled.div``

export {
  StyledTabs, TabsNavBox, TabsNav, TabsNavLink, TabsContentBox,
  TabsContent, StyledTabPanel
}

