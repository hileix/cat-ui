import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Dropdown from '../Dropdown';
import '../../../styles/index.scss';
import './style.scss';
import Menu from '@components/Menu';
import Button from '@components/Button';
import classNames from 'classnames';
import Icon from '@components/Icon';
import { IconType } from '@components/Icon/IconTypeEnum';
import markdown from '../README.md';

let DropdownDemo = () =>{
  let menu = (
      <Menu>
        <Menu.Header> <div style={{display: 'inline-block'}}>
            <Icon  type={IconType.camera} />
          </div>
          <span style={{display: 'inline-block', margin: '0px 10px'}}>menu header </span> </Menu.Header>
        <Menu.Item>1111</Menu.Item>
        <Menu.Item>222</Menu.Item>
        <Menu.Item>333</Menu.Item>
      </Menu>
  );

  return (
    <div id="dropDowndemo" className="dropDowndemo">
      <h3>下拉菜单</h3>
      <Dropdown mode="click" selector="#dropDowndemo" overlay={menu} position="bottomLeft" >
        <Button type="primary"> 下拉菜单 </Button>
      </Dropdown>

    </div>
  )
}

storiesOf('通用/Dropdown 组件', module)
  .add(
    '下拉菜单',
    () => (
      <DropdownDemo />
    ),
    {
      info: {
        text: markdown
      }
    }
  )
