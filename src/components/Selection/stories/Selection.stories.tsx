import * as React from 'react';
import { storiesOf } from '@storybook/react';
import Selection from '../index';
import Option from '../Option';
import markdown from '../README.md';
import '../../../styles/index.scss';
import './style.scss';
import '../../../styles/selection.scss'
import '../../../styles/option.scss'

storiesOf('Selection 选择面板', module)
.add(
  'Selection',
  () => {
    const handleSelect = (value: any) => {
      console.log('Selection:handleSelect', value)
    }

    return (
      <Selection
        visible={true}
        value='选项 2'
        onSelect={handleSelect}
      >
        <Option className='qwer' value='选项 1' />
        <Option disabled value='选项 2 禁用' />
        <Option value='选项 3' />
        <Option value='选项 4'>
          <input placeholder='输入一个选项' type="text"/>
        </Option>
        <Option value='选项 5'>
          <div id='show-list-item'>show-list-item</div>
        </Option>
        <Option value='选项 6'>
          <div>episode-list-item</div>
        </Option>
        <Option value='选项 7' />
      </Selection>
    )
  },
  {
    info: {
      text: markdown
    }
  }
)
