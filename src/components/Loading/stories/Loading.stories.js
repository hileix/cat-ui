import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Loading from '../index';
import '../../../styles/loading.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';
import Switch from '../../Switch';

addDecorator(withInfo);

const Demo1 = () => {
  const [visible1, setVisible1] = useState(true);

  return (
    <div className='loading-wrapper'>
      <div className='loading-box'>
        <Loading visible={visible1} />
      </div>
      <Switch checked={visible1} onChange={(checked) => setVisible1(checked)}>显示 Loading</Switch>
    </div>
  )
}


storiesOf('Loading 加载', module)
  .add('Loading', () => <Demo1 />);
