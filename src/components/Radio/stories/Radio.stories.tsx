import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Radio from '../index';
import '../../../styles/index.scss';
import './style.scss';
import DemoWrapper from '@utils/DemoWrapper';
import markdown from '../README.md';

const RadioDemo = () => {
  return (
    <>
      <DemoWrapper title='Radio' desc='最简单的用法'>
        <Radio value='1' onChange={(e: any) => console.log({ checked: e.target.checked })}>
          Radio
        </Radio>
      </DemoWrapper>
      <DemoWrapper title='禁用'>
        <Radio value='1' checked disabled>Radio</Radio>
      </DemoWrapper>
    </>
  )
};

const RadioGroupDemo = () => {
  const [value, setValue] = useState('A');
  return (
    <>
      <DemoWrapper title='最简单的用法'>
        <Radio.Group defaultValue='A'>
          <Radio value='A'>A</Radio>
          <Radio value='B'>B</Radio>
          <Radio value='C'>C</Radio>
          <Radio value='D'>D</Radio>
        </Radio.Group>
      </DemoWrapper>

      <DemoWrapper title='受控'>
        <Radio.Group value={value} onChange={(value: any) => setValue(value)}>
          <Radio value='A'>A</Radio>
          <Radio value='B'>B</Radio>
          <Radio value='C'>C</Radio>
          <Radio value='D'>D</Radio>
        </Radio.Group>
      </DemoWrapper>

      <DemoWrapper title='禁用'>
        <Radio.Group disabled defaultValue='A'>
          {['A', 'B', 'C', 'D'].map(item => <Radio key={item} value={item}>{item}</Radio>)}
        </Radio.Group>
      </DemoWrapper>
    </>
  )
}

storiesOf('数据录入/Radio 单选框', module)
  .add(
    'Radio',
    () => <RadioDemo />,
    {
      info: {
        text: markdown
      }
    })
  .add(
    'RadioGroup',
    () => <RadioGroupDemo />,
    {
      info: {
        text: markdown
      }
    });
