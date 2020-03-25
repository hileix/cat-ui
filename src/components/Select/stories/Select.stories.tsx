import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../index';
import markdown from '../README.md';
import '../../../styles/index.scss';
import './style.scss';

const Option = Select.Option;

const Demo1 = () => {
  const handleSelect1 = (value: any) => {
    console.log('handleSelect', value)
  }

  const handleChange1 = (value: any) => {
    console.log('handleChange', value)
  }

  const handleSelect2 = (value: any) => {
    console.log('handleSelect', value)
  }

  const handleChange2 = (value: any) => {
    console.log('handleChange', value)
  }

  const handleSelect3 = (value: any) => {
    console.log('handleSelect', value)
  }

  const handleChange3 = (value: any) => {
    console.log('handleChange', value)
  }

  const handleChange4 = (value: any) => {
    console.log('handleSelect', value)
  }

  const handleFocus = (value: any) => {
    console.log('handleFocus', value)
  }

  const [value4, handleSelect4] = useState('Option 2')

  return (
    <div className='select-box'>
      <div className='select-item'>
        <p className='title'>基本用法</p>
        <Select
          className='select-1'
          onSelect={handleSelect1}
          onChange={handleChange1}
        >
          <Option value='Option 1'>Option 1</Option>
          <Option value='Option 2'>Option 2</Option>
          <Option value='Option 3'>Option 3</Option>
          <Option value='Option 4'>Option 4</Option>
          <Option value='Option 5'>Option 5</Option>
        </Select>
      </div>
      <div className='select-item'>
        <p className='title'>设置宽度</p>
        <Select
          className='select-1'
          width={300}
          onSelect={handleSelect1}
          onChange={handleChange1}
        >
          <Option value='Option 1'>Option 1</Option>
          <Option value='Option 2'>Option 2</Option>
          <Option value='Option 3'>Option 3</Option>
          <Option value='Option 4'>Option 4</Option>
          <Option value='Option 5'>Option 5</Option>
        </Select>
      </div>
      <div className='select-item'>
        <p className='title'>有默认值</p>
        <Select
          className='select-1'
          defaultValue='Option 2'
          onSelect={handleSelect2}
          onChange={handleChange2}
        >
          <Option value='Option 1'>Option 1</Option>
          <Option value='Option 2'>Option 2</Option>
          <Option value='Option 3'>Option 3</Option>
          <Option value='Option 4'>Option 4</Option>
          <Option value='Option 5'>Option 5</Option>
        </Select>
      </div>
      <div className='select-item'>
        <p className='title'>禁用Select</p>
        <Select
          disabled
          className='select-1'
          defaultValue='Option 1'
        >
          <Option value='Option 1'>Option 1</Option>
          <Option value='Option 2'>Option 2</Option>
          <Option value='Option 3'>Option 3</Option>
        </Select>
      </div>
      <div className='select-item'>
        <p className='title'>禁用Option</p>
        <Select
          className='select-1'
          defaultValue='Option 1'
          onSelect={handleSelect3}
          onChange={handleChange3}
        >
          <Option value='Option 1'>Option 1</Option>
          <Option value='Option 2'>Option 2</Option>
          <Option value='Option 3'>Option 3</Option>
          <Option disabled value='Option 4'>Option 4</Option>
          <Option value='Option 5'>Option 5</Option>
        </Select>
      </div>
      <div className='select-item'>
        <p className='title'>受控的Select</p>
        <Select
          className='select-1'
          value={value4}
          onSelect={handleSelect4}
          onChange={(value) => {handleChange4(value)}}
        >
          <Option value='Option 1'>Option 1</Option>
          <Option value='Option 2'>Option 2</Option>
          <Option value='Option 3'>Option 3</Option>
          <Option value='Option 4'>Option 4</Option>
          <Option value='Option 5'>Option 5</Option>
        </Select>
      </div>
    </div>
  )
};

storiesOf('数据录入/Select 下拉选择', module)
  .add(
    'Select',
    () => <Demo1 />,
    {
      info: {
        text: markdown
      }
    }
  )
