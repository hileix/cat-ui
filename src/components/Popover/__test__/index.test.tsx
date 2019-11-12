import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Popover from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Popover', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Popover mode='click'>
        <Popover.Trigger>
          <span>点击打开</span>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
