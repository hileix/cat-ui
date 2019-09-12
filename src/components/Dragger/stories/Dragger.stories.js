import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Dragger from '../Dragger';
import '../../../styles/dragger.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const draggedElement = e => {
    console.log('draggedElement:', e);
  };

  const onDragStart = e => {
    console.log('onDragStart:', e);
  };

  const onDragOver = e => {
    console.log('onDragOver:', e);
  };

  const onDragEnd = e => {
    console.log('onDragEnd:', e);
  };

  const onSort = e => {
    console.log('onSort:', e);
  };

  return (
    <Dragger
      draggedElement={draggedElement}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragEnd={onDragEnd}
      onSort={onSort}
    >
      <Dragger.Item id={1} className="item">
        <div className="text">111</div>
      </Dragger.Item>
      <Dragger.Item id={2} className="item">
        <div className="text">222</div>
      </Dragger.Item>
      <Dragger.Item id={3} className="item">
        <div className="text">333</div>
      </Dragger.Item>
      <Dragger.Item id={4} className="item">
        <div className="text">444</div>
      </Dragger.Item>
    </Dragger>
  );
};

storiesOf('Dragger 拖拽器', module).add('Dragger', () => <Demo1 />);
