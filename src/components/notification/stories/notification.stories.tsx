import React from 'react';
import { storiesOf } from '@storybook/react';
import { notification, Button, message } from '@components/index';
import './style.scss';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { Fragment, useState } = React;

const { Notification } = notification;

const Demo1 = () => {
  let i = 0;
  const handleClick = (type: string) => {
    notification[type]({
      title: `${type} title ${i++}`,
      content: `${type} content`,
      onClose: () => message.success
    });
  };

  return (
    <Fragment>
      <DemoWrapper title='notification 通知' desc='4 种类型'>
        <Button
          onClick={() => handleClick('default')}
          className='notification-stories__button'
        >
          default
        </Button>
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


const Demo2 = () => {
  const [defaultVisible, setDefaultVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [warnVisible, setWarnVisible] = useState(false);
  const [errorVisible, setErrorVisible] = useState(false);

  return (
    <Fragment>
      <DemoWrapper title='notification 通知' desc='4 种类型'>
        <Button
          onClick={() => setDefaultVisible(true)}
          className='notification-stories__button'
        >
          default
        </Button>
        <Button
          onClick={() => setSuccessVisible(true)}
          className='notification-stories__button'
        >
          success
        </Button>
        <Button
          onClick={() => setWarnVisible(true)}
          className='notification-stories__button'
        >
          warn
        </Button>
        <Button
          onClick={() => setErrorVisible(true)}
          className='notification-stories__button'
        >
          error
        </Button>

        <Notification visible={defaultVisible} title='default title' onClose={() => setDefaultVisible(false)}>
          default content
        </Notification>

        <Notification type='success' visible={successVisible} title='success title' onClose={() => setSuccessVisible(false)}>
          success content
        </Notification>

        <Notification type='warn' visible={warnVisible} title='success title' onClose={() => setWarnVisible(false)}>
          warn content
        </Notification>

        <Notification type='error' visible={errorVisible} title='error title' onClose={() => setErrorVisible(false)}>
          error content
        </Notification>

      </DemoWrapper>
    </Fragment>
  );
};

storiesOf('notification 通知', module)
  .add('函数式', () => <Demo1 />, {
    info: {
      text: markdown
    }
  })
  .add('JSX 式', () => <Demo2 />, {
    info: {
      text: markdown
    }
  })

