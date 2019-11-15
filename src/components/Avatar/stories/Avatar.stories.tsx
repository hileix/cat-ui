import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Avatar } from '../../index';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const Demo = () => {
  return (
    <DemoWrapper title='头像' desc=''>
      <Avatar
        src={
          'http://cdn.himalaya.com/8c205ad6954541c99f7fd77008ff6479.jpg?x-oss-process=image/resize,w_300,h_300&auth_key=4102416000-1234-0-b5602166a98343b7e7f8f58d645d6d3e'
        }
        size='large'
      ></Avatar>
    </DemoWrapper>
  );
};

storiesOf('Avatar 头像', module).add('Avatar', () => <Demo></Demo>, {
  info: {
    text: markdown
  }
});
