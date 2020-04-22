import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Select from '../index';
import markdown from '../README.md';
import '../../../styles/index.scss';
import './style.scss';

const Option = Select.Option;

type SelectValue = string | number;

interface Demo1State {
  value0: string | number;
  index0: number;
}

class Demo1 extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      value0: '',
      index0: 0,
      value1: '',
      index1: 0,
      value2: '',
      index2: 0,
      value3: '',
      index3: 0,
      value4: '',
      index4: 0
    };
  }
  handleSelect0 = (value: SelectValue, index: number) => {
    this.setState({
      value0: value,
      index0: index
    });
  };

  handleChange0 = (value: SelectValue, index: number) => {
    this.setState({
      value0: value,
      index0: index
    });
  };

  handleSelect1 = (value: SelectValue, index: number) => {
    this.setState({
      value1: value,
      index1: index
    });
  };

  handleChange1 = (value: SelectValue, index: number) => {
    this.setState({
      value1: value,
      index1: index
    });
  };

  handleSelect2 = (value: SelectValue, index: number) => {
    this.setState({
      value2: value,
      index2: index
    });
  };

  handleChange2 = (value: SelectValue, index: number) => {
    this.setState({
      value2: value,
      index2: index
    });
  };

  handleSelect3 = (value: SelectValue, index: number) => {
    this.setState({
      value3: value,
      index3: index
    });
  };

  handleChange3 = (value: SelectValue, index: number) => {
    this.setState({
      value3: value,
      index3: index
    });
  };

  handleSelect4 = (value: SelectValue, index: number) => {
    this.setState({
      value4: value,
      index4: index
    });
  };

  handleChange4 = (value: SelectValue, index: number) => {
    this.setState({
      value4: value,
      index4: index
    });
  };

  handleFocus = (value: SelectValue) => {
    console.log('handleFocus', value);
  };

  render() {
    const {
      value0,
      index0,
      value1,
      index1,
      value2,
      index2,
      value3,
      index3,
      value4,
      index4
    } = this.state;

    return (
      <div className='select-box'>
        <div className='select-item'>
          <p className='title'>基本用法</p>
          <div>{`value: ${value0}`}</div>
          <div>{`index: ${index0}`}</div>
          <br />
          <Select
            className='select-1'
            value={value0}
            onSelect={this.handleSelect0}
            onChange={this.handleChange0}
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
          <div>{`value: ${value1}`}</div>
          <div>{`index: ${index1}`}</div>
          <br />
          <Select
            className='select-1'
            value={value1}
            width={300}
            onSelect={this.handleSelect1}
            onChange={this.handleChange1}
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
          <div>{`value: ${value2}`}</div>
          <div>{`index: ${index2}`}</div>
          <br />
          <Select
            className='select-1'
            defaultValue='Option 2'
            onSelect={this.handleSelect2}
            onChange={this.handleChange2}
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
          <Select disabled className='select-1' defaultValue='Option 1'>
            <Option value='Option 1'>Option 1</Option>
            <Option value='Option 2'>Option 2</Option>
            <Option value='Option 3'>Option 3</Option>
          </Select>
        </div>
        <div className='select-item'>
          <p className='title'>禁用Option</p>
          <div>{`value: ${value3}`}</div>
          <div>{`index: ${index3}`}</div>
          <br />
          <Select
            className='select-1'
            value={value3}
            defaultValue='Option 1'
            onSelect={this.handleSelect3}
            onChange={this.handleChange3}
          >
            <Option value='Option 1'>Option 1</Option>
            <Option value='Option 2'>Option 2</Option>
            <Option value='Option 3'>Option 3</Option>
            <Option disabled value='Option 4'>
              Option 4
            </Option>
            <Option value='Option 5'>Option 5</Option>
          </Select>
        </div>
      </div>
    );
  }
}

const Position = () => {
  const [value, setValue] = useState('1');

  const handleSelect = (value: any) => {
    setValue(value);
  };

  return (
    <Select
      value={value}
      onSelect={handleSelect}
      position='topLeft'
      className='select-stories-position__select'
    >
      <Option value='1'>Option 1</Option>
      <Option value='2'>Option 2</Option>
      <Option value='3'>Option 3</Option>
      <Option value='4'>Option 4</Option>
      <Option value='5'>Option 5</Option>
    </Select>
  );
};

storiesOf('数据录入/Select 选择器', module)
  .add('Select', () => <Demo1 />, {
    info: {
      text: markdown
    }
  })
  .add('position', () => <Position />, {
    info: {
      text: markdown
    }
  });
