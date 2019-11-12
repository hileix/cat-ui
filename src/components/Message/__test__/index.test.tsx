import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Message from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Message', () => {
  // test('renders correctly', () => {
  //   const wrapper = render(
  //     <Message>Test</Message>
  //   )
  //   expect(wrapper).toMatchSnapshot()
  // })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
