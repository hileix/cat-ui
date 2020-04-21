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
import { useState, useCallback } from 'react';

let DropdownDemo = () =>{
  let [show, setShow] = useState(false);
  let [menuKey, setMenuKey] = useState(undefined);
  let onChange =(key: any)=> {
    if(key && typeof key !== 'boolean') {
      setMenuKey(key);
    }
    setShow(!show);
  }
  let menu = (
      <Menu>
        <Menu.Header> <div style={{display: 'inline-block'}}>
            <Icon  type={IconType.camera} />
          </div>
          <span style={{display: 'inline-block', margin: '0px 10px'}}>menu header </span> </Menu.Header>
        <Menu.Item key="1">1111</Menu.Item>
        <Menu.Item key="2">222</Menu.Item>
        <Menu.Item key="3">333</Menu.Item>
      </Menu>
  );

  return (
    <div id="dropDowndemo" className="dropDowndemo">
      <h3>下拉菜单</h3>
      <Dropdown visible={show} onVisibleChange={onChange} mode="click" selector="#dropDowndemo" overlay={menu} position="bottomLeft" >
        <Button type="primary"> 下拉菜单 </Button>
      </Dropdown>

      <div style={{marginTop: 20, marginLeft: 200}}>
        当前选择的菜单项: {menuKey}
      </div>

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
