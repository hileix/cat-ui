import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Input from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Input', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })

})
