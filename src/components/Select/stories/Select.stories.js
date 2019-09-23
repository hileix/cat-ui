import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Select from '../index';
import '../../../styles/select.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Option = Select.Option;

const Demo1 = () => {
  const [value1, setvalue1] = useState('');
  const [value2, setvalue2] = useState('b');
  const [value3, setvalue3] = useState('c');

  const onChange1 = (value, text) => {
    console.log('Example:onChange1', value, text)
    setvalue1(value)
  }

  const onChange2 = (value, text) => {
    console.log('Example:onChange2', value, text)
    setvalue2(value)
  }

  const onChange3 = (value, text) => {
    console.log('Example:onChange3', value, text)
    setvalue3(value)
  }

  const onOptionClick = (value, child) => {
    alert(`This is Custom onOptionClick & value is : ${value} & will callback false`)
  }

  return (
    <div className='select-box'>
      <Select
        className='select1'
        placeholder='Choose Price'
        value={value1}
        onChange={onChange1}>
        <Option value='1'>Option 1</Option>
        <Option value='2'>Option 2</Option>
        <Option value='3'>Option 3</Option>
      </Select>
      <div className='select2-box'>
        <Select
          className='select2'
          placeholder='Choose Price'
          value={value2}
          onChange={onChange2}>
          <Option value='a'>Option A</Option>
          <Option value='b'>Option B</Option>
          <Option value='c'>Option C</Option>
        </Select>
      </div>
      <div className='select3-box'>
        <Select
          className='select3'
          placeholder='Choose Price'
          value={value3}
          onChange={onChange3}>
          <Option value='a'><div>Option A</div></Option>
          <Option value='b'>Option B</Option>
          <Option value='c'>Option C</Option>
        </Select>
      </div>

      <h3>没有value值的Select</h3>
      <Select
        className='select4'
        placeholder='Choose Price'>
        <Option value='1' >Option 1</Option>
        <Option value='2' >Option 2</Option>
        <Option value='3' disable onClick={onOptionClick}>Option 3</Option>
      </Select>
    </div>
  )
};

storiesOf('Select 下拉选择', module)
  .add('Select', () => <Demo1 />)
