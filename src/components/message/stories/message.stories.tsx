import React from 'react';
import { storiesOf } from '@storybook/react';
import message from '../index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';
import markdown from '../README.md';

const Demo = () => {
  return (
    <div className='message-box'>
      <Button
        onClick={() =>
          message.success({ content: 'success content', duration: 3 })
        }
      >
        success
      </Button>
      <Button
        onClick={() => message.warn({ content: 'warn content', duration: 1 })}
      >
        warn
      </Button>
      <Button onClick={() => message.error({ content: 'error content' })}>
        error
      </Button>
    </div>
  );
};

storiesOf('反馈/message 全局提示', module).add('message', () => <Demo />, {
  info: {
    text: markdown
  }
});
