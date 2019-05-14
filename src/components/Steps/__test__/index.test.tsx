import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Steps from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Steps', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Steps>Test</Steps>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
