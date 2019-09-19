import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Steps from '../index';
import '../../../styles/steps.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [value, setValue] = useState(0)
  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <div className='steps-box'>
      <Steps current='1'>
        <Steps.Step title='step1' />
        <Steps.Step title='step2' />
        <Steps.Step title='step3' />
      </Steps>
      <br />
      <Steps current='3'>
        <Steps.Step title='step1' />
        <Steps.Step title='step2' />
        <Steps.Step title='step3' />
        <Steps.Step title='step4' />
      </Steps>
    </div>
  )
};

storiesOf('Steps 滑动输入条', module)
  .add('Slider', () => <Demo1 />)
