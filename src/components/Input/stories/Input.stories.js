import React, { useState } from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { actions } from '@storybook/addon-actions';
import Input from '../index';
import '../../../styles/input.scss';
import './style.scss';
import { withInfo } from '@storybook/addon-info';

addDecorator(withInfo);

const Demo1 = () => {
  return (
    <div className='input-box'>
      <span className='hint' >
        线型输入框 small:
      </span>
      <Input size='small' />
      <span className='hint' >
        线型输入框 small(不能复制):
      </span>
      <Input size='small' copyFree={false} />
      <span className='hint' >
        线型输入框 small(不能粘贴):
      </span>
      <Input size='small' pasteFree={false} />
      <span className='hint' >
        线型输入框 small(不能剪贴):
      </span>
      <Input size='small' cutFree={false} />
      <span className='hint' >
        线型输入框 small(不能复制+粘贴+剪贴):
      </span>
      <Input size='small' clipboardFree={false} />
      <span className='hint' >
        线型输入框 normal(带自动聚焦 未启用):
      </span>
      <Input size='normal' autoFocus={false} />
      <span className='hint' >
        线型输入框 large:
      </span>
      <Input size='large' />
      <span className='hint'>
        线型输入框禁用:
      </span>
      <Input className='item' disabled />
      <span className='hint' >
        线型输入框带清除按钮:
      </span>
      <Input className='item' showClear />
      <span className='hint' >
        线型密码输入框:
      </span>
      <Input className='item' type='line-pwd' />
      <span className='hint' >
        线型密码输入框带眼睛按钮:
      </span>
      <Input className='item' type='line-pwd' showEye />
      <span className='hint' >
        线型输入框带占位符:
      </span>
      <Input className='item' placeholder='Please fill something' />
      <span className='hint' >
        线型输入框带原生占位符(无动效):
      </span>
      <Input className='item' placeholder='Please fill something' placeholderOrigin />
      <span className='hint' >
        线型输入框带默认值:
      </span>
      <Input className='item' defaultValue='defaultValue' />
      <span className='hint' >
        线型输入框错误展示:
      </span>
      <Input className='item err' value='test value' error message='error msg is xxxx' />
      <span className='hint' >
        盒子输入框 small:
      </span>
      <Input size='small' type='box' />
      <span className='hint' >
        盒子输入框 normal:
      </span>
      <Input size='normal' type='box' />
      <span className='hint' >
        盒子输入框 large:
      </span>
      <Input size='large' type='box' />
      <span className='hint' >
        盒子输入框带清除按钮:
      </span>
      <Input className='item item-box' type='box' showClear />
      <span className='hint' >
        盒子密码输入框:
      </span>
      <Input className='item item-box' type='box-pwd' />
      <span className='hint' >
        盒子密码输入框带眼睛按钮:
      </span>
      <Input className='item item-box' type='box-pwd' showEye />
      <span className='hint' >
        盒子输入框带占位符:
      </span>
      <Input className='item item-box' type='box' placeholder='Please fill number' />
      <span className='hint' >
        盒子输入框带原生占位符(无动效):
      </span>
      <Input className='item item-box' type='box' placeholder='Please fill number' placeholderOrigin />
      <span className='hint' >
        盒子输入框带默认值:
      </span>
      <Input className='item item-box' type='box' defaultValue='you are awesome' />
      <span className='hint' >
        盒子输入框带错误展示:
      </span>
      <Input className='item item-box err' type='box' value='cuole' error message='error msg is zzzz' />
      <span className='hint' >
        盒子输入框带错误展示和占位符:
      </span>
      <Input className='item item-box err' type='box' value='123123' error message='error msg is yyyy' placeholder='Please fill username' />
      <span className='hint' >
        文本域:
      </span>
      <Input.TextArea className='item' />
    </div>

  );
};

storiesOf('Input 输入框', module)
  .add('Input', () => <Demo1 />)
