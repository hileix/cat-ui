import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Menu from '../index';
import '../../../styles/index.scss';
import './style.scss';
import Icon from '../../Icon';
import Avatar from '@components/Avatar';
import MenuHeader from '../MenuHeader';


const Demo1 = () => {

  const [activeKey4, setActiveKey4] = useState('income')
  const [activeKey5, setActiveKey5] = useState('setting')
  const [activeKey6, setActiveKey6] = useState('dashboard')
  const [activeKey7, setActiveKey7] = useState('setting')


  const onItem1Click = (e: any) => {
    console.log('Example:onItem1Click', e)
  }

  const onMenu4Change = (key: any) => {
    setActiveKey4(key);
  }

  const onMenu5Change = (key: any) => {
    setActiveKey5(key);
  }

  const onMenu6Change = (key: any) => {
    setActiveKey6(key);
  }

  const onMenu7Change = (key: any) => {
    setActiveKey7(key);
  }

  return (
    <div className='menu-box'>
      <div className='menu-unit'>
        <h3>基础的Menu</h3>
        <Menu mode='pop' className='menu1'>
          <Menu.Item onClick={onItem1Click}>Edit</Menu.Item>
          <Menu.Item onClick={onItem1Click}>Share</Menu.Item>
          <Menu.Item onClick={onItem1Click}>Download</Menu.Item>
          <Menu.Item onClick={onItem1Click}>Delete</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>带Icon的Menu</h3>
        <Menu mode='pop' className='menu2'>
          <Menu.Item><Icon type='edit' />Edit</Menu.Item>
          <Menu.Item><Icon type='share1' />Share</Menu.Item>
          <Menu.Item disabled onClick={onItem1Click}><Icon type='download' />Download</Menu.Item>
          <Menu.Item><Icon type='delete' />Delete</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>自定义Item样式的Menu</h3>
        <Menu className='menu3'>
          <Menu.Item className='item3'>Claim Your Podcast</Menu.Item>
          <Menu.Item className='item3'>Discover</Menu.Item>
          <Menu.Item className='item3'>Sign Up</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>activeKey的Menu</h3>
        <Menu
          mode='inline'
          activeKey={activeKey4}
          onChange={onMenu4Change}
          className='menu4'>
          <Menu.Item key='dashboard' className='item4'>Dashboard</Menu.Item>
          <Menu.Item key='income' className='item4'>Income Center</Menu.Item>
          <Menu.Item key='episodes' className='item4'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item4'>Show Settings</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>mode=inline的Menu</h3>
        <Menu
          mode='inline'
          activeKey={activeKey5}
          onChange={onMenu5Change}
          className='menu5'>
          <Menu.Item key='dashboard' className='item5'>Dashboard</Menu.Item>
          <Menu.SubMenu
            key='SubMenu'
            title={<span>Income Center</span>}>
            <Menu.Item key='income1' className='item5'>Income 1</Menu.Item>
            <Menu.Item key='income2' className='item5'>Income 2</Menu.Item>
            <Menu.SubMenu
              title={<span>Center</span>}>
              <Menu.Item key='center1' className='item6'>Center 1</Menu.Item>
              <Menu.Item key='center2' className='item6'>Center 2</Menu.Item>
              <Menu.Item key='center3' className='item6'>Center 3</Menu.Item>
              <Menu.Item key='center4' className='item6'>Center 4</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key='income3' className='item6'>Income 3</Menu.Item>
            <Menu.Item key='income4' className='item6'>Income 4</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key='episodes' className='item5'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item5'>Show Settings</Menu.Item>
          <Menu.Item key='analytics' className='item5'>Analytics</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>mode=pop的Menu</h3>
        <Menu
          mode='pop'
          activeKey={activeKey6}
          onChange={onMenu6Change}
          className='menu6'>
          <Menu.Item key='dashboard' className='item6'>Dashboard</Menu.Item>
          <Menu.SubMenu
            title={<span>Income Center</span>}>
            <Menu.Item key='income1' className='item6'>Income 1</Menu.Item>
            <Menu.Item key='income2' className='item6'>Income 2</Menu.Item>
            <Menu.SubMenu
              title={<span>Center</span>}>
              <Menu.Item key='center1' className='item6'>Center 1</Menu.Item>
              <Menu.Item key='center2' className='item6'>Center 2</Menu.Item>
              <Menu.Item key='center3' className='item6'>Center 3</Menu.Item>
              <Menu.Item key='center4' className='item6'>Center 4</Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key='income3' className='item6'>Income 3</Menu.Item>
            <Menu.Item key='income4' className='item6'>Income 4</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key='episodes' className='item6'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item6'>Show Settings</Menu.Item>
          <Menu.Item key='analytics' className='item6'>Analytics</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>mode=replace的Menu</h3>
        <Menu
          mode='replace'
          activeKey={activeKey7}
          onChange={onMenu7Change}
          className='menu7'>
          <Menu.Item key='dashboard' className='item7'>Dashboard</Menu.Item>
          <Menu.SubMenu
            backHeader='Shows'
            title={<span>Income Center</span>}>
            <Menu.Item key='income1' className='item7'>Income 1</Menu.Item>
            <Menu.Item key='income2' className='item7'>Income 2</Menu.Item>
            <Menu.SubMenu
              backHeader='Incomes'
              title={<span>Center</span>}>
              <Menu.Item key='center1' className='item7'>Center 1</Menu.Item>
              <Menu.Item key='center2' className='item7'>Center 2</Menu.Item>
            </Menu.SubMenu>
          </Menu.SubMenu>
          <Menu.Item key='episodes' className='item7'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item7'>Show Settings</Menu.Item>
          <Menu.Item key='analytics' className='item7'>Analytics</Menu.Item>
        </Menu>
      </div>
    </div>
  )
};


let DemoHeader = ()=>{
  let onItem1Click =(v: any) =>{
    console.log(v);
  }

  return (<div className='menu-box'>
  <div className='menu-unit'>
    <h3>带Header的Menu</h3>
    <Menu mode='pop' className='menu1'>
      <MenuHeader > <div>
        <Avatar
              src='https://imagev2.xmcdn.com/group47/M0A/9C/59/wKgKk1tYNLzyfxrAAAIVC-YGMlU958.jpg!strip=1&quality=7&magick=webp&op_type=5&upload_type=cover&name=web_large&device_type=ios'
              size="medium"
            />
      </div> </MenuHeader>
      <Menu.Item onClick={onItem1Click}>Edit</Menu.Item>
      <Menu.Item onClick={onItem1Click}>Share</Menu.Item>
      <Menu.Item onClick={onItem1Click}>Download</Menu.Item>
      <Menu.Item onClick={onItem1Click}>Delete</Menu.Item>
    </Menu>
  </div>

</div>)
}

storiesOf('通用/Menu 菜单', module)
  .add('Menu', () => <Demo1 />)
  .add('MenuHeader', () => <DemoHeader />)
