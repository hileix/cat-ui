import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Message from '../index';
import '../../../styles/message.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';
import Button from '../../Button';

addDecorator(withInfo);

const Demo1 = () => {
  const onClick1 = () => {
    Message.success('Example:success:text', 1000)
  }

  const onClick2 = () => {
    Message.error('Example:error:text', 2000, () => {
      console.log('Example:error:cb()')
    })
  }

  const onClick4 = () => {
    Message.warn('Example:warn:text')
  }

  return (
    <div className='message-box'>
      <Button onClick={onClick1} theme='white-primary'>
        Message.success
      </Button>
      <Button onClick={onClick4} theme='yellow'>
        Message.warn
      </Button>
      <Button onClick={onClick2}>
        Message.error
      </Button>
    </div>
  )
};

storiesOf('Message 全局提示', module)
  .add('Message', () => <Demo1 />)
