import React, { useState, useEffect } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Icon from '../Icon';
import '../../../styles/icon.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';
import iconTypes from './iconTypes';
import ClipboardJS from 'clipboard';
import Message from '../../Message'

addDecorator(withInfo);

const SingleIcon = ({ type }) => {
  return (
    <div className='single-icon' data-clipboard-text={`<Icon type=${`"${type}"`} />`}>
      <Icon type={type} className='single-icon__icon'></Icon>
      <span>{type}</span>
    </div>
  );
}


const Demo1 = () => {

  useEffect(() => {
    const clipboard = new ClipboardJS('.single-icon');
    clipboard.on('success', function (e) {
      Message.success('Coped!')
    });
  }, [])

  return (
    <div className='icon-stories'>
      {iconTypes.map(type => <SingleIcon type={type} key={type} />)}
    </div>
  );
};

storiesOf('Icon 图标', module)
  .add('icones', () => <Demo1 />)
