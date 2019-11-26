import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { notification, Button } from '@components/index';
import './style.scss';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { Fragment, useState } = React;

let i = 0;
const Demo = () => {
  const handleClick = (type: string) => {
    notification[type]({
      title: `${type} title ${i++}`,
      content: `${type} content`
    });
  };

  return (
    <Fragment>
      <DemoWrapper title='类型' desc='三种类型'>
        <Button
          onClick={() => handleClick('success')}
          className='notification-stories__button'
        >
          success
        </Button>
        <Button
          onClick={() => handleClick('warn')}
          className='notification-stories__button'
        >
          warn
        </Button>
        <Button
          onClick={() => handleClick('error')}
          className='notification-stories__button'
        >
          error
        </Button>
      </DemoWrapper>
    </Fragment>
  );
};

storiesOf('notification 通知', module).add('notification', () => <Demo />, {
  info: {
    text: markdown
  }
});
