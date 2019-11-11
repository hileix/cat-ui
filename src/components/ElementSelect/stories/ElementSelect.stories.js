import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import ElementSelect from '../ElementSelect';
import Button from '../../Button';
import '../../../styles/index.scss';
import markdown from '../README.md';
import './style.scss';
import { scroll } from '@hife/utils';


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
        {/* <button onClick={() => setVisible(false)}>隐藏</button> */}
      </div>
    )
  }

  return (
    <div className='element-select-box'>
      <p className='selected-element'>这是被选中的元素</p>
      <div>
        <button onClick={() => setVisible(true)}>显示</button>
      </div>
      <ElementSelect
        selector='.selected-element'
        visible={visible}
        selectedElementStyle={{ border: '1px solid red' }}
        extraContent={renderExtraContent}
        offset={120}
      />
      <div className='element-select-box__content'>
        element-select-box__content
      </div>
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
