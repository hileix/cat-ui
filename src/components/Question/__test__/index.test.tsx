import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Question from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Question', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Question>Test</Question>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
