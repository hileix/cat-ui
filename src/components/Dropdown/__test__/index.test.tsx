import React from 'react'
import { render, mount } from 'enzyme'
import Dropdown from '../index'
import Menu from '@components/Menu';
import Button from '@components/Button';
let menu = (
  <Menu>
    <Menu.Item>1111</Menu.Item>
    <Menu.Item>222</Menu.Item>
    <Menu.Item>333</Menu.Item>
  </Menu>
);

describe('Dropdown', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Dropdown mode="click" selector="#dropDowndemo" overlay={menu} >
        <Button type="primary"> 下拉菜单 </Button>
      </Dropdown>

    )
    expect(wrapper).toMatchSnapshot()
  })

})
