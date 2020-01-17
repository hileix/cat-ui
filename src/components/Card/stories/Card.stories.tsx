import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import Card from '../Card';
import '../../../styles/index.scss';
import DemoWrapper from '@utils/DemoWrapper';
import markdown from '../README.md';

let CardDemo = () =>{
  return (
    <>
      <DemoWrapper title='固定宽度' desc='固定宽度'>
          <Card style={{width: 200}}>
          Card component
        </Card>
      </DemoWrapper>
    </>
  )
}

let CardRoundDemo = () =>{
  return <>
    <DemoWrapper title='圆角显示' desc='圆角显示'>
      <Card shape='round' style={{width: 200}}>
        Card component
      </Card>
    </DemoWrapper>
  </>
}


storiesOf('数据展示/Card 卡片', module).add('Card', CardDemo, {
  info: {
    text: markdown
  }
}).add('Card 圆角', CardRoundDemo, {
  info: {
    text: markdown
  }
});
