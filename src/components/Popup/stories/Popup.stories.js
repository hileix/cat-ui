import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Popup from '../index';
import '../../../styles/index.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';


addDecorator(withInfo);

const Demo1 = () => {

  return (
    <div className='popover-box'>
      <p>Popup组件只是一个壳子，负责组装Trigger和Content，以及计算目标要显示的位置，添加弹出时的过渡、动画等。</p>
      <p>打开弹层的方式由Trigger控制，比如click, 触发后返回值给Content，由Content决定自己的展示和关闭</p>
    </div>
  )
};

storiesOf('Popup 弹出层', module)
  .add('Popup', () => <Demo1 />)
