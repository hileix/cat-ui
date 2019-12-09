import * as React from 'react'
import { render, mount } from 'enzyme'
import Input from '../index'

describe('Input', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Input />
    )
    expect(wrapper).toMatchSnapshot()
  })

})
