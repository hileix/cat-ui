import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Icon from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Icon', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Icon>Test</Icon>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
