import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from '../Avatar';
import '../../../styles/index.scss';
import './style.scss';
import markdown from '../README.md';

storiesOf('Avatar 头像', module)
  .add(
    'Size',
    () => (
      <div>
        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            size='small'
          />
          <div className='avatar-label'>small</div>
        </div>

        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            size='medium'
          />
          <div className='avatar-label'>medium</div>
        </div>
        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            size='large'
          />
          <div className='avatar-label'>large</div>
        </div>
        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            size={50}
          />
          <div className='avatar-label'>size: 50</div>
        </div>
      </div>
    ),
    {
      info: {
        text: markdown
      }
    }
  )
  .add(
    'Shape',
    () => (
      <div>
        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            shape='circle'
            size='large'
          />
          <div className='avatar-label'>circle</div>
        </div>
        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            shape='square'
            size='large'
          />
          <div className='avatar-label'>square</div>
        </div>
        <div className='avatar-box'>
          <Avatar shape='circle' size='large' />
          <div className='avatar-label'>circle - without src</div>
        </div>
        <div className='avatar-box'>
          <Avatar shape='square' size='large' />
          <div className='avatar-label'>square - without src </div>
        </div>
      </div>
    ),
    {
      info: {
        text: markdown
      }
    }
  )
  .add(
    'Responsive',
    () => (
      <div>
        <div className='avatar-box'>
          <Avatar
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            srcSet='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop-32%401x.png,
            https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop-64%402x.png 2x,
            https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop-128%403x.png 3x'
            shape='circle'
            size='large'
          />
          <div className='avatar-label'>适配不同的高清屏 @1x @2x @3x</div>
        </div>
        <div className='avatar-box'>
          <Avatar
            srcSet='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop-32%401x.png 32w,
            https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop-64%402x.png 64w,
            https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop-128%403x.png 128w'
            sizes='(max-width: 320px) 32px,
            (max-width: 768px) 64px,
            1024px'
            src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
            shape='circle'
            size='large'
          />
          <div className='avatar-label'>适配不同的分辨率 srcset & sizes</div>
        </div>
      </div>
    ),
    {
      info: {
        text: markdown
      }
    }
  );
