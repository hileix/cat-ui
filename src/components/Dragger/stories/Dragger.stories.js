import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Dragger from '../Dragger';
import '../../../styles/index.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [value, setValue] = useState(['A']);

  const draggedElement = e => {
    console.log('dragged.', e);
  };

  const dragStart = e => {
    console.log('dragStart.', e);
  };

  const dragOver = e => {
    console.log('dragOver.', e);
  };

  const dragEnd = e => {
    console.log('dragEnd.', e);
  };

  const sort = e => {
    console.log('sort.', e);
  };

  return (
    <div className='dragger-box'>
      <Dragger
        draggedElement={draggedElement}
        onDragStart={dragStart}
        onDragOver={dragOver}
        onDragEnd={dragEnd}
        onSort={sort}
      >
        <Dragger.Item id={1} className='item'>
          <div className='text'>111</div>
        </Dragger.Item>
        <Dragger.Item id={2} className='item'>
          <div className='text'>222</div>
        </Dragger.Item>
        <Dragger.Item id={3} className='item'>
          <div className='text'>333</div>
        </Dragger.Item>
        <Dragger.Item id={4} className='item'>
          <div className='text'>444</div>
        </Dragger.Item>
      </Dragger>
    </div>

  );
};

storiesOf('Dragger 拖拽器', module)
  .add('Dragger', () => <Demo1 />)
