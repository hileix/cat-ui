import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Switch from '../index';
import '../../../styles/index.scss';
import './style.scss';
import DemoWrapper from '@utils/DemoWrapper';

const Base = () => {
  return (
    <DemoWrapper title='最简单的 Switch'>
      <Switch />
    </DemoWrapper>
  );
};


const Disabled = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked: boolean) => {
    setChecked(checked)
  };

  return (
    <DemoWrapper title='不可用状态' desc='disabled={true}'>
      <Switch checked={checked} onChange={handleChange} disabled />
    </DemoWrapper>
  );
}

const Children = () => {
  const [checked, setChecked] = useState(false);
  const handleChange = (checked: boolean) => {
    setChecked(checked)
  };

  return (
    <DemoWrapper title='选中/非选中 时的 Children'>
      <Switch checked={checked} onChange={handleChange} checkedChildren='on' unCheckedChildren='off' />
    </DemoWrapper>
  );
}

const AutoFocus = () => {
  return (
    <DemoWrapper title='自动聚焦'>
      <Switch autoFocus />
    </DemoWrapper>
  );
}



storiesOf('数据录入/Switch 开关', module)
  .add('Base', () => <Base />)
  .add('Disabled', () => <Disabled />)
  .add('Children', () => <Children />)
  .add('AutoFocus', () => <AutoFocus />)
