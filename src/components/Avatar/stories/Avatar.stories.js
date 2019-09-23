import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Avatar from '../Avatar';
import '../../../styles/avatar.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

storiesOf('Avatar 头像', module).add('small', () => (
  <Avatar
    src={
      'http://cdn.himalaya.com/8c205ad6954541c99f7fd77008ff6479.jpg?x-oss-process=image/resize,w_300,h_300&auth_key=4102416000-1234-0-b5602166a98343b7e7f8f58d645d6d3e'
    }
    size="large"
  >
    test
  </Avatar>
));
