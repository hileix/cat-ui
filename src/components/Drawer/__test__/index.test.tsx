import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Drawer from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Drawer', () => {
  test('visible is true', () => {
    const wrapper = render(<Drawer visible>Test</Drawer>)
    expect(wrapper).toMatchSnapshot()
  })
  test('visible is false', () => {
    const wrapper = render(<Drawer visible={false}>Test</Drawer>)
    expect(wrapper).toMatchSnapshot()
  })
  test('mask is true', () => {
    const wrapper = render(<Drawer mask={true}>Test</Drawer>)
    expect(wrapper).toMatchSnapshot()
  })
  test('mask is false', () => {
    const wrapper = render(<Drawer mask={false}>Test</Drawer>)
    expect(wrapper).toMatchSnapshot()
  })
})
