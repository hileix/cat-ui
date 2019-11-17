import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import Switch from '../../Switch';
import markdown from '../README.md';

const { useState } = React;

const Demo = () => {
  const [visible1, setVisible1] = useState(true);

  return (
    <div className='loading-wrapper'>
      <div className='loading-box'>
        <Loading visible={visible1} />
      </div>
      <Switch checked={visible1} onChange={checked => setVisible1(checked)}>
        显示 Loading
      </Switch>
    </div>
  );
};

storiesOf('Loading 加载', module).add('Loading', () => <Demo />, {
  info: {
    text: markdown
  }
});
