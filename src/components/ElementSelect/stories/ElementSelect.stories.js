import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import ElementSelect from '../ElementSelect';
import Button from '../../Button';
import '../../../styles/index.scss';
import markdown from '../README.md';
import './style.scss';

const Demo1 = () => {
  const [visible, setVisible] = useState(true);

  const renderExtraContent = (sizeAndPos) => {
    const style = {
      top: sizeAndPos.top + sizeAndPos.height + 10,
      right: sizeAndPos.right
    }
    return (
      <div className='element-select-extra-content' style={style}>
        extra content
      </div>
    )
  }

  return (
    <div>
      <p className='selected-element'>这是被选中的元素</p>
      <ElementSelect
        selector='.selected-element'
        visible={visible}
        selectedElementStyle={{ border: '1px solid red' }}
        extraContent={renderExtraContent}
      />
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
