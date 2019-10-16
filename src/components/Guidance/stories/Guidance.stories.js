import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Guidance from '../Guidance';
import '../../../styles/Guidance.scss';
import markdown from '../README.md';



const Demo1 = () => {

  const [activeKey, setActiveKey] = useState('1')

  const handleChange = (key) => {
    setActiveKey(key);
  }

  return null;

  // return (
  //   <Guidance activeKey={activeKey} onChange={handleChange}>
  //     <GuidanceStep key='1' selector={'.selector-1'}>步骤1</GuidanceStep>
  //     <GuidanceStep key='2' selector={'.selector-2'}>步骤2</GuidanceStep>
  //     <GuidanceStep key='3' selector={'.selector-3'}>步骤3</GuidanceStep>
  //   </Guidance>
  // );
}


storiesOf('Guidance 引导', module).add('Guidance', () => (
  <Demo1 />
), {
  notes: {
    markdown
  }
});
