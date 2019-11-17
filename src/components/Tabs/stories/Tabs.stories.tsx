import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Tabs } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import markdown from '../README.md';
import Button from '../../Button';

const { useState } = React;
const TabPanel = Tabs.TabPanel;

const Demo = () => {
  const [activeId1, setActiveId1] = useState('a');
  const [activeId2, setActiveId2] = useState('d');
  const [activeId3, setActiveId3] = useState('c');

  const onTabChange1 = id => {
    setActiveId1(id);
  };

  const onTabChange2 = id => {
    setActiveId2(id);
  };

  const onTabChange3 = id => {
    setActiveId3(id);
  };

  return (
    <div>
      <h3>基础Tabs</h3>
      <Tabs activeId={activeId1} onChange={onTabChange1}>
        <TabPanel id='a' tab='选项A'>
          <div>选项A的内容11111</div>
        </TabPanel>
        <TabPanel id='b' tab='选项B'>
          <div>选项B的内容2222222</div>
        </TabPanel>
        <TabPanel id='c' tab='选项C'>
          <div>选项C的内容333333</div>
        </TabPanel>
      </Tabs>

      <h3>TabPanel的tab属性为dom && TabPanel的children为空</h3>

      <Tabs activeId={activeId2} onChange={onTabChange2}>
        <TabPanel id='d' tab={<a href='javascript:;'>选项table</a>}></TabPanel>
        <TabPanel id='e' tab={<a href='javascript:;'>选项slider</a>}></TabPanel>
        <TabPanel
          id='f'
          tab={
            <span>
              选项<span>tooltip</span>
            </span>
          }
        ></TabPanel>
      </Tabs>

      <h3>tab bar 上额外的元素</h3>

      <Tabs
        activeId={activeId3}
        onChange={onTabChange3}
        tabBarExtraContent={<Button>tabBarExtraContent</Button>}
      >
        <TabPanel id='a' tab='选项1'>
          选项1内容
        </TabPanel>
        <TabPanel id='b' tab='选项2'>
          选项2内容
        </TabPanel>
        <TabPanel id='c' tab='选项3'>
          选项3内容
        </TabPanel>
      </Tabs>
    </div>
  );
};

storiesOf('Tabs 标签页', module).add('Tabs', () => <Demo />, {
  info: {
    text: markdown
  }
});
