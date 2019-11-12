import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Select from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Select', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Select>Test</Select>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
