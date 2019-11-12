import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Switch from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Switch', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Switch>Test</Switch>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
