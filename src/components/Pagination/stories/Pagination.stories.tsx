import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Pagination from '../index';
import '../../../styles/index.scss';
import './style.scss';
import DemoWrapper from '@utils/DemoWrapper';
import markdown from '../README.md';


const Demo = () => {
  const [current1, setCurrent1] = useState(1)
  const [current2, setCurrent2] = useState(6)

  return (
    <DemoWrapper title='基础 Pagination'>
      <div style={{ margin: 16 }}>
        <Pagination
          current={current1}
          total={85}
          onChange={(page) => setCurrent1(page)}
        />
      </div>

      <div style={{ margin: 16 }}>
        <Pagination
          current={current2}
          total={185}
          onChange={(page) => setCurrent2(page)}
        />
      </div>
    </DemoWrapper>
  )
};

storiesOf('Pagination 分页', module)
  .add('Pagination', () => <Demo />, {
    info: {
      text: markdown
    }
  })
