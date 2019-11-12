import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Pagination from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Pagination', () => {
  // test('renders correctly', () => {
  //   const wrapper = render(
  //     <Pagination
  //       current={2}
  //       total={85} />
  //   )
  //   expect(wrapper).toMatchSnapshot()
  // })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
