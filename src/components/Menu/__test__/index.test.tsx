import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Menu from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Menu>Test</Menu>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
