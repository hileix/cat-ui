import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import ElementSelect from '../ElementSelect';
import Button from '../../Button';
import '../../../styles/element-select.scss';
import markdown from '../README.md';



const Demo1 = () => {
  const [visible, setVisible] = useState(true)

  return (
    <div>
      <Button className='my-button'>button</Button>
      <ElementSelect selector='my-button' visible={visible} />
    </div>
  );
}


storiesOf('ElementSelect 元素选择', module).add('ElementSelect', () => (
  <Demo1 />
), {
  notes: {
    markdown
  }
});
