import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Slider from '../index';
import '../../../styles/slider.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [value, setValue] = useState(0)
  const handleChange = (value) => {
    setValue(value)
  }

  return (
    <div className='slider-box'>
      <Slider value={value} onChange={handleChange} />
    </div>
  )
};

storiesOf('Slider 滑动输入条', module)
  .add('Slider', () => <Demo1 />)
