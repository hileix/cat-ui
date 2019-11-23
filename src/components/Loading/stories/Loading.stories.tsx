import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { Loading } from '@components/index';
import '../../../styles/index.scss';
import './style.scss';
import Switch from '../../Switch';
import markdown from '../README.md';
import DemoWrapper from '@utils/DemoWrapper';

const { useState } = React;

const Demo = () => {
  const [visible1, setVisible1] = useState(true);

  return (
    <div className='loading-wrapper'>
      <DemoWrapper title='基本用法' desc='一个简单的 loading'>
        <Loading visible />
      </DemoWrapper>

      <DemoWrapper title='自定义 loading 尺寸' desc='尺寸即高度，默认 24px'>
        <div className='loading-wrapper__size-wrapper'>
          <Loading visible size={12} />
          <span className='loading-wrapper__size-desc'>12px</span>
        </div>
        <div className='loading-wrapper__size-wrapper'>
          <Loading visible size={18} />
          <span className='loading-wrapper__size-desc'>18px</span>
        </div>
        <div className='loading-wrapper__size-wrapper'>
          <Loading visible size={24} />
          <span className='loading-wrapper__size-desc'>24px</span>
        </div>
        <div className='loading-wrapper__size-wrapper'>
          <Loading visible size={30} />
          <span className='loading-wrapper__size-desc'>30px</span>
        </div>
      </DemoWrapper>
    </div>
  );
};

storiesOf('Loading 加载', module).add('Loading', () => <Demo />, {
  info: {
    text: markdown
  }
});
