import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Scroll from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Scroll', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Scroll>
        <div>block1</div>
        <div>block2</div></Scroll>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
