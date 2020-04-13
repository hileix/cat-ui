import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Popover from '../index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';
import { CSSTransition } from 'react-transition-group';
import { PositionType } from '../interface';
import markdown from '../README.md';

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

  const [mode, setMode] = useState<Array<'click' | 'hover'>>(['click']);

  const [triggerPosition, setTriggerPosition] = useState<PositionType>([
    'left',
    'bottom'
  ]);

  const [contentPosition, setContentPosition] = useState<PositionType>([
    'left',
    'top'
  ]);

  const renderContent = (visible: boolean) => {
    console.log('render content:', visible);
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
    setTriggerPosition([value, triggerPosition[1]] as PositionType);
  };

  const triggerPositionChangeV = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setTriggerPosition([triggerPosition[0], value] as PositionType);
  };

  const contentPositionChangeH = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setContentPosition([value, contentPosition[1]] as PositionType);
  };

  const contentPositionChangeV = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setContentPosition([contentPosition[0], value] as PositionType);
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

      <div style={{ marginTop: 16 }}>
        mode:
        <label>
          <input
            type='checkbox'
            checked={mode.includes('click')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const checked = e.target.checked;
              if (checked) {
                setMode(mode.concat('click'));
              } else {
                const index = mode.findIndex(mode => mode === 'click');
                const newMode = [...mode];
                newMode.splice(index, 1);
                setMode(newMode);
              }
            }}
          />
          click
        </label>
        <label>
          <input
            type='checkbox'
            checked={mode.includes('hover')}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const checked = e.target.checked;
              if (checked) {
                setMode(mode.concat('hover'));
              } else {
                const index = mode.findIndex(mode => mode === 'hover');
                const newMode = [...mode];
                newMode.splice(index, 1);
                setMode(newMode);
              }
            }}
          />
          hover
        </label>
      </div>

      <div className='popover-stories__popover-wrapper'>
        <div
          style={{
            height: isRenderBody ? 290 : 500,
            width: isRenderBody ? '100%' : '130%'
          }}
        >
          <Popover
            mode={mode}
            triggerPosition={triggerPosition}
            contentPosition={contentPosition}
            selector={selector}
            onChange={(visible: boolean) => console.log('111:', visible)}
          >
            <Popover.Trigger>
              <Button className='popover-stories__button'>trigger</Button>
            </Popover.Trigger>
            <Popover.Content>{renderContent}</Popover.Content>
          </Popover>
        </div>
      </div>
      <div style={{ height: 1000, width: '110vw' }}></div>
    </div>
  );
};

storiesOf('工具/Popover 弹层', module).add('Popover', () => <Demo />, {
  info: {
    text: markdown
  }
});
