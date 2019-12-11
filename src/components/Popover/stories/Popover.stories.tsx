import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '../index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';
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
        <div className='pop-content'>content</div>
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
        <div style={{ height: isRenderBody ? 290 : 500, width: isRenderBody ? '100%' : '130%' }}>
          <Popover
            mode='click'
            triggerPosition={triggerPosition}
            contentPosition={contentPosition}
            className='popover-stories__button'
            selector={selector}
          >
            <Popover.Trigger>
              <Button>trigger</Button>
            </Popover.Trigger>
            <Popover.Content>{renderContent}</Popover.Content>
          </Popover>
        </div>
      </div>
      <div style={{ height: 1000, width: '110vw' }}></div>
    </div>
  );
};

storiesOf('Popover 弹层', module).add('Popover', () => <Demo />);
