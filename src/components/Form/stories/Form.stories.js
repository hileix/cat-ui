import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Form from '../Form';
import '../../../styles/dragger.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  const [value, setValue] = useState(['A']);

  return (
    <div className='dragger-box'>
      Demo1
    </div>

  );
};

storiesOf('Form 表单', module)
  .add('Form', () => <Demo1 />)
