import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Dragger from '../index'

describe('Dragger', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Dragger>
        <Dragger.Item id={1} className='item'>
          <div className='text'>111</div>
        </Dragger.Item>
        <Dragger.Item id={2} className='item'>
          <div className='text'>222</div>
        </Dragger.Item>
        <Dragger.Item id={3} className='item'>
          <div className='text'>333</div>
        </Dragger.Item>
        <Dragger.Item id={4} className='item'>
          <div className='text'>444</div>
        </Dragger.Item>
      </Dragger>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
