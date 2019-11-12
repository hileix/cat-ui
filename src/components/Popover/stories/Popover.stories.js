import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Popover from '../index';
import '../../../styles/index.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';
import Menu from '../../Menu';
import Input from '../../Input';
import Button from '../../Button';
import Icon from '../../Icon';


addDecorator(withInfo);

const Demo1 = () => {
  const [visible1, setVisible1] = useState(false)
  const onVisibleChange2 = () => {
    const { visible1 } = state
    setState({ visible1: !visible1 })
  }

  const showPopover1 = () => {
    console.log('showPopover1')
  }

  const showPopover2 = () => {
    setVisible1(true);
  }

  const closePopover2 = () => {
    setVisible1(false)
  }

  const onItem1Click = () => {
    console.log('onItem1Click')
  }

  const onDeleteClick = () => {
    console.log('onDeleteClick')
  }
  return (
    <div className='popover-box'>
      <h3>mode='click'的Popover</h3>
      <Popover mode='click'>
        <Popover.Trigger>
          <Button onClick={showPopover1}>点击打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>

      <h3>mode='hover'的Popover</h3>
      <Popover mode='hover'>
        <Popover.Trigger>
          <Button onClick={showPopover1}>hover打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>

      <h3>外部visible的Popover</h3>
      <Popover
        visible={visible1}
        onVisibleChange={onVisibleChange2}>
        <Popover.Trigger>
          <Button onClick={showPopover2}>点击打开</Button>
          <Button onClick={closePopover2}>点击关闭</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>

      <h3>mode='click'的Menu Popover</h3>
      <Popover mode='click'>
        <Popover.Trigger>
          <Button onClick={showPopover1}>点击打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content-menu'>
            <Menu mode='pop' className='menu1'>
              <Menu.Item onClick={onItem1Click}>Edit</Menu.Item>
              <Menu.Item onClick={onItem1Click}>Share</Menu.Item>
              <Menu.Item onClick={onItem1Click}>Download</Menu.Item>
              <Menu.Item onClick={onItem1Click}>Delete</Menu.Item>
            </Menu>
          </div>
        </Popover.Content>
      </Popover>

      <h3>mode='hover'的Menu Popover</h3>
      <Popover mode='hover'>
        <Popover.Trigger>
          <Button onClick={showPopover1}>hover打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content-menu'>
            <Menu
              mode='pop'
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
        </Popover.Content>
      </Popover>

      <h3>省略号Icon的Menu Popover</h3>
      <Popover mode='click' position='bottomRight'>
        <Popover.Trigger>
          <Icon type='more' style={{ cursor: 'pointer' }} />
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content-menu'>
            <Menu mode='pop' className='menu2'>
              <Menu.Item>
                <Icon type='edit' style={{ marginRight: '10px' }} />Edit
              </Menu.Item>
              <Menu.Item>
                <Icon type='share1' style={{ marginRight: '10px' }} />Share
              </Menu.Item>
              <Menu.Item>
                <Icon type='download' style={{ marginRight: '10px' }} />Download
              </Menu.Item>
              <Menu.Item fixed onClick={onDeleteClick}>
                <Icon type='delete' style={{ marginRight: '10px' }} />Delete
                <Input />
              </Menu.Item>
            </Menu>
          </div>
        </Popover.Content>
      </Popover>

      <h3>position='bottomCenter'的Popover</h3>
      <Popover mode='click' position='bottomCenter'>
        <Popover.Trigger>
          <Button>点击打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>

      <h3>position='bottomRight'的Popover</h3>
      <Popover mode='click' position='bottomCenter'>
        <Popover.Trigger>
          <Button>点击打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>
    </div>
  )
};

storiesOf('Popover 弹层', module)
  .add('Popover', () => <Demo1 />)
