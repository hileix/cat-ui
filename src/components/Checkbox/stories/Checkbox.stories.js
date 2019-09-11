import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Checkbox from '../Checkbox';
import '../../../styles/checkbox.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = e => {
    const checked = e.target.checked;
    const value = e.target.value;
    setChecked(!checked);
    console.log('checkbox value is:', value);
  };

  return (
    <Checkbox checked={checked} onChange={handleChange} value={'A'}>
      A
    </Checkbox>
  );
};

const Demo2 = () => {
  const [value, setValue] = useState(['A']);

  const handleChange = value => {
    console.log('value:', value);
    setValue(value);
  };

  console.log({ value });

  return (
    <Checkbox.Group value={value} onChange={handleChange}>
      <Checkbox value={'A'}>A</Checkbox>
      <Checkbox value={'B'}>B</Checkbox>
      <Checkbox value={'C'}>C</Checkbox>
      <Checkbox disabled value="D">
        D
      </Checkbox>
      <Checkbox value={'E'}>E</Checkbox>
    </Checkbox.Group>
  );
};

storiesOf('Checkbox 多选框', module)
  .add('Checkbox', () => <Demo1 />)
  .add('Checkbox.Group', () => <Demo2 />);
