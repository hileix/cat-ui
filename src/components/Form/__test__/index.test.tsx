import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Form from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Form', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Form>Test</Form>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
