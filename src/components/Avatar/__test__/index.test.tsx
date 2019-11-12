import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Avatar from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Avatar', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Avatar src="http://cdn.himalaya.com/8c205ad6954541c99f7fd77008ff6479.jpg?x-oss-process=image/resize,w_300,h_300&auth_key=4102416000-1234-0-b5602166a98343b7e7f8f58d645d6d3e">Test</Avatar>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
