import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Icon from '../Icon';
import '../../../styles/icon.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [value, setValue] = useState(['A']);

  return (
    <div>
      <Icon type={Icon.Type.sortUp} />
    </div>
  );
};

storiesOf('Icon 图标', module)
  .add('icones', () => <Demo1 />)
