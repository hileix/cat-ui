import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@components/index';
import './style.scss';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { Fragment, useState, useEffect } = React;

const Demo = () => {
  const [loading, setLoading] = useState(false);

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
      <DemoWrapper title='loading 状态' desc='按钮 loading 状态'>
        <Button size='md' loading={loading} className='button-stories__button'>
          loading
        </Button>
        <Button
          // type='primary'
          size='md'
          loading
          className='button-stories__button'
          onClick={() => setLoading(!loading)}
        >
          切换
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
