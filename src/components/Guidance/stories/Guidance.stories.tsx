import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Guidance } from '@components/index';
import '../../../styles/index.scss';
import Button from '../../Button';
import markdown from '../README.md';
import './style.scss';
import DemoWrapper from '@utils/DemoWrapper';

const { useState } = React;

const Demo = () => {
  const [activeId, setActiveId] = useState(1);
  const [visible, setVisible] = useState(false);

  const handleChange = activeId => {
    if (activeId < 3) {
      setActiveId(activeId + 1);
    } else {
      setActiveId(1);
      // setVisible(false);
    }
  };

  const handleStartGuidance = () => {
    setActiveId(1);
    setVisible(true);
  };

  return (
    <DemoWrapper
      title='引导组件'
      desc='用于选中某个元素，然后进行引导过程的情形'
    >
      <div className='guidance-box'>
        <Button onClick={handleStartGuidance}>开始引导</Button>
        <p className='guidance-step guidance-step-1'>第 1 步</p>
        <p className='guidance-step guidance-step-2'>第 2 步</p>
        <p className='guidance-step guidance-step-3'>第 3 步</p>
        <Guidance
          activeId={activeId}
          visible={visible}
          onChange={handleChange}
          offset={120}
        >
          <Guidance.Step
            id={1}
            selector='.guidance-step-1'
            className='step-1'
            style={{ background: 'red' }}
          >
            第一步 ~
          </Guidance.Step>
          <Guidance.Step
            id={2}
            selector='.guidance-step-2'
            className='step-2'
            style={{ height: 300 }}
          >
            第二步 ~~
          </Guidance.Step>
          <Guidance.Step
            id={3}
            selector='.guidance-step-3'
            style={{ width: 300 }}
          >
            第三步 ~~~
          </Guidance.Step>
        </Guidance>
      </div>
    </DemoWrapper>
  );
};

storiesOf('Guidance 引导', module).add('Guidance', () => <Demo />, {
  info: {
    text: markdown
  }
});
