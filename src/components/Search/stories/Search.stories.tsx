import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Search from '../Search';
import '../../../styles/index.scss';
import './style.scss';
import markdown from '../README.md';

const text = {
  info: {
    text: markdown
  }
}

storiesOf('Search 搜索', module)
.add('Search', () => <Search placeholder='search show' />)
