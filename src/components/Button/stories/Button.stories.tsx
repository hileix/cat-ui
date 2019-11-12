import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../../index';
import './style.scss';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { Fragment } = React;

const Demo = () => {
  const handleClick = e => {
    console.log('clicked', e);
  };

  return (
    <Fragment>
      <DemoWrapper title='类型' desc='三种类型'>
        <Button type='default' className='button-stories__button'>
          default
        </Button>
        <Button type='primary' className='button-stories__button'>
          primary
        </Button>
        <Button type='link' className='button-stories__button'>
          link
        </Button>
      </DemoWrapper>
      <DemoWrapper title='尺寸' desc='三种尺寸'>
        <Button type='primary' size='sm' className='button-stories__button'>
          Small
        </Button>
        <Button type='primary' size='md' className='button-stories__button'>
          Medium
        </Button>
        <Button type='primary' size='lg' className='button-stories__button'>
          large
        </Button>
      </DemoWrapper>
      <DemoWrapper title='disabled' desc='disabled'>
        <Button disabled className='button-stories__button'>
          disabled
        </Button>
      </DemoWrapper>
      <DemoWrapper title='block' desc='宽度是否和父级宽度一样'>
        <Button block className='button-stories__button'>
          block
        </Button>
      </DemoWrapper>
    </Fragment>
  );
};

storiesOf('Button 按钮', module).add('Button', () => <Demo />, {
  info: {
    text: markdown
  }
});
