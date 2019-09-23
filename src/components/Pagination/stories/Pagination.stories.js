import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Pagination from '../index';
import '../../../styles/pagination.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [current1, setCurrent1] = useState(2)
  const [current2, setCurrent2] = useState(6)

  return (
    <div className='pagination-box'>
      <h3>基础 Pagination</h3>
      <Pagination
        current={current1}
        total={85}
        onChange={(page) => setCurrent1(page)}
      />

      <h3>基础 Pagination</h3>
      <Pagination
        current={current2}
        total={185}
        onChange={(page) => setCurrent2(page)}
      />
    </div>
  )
};

storiesOf('Pagination 分页', module)
  .add('Pagination', () => <Demo1 />)
