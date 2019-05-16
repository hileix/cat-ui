import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Tooltip from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Tooltip', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Tooltip>Test</Tooltip>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
