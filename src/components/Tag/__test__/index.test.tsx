import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Tag from '../index'


describe('Tag', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Tag>Test</Tag>
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('props:textColor', () => {
    const wrapper = render(
      <Tag textColor='#ff6c6c'>Test</Tag>
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('props:bgColor', () => {
    const wrapper = render(
      <Tag bgColor='#ff6c6c'>Test</Tag>
    )
    expect(wrapper).toMatchSnapshot()
  })
  test('props:borderColor', () => {
    const wrapper = render(
      <Tag borderColor='#ff6c6c'>Test</Tag>
    )
    expect(wrapper).toMatchSnapshot()
  })
})
