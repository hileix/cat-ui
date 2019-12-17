import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Button, Icon } from '@components/index';
import './style.scss';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { Fragment, useState, useEffect } = React;

const Demo = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Fragment>
      <DemoWrapper title='类型' desc='五种类型'>
        <Button type='default' className='button-stories__button'>
          default
        </Button>
        <Button type='primary' className='button-stories__button'>
          primary
        </Button>
        <Button type='link' className='button-stories__button'>
          link
        </Button>
        <Button type='dashed' className='button-stories__button'>
          Dashed
        </Button>
        <Button type='golden' className='button-stories__button'>
          Golden
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

let ShapeDemo = ()=> {
  return (
    <>
    <DemoWrapper title='类型' desc='五种类型'>
        <Button shape='round' type='default' className='button-stories__button'>
          default
        </Button>
        <Button shape='round' type='primary' className='button-stories__button'>
          primary
        </Button>
        <Button shape='round' type='link' className='button-stories__button'>
          link
        </Button>
        <Button shape='round' type='dashed' className='button-stories__button'>
          Dashed
        </Button>
        <Button shape='round' type='golden' className='button-stories__button'>
          Golden
        </Button>
      </DemoWrapper>
    <DemoWrapper title='尺寸' desc='三种尺寸'>
      <Button size='sm' shape='round' className='button-stories__button'>smRound</Button>    
      <Button size='md' shape='round' className='button-stories__button'>mdRound</Button>    
      <Button size='lg' shape='round' className='button-stories__button'>lgRound</Button>    
    </DemoWrapper>

    <DemoWrapper title='Shape' desc='圆形'>
      <Button size='sm' shape='circle' className='button-stories__button'>S</Button>    
      <Button size='md' shape='circle' className='button-stories__button'>MD</Button>    
      <Button size='lg' shape='circle' className='button-stories__button'>LG</Button>    
    </DemoWrapper>

    <DemoWrapper title='Icon' desc='Icon'>
      <Button size='sm' shape='round' className='button-stories__button'><Icon type="add" /> Add</Button>    
      <Button size='md'  className='button-stories__button'><Icon type="add" /> Add</Button>    
    </DemoWrapper>
    
    
  </>);
}

storiesOf('Button 按钮', module).add('Button', () => <Demo />, {
  info: {
    text: markdown
  }
}).add('Shape', () => <ShapeDemo />, {
  info: {
    text: markdown
  }
})





