import React from 'react';
import { storiesOf } from '@storybook/react';
import Tooltip from '../index';
import '../../../styles/index.scss';
import './style.scss';
import Button from '../../Button';

// import markdown from '../README.md';

const Demo = () => {
  const content1 = 'Tooltip content';
  const content = (
    <div>
      <p>第一段文字</p>
      <p>第二段文字</p>
    </div>
  );

  const mode = 'click';

  return (
    <div className='tooltip-stories'>
      <div className='tooltip-stories__wrapper tooltip-stories__top'>
        <Tooltip mode={mode} content={'topLeft'} position='topLeft'>
          <Button className='tooltip-stories__button'>topLeft</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'top'} position='top'>
          <Button className='tooltip-stories__button'>top</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'topRight'} position='topRight'>
          <Button className='tooltip-stories__button'>topRight</Button>
        </Tooltip>
      </div>
      <div className='tooltip-stories__wrapper tooltip-stories__right'>
        <Tooltip mode={mode} content={'rightTop'} position='rightTop'>
          <Button className='tooltip-stories__button'>rightTop</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'right'} position='right'>
          <Button className='tooltip-stories__button'>right</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'rightBottom'} position='rightBottom'>
          <Button className='tooltip-stories__button'>rightBottom</Button>
        </Tooltip>
      </div>
      <div className='tooltip-stories__wrapper tooltip-stories__bottom'>
        <Tooltip mode={mode} content={'bottomLeft'} position='bottomLeft'>
          <Button className='tooltip-stories__button'>bottomLeft</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'bottom'} position='bottom'>
          <Button className='tooltip-stories__button'>bottom</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'bottomRight'} position='bottomRight'>
          <Button className='tooltip-stories__button'>bottomRight</Button>
        </Tooltip>
      </div>
      <div className='tooltip-stories__wrapper tooltip-stories__left'>
        <Tooltip mode={mode} content={'leftTop'} position='leftTop'>
          <Button className='tooltip-stories__button'>leftTop</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'left'} position='left'>
          <Button className='tooltip-stories__button'>left</Button>
        </Tooltip>
        <Tooltip mode={mode} content={'leftBottom'} position='leftBottom'>
          <Button className='tooltip-stories__button'>leftBottom</Button>
        </Tooltip>
      </div>
    </div>
  );
};

storiesOf('Tooltip 文字提示', module).add('Tooltip', () => <Demo />, {
  // notes: {
  //   markdown
  // }
});
