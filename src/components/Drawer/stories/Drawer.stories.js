import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Drawer from '../index';
import '../../../styles/index.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';
import Button from '../../Button';

addDecorator(withInfo);

const Demo1 = () => {
  const [visible, setVisible] = useState(true);
  const [visible2, setVisible2] = useState(false);

  return (
    <div className='drawer-box'>
      <div className='drawer-wrapper'>
        <Drawer className='my-drawer' style={{ width: 200 }} visible={visible} onClose={() => setVisible(false)} mask={true}>
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisible(true)}>打开 Drawer</Button>
      </div>

      <div className='drawer-wrapper'>
        <Drawer style={{ width: 200 }} visible={visible2} onClose={() => setVisible2(false)} mask={true} destroyOnClose>
          <div style={{ width: 100, padding: 16 }}>
            <input />
          </div>
        </Drawer>
        <Button onClick={() => setVisible2(true)}>destroyOnClose</Button>
      </div>
    </div>
  );
};

storiesOf('Drawer 抽屉', module)
  .add('Drawer', () => <Demo1 />)
