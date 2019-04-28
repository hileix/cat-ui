import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Popover from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Popover', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Popover>Test</Popover>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
