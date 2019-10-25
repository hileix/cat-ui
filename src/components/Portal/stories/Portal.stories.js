import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Portal from '../index';
import '../../../styles/index.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';
import Button from '../../Button';


addDecorator(withInfo);

const Demo1 = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className='portal-box'>
      <Button onClick={() => setIsOpen(true)}>打开Portal</Button>
      <Button onClick={() => setIsOpen(false)}>关闭Portal</Button>
      <Portal
        visible={isOpen}
        onClose={() => setIsOpen(false)}>
        <div className='portal'>
          <p>对话框内容...</p>
          <p>对话框内容...</p>
          <p>对话框内容...</p>
        </div>
      </Portal>
    </div>
  )
};

storiesOf('Protal 传送门', module)
  .add('Protal', () => <Demo1 />)
