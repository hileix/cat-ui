import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Button from '../Button';
import '../../../styles/index.scss';
import './style.scss';
import markdown from '../README.md';

const Demo1 = () => {
  const handleClick = (e) => {
    console.log('Example:handleClick', e);
  }

  return (
    <div className='button-box'>
      <h3>size</h3>
      <Button size='sm'>sm</Button>
      <Button size='md'>md</Button>
      <Button size='lg'>lg</Button>
      <Button>default</Button>

      <h3>theme</h3>
      <Button theme='primary'>primary</Button>
      <Button theme='primary-up'>primary-up</Button>
      <Button theme='yellow'>yellow</Button>
      <Button theme='white-primary'>white-primary</Button>
      <Button theme='white-cyan'>white-cyan</Button>
      <Button theme='borderless'>borderless</Button>

      <h3>block</h3>
      <div className='block-box'>
        <Button block>block</Button>
      </div>
      <div className='block-box'>
        <Button block theme='yellow'>block</Button>
      </div>
      <div className='block-box'>
        <Button block theme='white-primary' onClick={handleClick}>block</Button>
      </div>

      <h3>disabled</h3>
      <Button disabled onClick={handleClick}>disabled</Button>
      <Button disabled theme='yellow'>disabled</Button>
      <Button disabled theme='white-primary'>disabled</Button>
    </div>
  )
}


storiesOf('Button 按钮', module)
  .add('Button', () => <Demo1 />, {
    notes: {
      markdown
    }
  })

