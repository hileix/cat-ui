import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Scroll from '../'
import '../../../styles/index.scss';
import './style.scss';

const Demo = () => {
  const onPageIndexChange = (index) => {
    console.log(index);
  }

  return (
    <div className='scroll-box'>
      <Scroll onPageIndexChange={onPageIndexChange}>
        <div className='block-1'>
          <p>打开控制台</p>
        </div>
        <div className='block-2'></div>
        <div className='block-3'></div>
        <div className='block-4'></div>
      </Scroll>
    </div>
  )
}

const Demo1 = () => {
  const onPageIndexChange = (index) => {
    console.log('index');
    console.log(index);
  }

  return (
    <div className='scroll-box'>

      <Scroll onPageIndexChange={onPageIndexChange} wait={1000}>
        <div className='block-1'>
          <p>打开控制台</p>
        </div>
        <div className='block-2'></div>
        <div className='block-3'></div>
        <div className='block-4'></div>
      </Scroll>
    </div>
  )
}

storiesOf('Scroll 滚动', module)
  .add('滚动位置', () => <Demo />)
  .add('设置滚动 监听时间', () => <Demo1 />)

