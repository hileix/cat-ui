import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Radio from '../index';
import '../../../styles/radio.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';


addDecorator(withInfo);

const Demo1 = () => {

  const [activeId1, setActiveId1] = useState(3)
  const onRadioChange = (id) => {
    setActiveId1(id)
  }

  return (
    <div className='radio-box'>
      <h3>单独使用</h3>
      <Radio value={1}>1</Radio>
      <Radio checked value={2}>2</Radio>

      <h3>Radio.Group</h3>
      <Radio.Group layout='vertical' value={activeId1} onChange={onRadioChange}>
        <Radio value={1}>
          1
          <div>desc desc desc</div>
        </Radio>
        <Radio value={2}>
          2
          <div>desc desc desc</div>
        </Radio>
        <Radio value={3}>3</Radio>
        <Radio disabled value={4}>4</Radio>
        <Radio value={5} shape='hook'>5</Radio>
      </Radio.Group>

      <h3>没有value值的Radio.Group</h3>
      <Radio.Group>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio disabled value={4}>4</Radio>
        <Radio value={5} shape='hook'>5</Radio>
      </Radio.Group>

      <h3>defaultValue的Radio.Group</h3>
      <Radio.Group defaultValue={2}>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio disabled value={4}>4</Radio>
        <Radio value={5} shape='hook'>5</Radio>
      </Radio.Group>
    </div>
  )
};

storiesOf('Radio 单选框', module)
  .add('Radio', () => <Demo1 />)
