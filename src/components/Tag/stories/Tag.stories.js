import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Tag from '../index';
import '../../../styles/index.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  return (
    <div className='tag-box'>
      <Tag className='default-tag'>
        default
      </Tag>

      <Tag borderColor='#ff6c6c' bgColor='#ff6c6c' textColor='#fff'>
        default
      </Tag>
    </div>
  )
}


storiesOf('Tag 标签', module)
  .add('Tag', () => <Demo1 />);
