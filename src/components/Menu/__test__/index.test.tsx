import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Menu from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Menu', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Menu mode='pop' className='menu1'>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Download</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
