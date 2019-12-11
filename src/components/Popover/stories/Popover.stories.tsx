import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '../index';
import '../../../styles/index.scss';
import './style.scss';
import Menu from '../../Menu';
import Input from '../../Input';
import Button from '../../Button';
import Icon from '../../Icon';
import { CSSTransition } from 'react-transition-group';
import { Position } from '../utils';

const horizontalOptions = [
  {
    label: 'left',
    value: 'left'
  },
  {
    label: 'center',
    value: 'center'
  },
  {
    label: 'right',
    value: 'right'
  }
];

const verticalOptions = [
  {
    label: 'top',
    value: 'top'
  },
  {
    label: 'center',
    value: 'center'
  },
  {
    label: 'bottom',
    value: 'bottom'
  }
];

const Demo = () => {
  const [selector, setSelector] = useState('body');

  const [isRenderBody, setIsRenderBody] = useState(true);

  const [triggerPosition, setTriggerPosition] = useState<Position>([
    'left',
    'bottom'
  ]);

  const [contentPosition, setContentPosition] = useState<Position>([
    'left',
    'top'
  ]);

  const renderContent = (visible: boolean) => {
    return (
      <CSSTransition
        timeout={150}
        in={visible}
        classNames='pop-content'
        unmountOnExit
        mountOnEnter
        appear
      >
        <div className='pop-content'>popover</div>
      </CSSTransition>
    );
  };

  const triggerPositionChangeH = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTriggerPosition([value, triggerPosition[1]] as Position);
  };

  const triggerPositionChangeV = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTriggerPosition([triggerPosition[0], value] as Position);
  };

  const contentPositionChangeH = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setContentPosition([value, contentPosition[1]] as Position);
  };

  const contentPositionChangeV = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setContentPosition([contentPosition[0], value] as Position);
  };

  return (
    <div className='popover-box'>
      <h2>选项：</h2>
      <div>
        triggerPosition = [
        {
          <select
            className='popover-stories__select'
            onChange={triggerPositionChangeH}
            value={triggerPosition[0]}
          >
            {horizontalOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        }
        ,
        {
          <select
            className='popover-stories__select'
            onChange={triggerPositionChangeV}
            value={triggerPosition[1]}
          >
            {verticalOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        }
        ]
      </div>
      <div style={{ marginTop: 16 }}>
        contentPosition = [
        {
          <select
            className='popover-stories__select'
            onChange={contentPositionChangeH}
            value={contentPosition[0]}
          >
            {horizontalOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        }
        ,
        {
          <select
            className='popover-stories__select'
            onChange={contentPositionChangeV}
            value={contentPosition[1]}
          >
            {verticalOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
        }
        ]
      </div>

      <div style={{ marginTop: 16 }}>
        内容是否渲染在 body 中？
        <input
          type='checkbox'
          checked={isRenderBody}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setIsRenderBody(e.target.checked);
            setSelector('.popover-stories__popover-wrapper');
          }}
        />
      </div>

      <div className='popover-stories__popover-wrapper'>
        <div style={{ height: isRenderBody ? 290 : 390 }}>
          <Popover
            mode='click'
            triggerPosition={triggerPosition}
            contentPosition={contentPosition}
            className='popover-stories__button'
            selector={selector}
          >
            <Popover.Trigger>
              <Button>点击打开</Button>
            </Popover.Trigger>
            <Popover.Content>{renderContent}</Popover.Content>
          </Popover>
        </div>
      </div>

      {/* <h3>mode='hover'的Popover</h3>
      <Popover mode='hover'>
        <Popover.Trigger>
          <Button onClick={showPopover1}>hover打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>
              通用的触发式弹层组件,
              可以自定义定位算法、触发方式以及弹层显示方式。
            </p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>

      <h3>外部visible的Popover</h3>
      <Popover visible={visible1} onVisibleChange={onVisibleChange2}>
        <Popover.Trigger>
          <Button onClick={showPopover2}>点击打开</Button>
          <Button onClick={closePopover2}>点击关闭</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>
              通用的触发式弹层组件,
              可以自定义定位算法、触发方式以及弹层显示方式。
            </p>
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
            <Menu mode='pop' className='menu6'>
              <Menu.Item key='dashboard' className='item6'>
                Dashboard
              </Menu.Item>
              <Menu.SubMenu title={<span>Income Center</span>}>
                <Menu.Item key='income1' className='item6'>
                  Income 1
                </Menu.Item>
                <Menu.Item key='income2' className='item6'>
                  Income 2
                </Menu.Item>
                <Menu.SubMenu title={<span>Center</span>}>
                  <Menu.Item key='center1' className='item6'>
                    Center 1
                  </Menu.Item>
                  <Menu.Item key='center2' className='item6'>
                    Center 2
                  </Menu.Item>
                  <Menu.Item key='center3' className='item6'>
                    Center 3
                  </Menu.Item>
                  <Menu.Item key='center4' className='item6'>
                    Center 4
                  </Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key='income3' className='item6'>
                  Income 3
                </Menu.Item>
                <Menu.Item key='income4' className='item6'>
                  Income 4
                </Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key='episodes' className='item6'>
                Episodes
              </Menu.Item>
              <Menu.Item key='setting' className='item6'>
                Show Settings
              </Menu.Item>
              <Menu.Item key='analytics' className='item6'>
                Analytics
              </Menu.Item>
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
                <Icon type='edit' style={{ marginRight: '10px' }} />
                Edit
              </Menu.Item>
              <Menu.Item>
                <Icon type='share1' style={{ marginRight: '10px' }} />
                Share
              </Menu.Item>
              <Menu.Item>
                <Icon type='download' style={{ marginRight: '10px' }} />
                Download
              </Menu.Item>
              <Menu.Item fixed onClick={onDeleteClick}>
                <Icon type='delete' style={{ marginRight: '10px' }} />
                Delete
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
            <p>
              通用的触发式弹层组件,
              可以自定义定位算法、触发方式以及弹层显示方式。
            </p>
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
            <p>
              通用的触发式弹层组件,
              可以自定义定位算法、触发方式以及弹层显示方式。
            </p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover> */}
    </div>
  );
};

storiesOf('Popover 弹层', module).add('Popover', () => <Demo />);
