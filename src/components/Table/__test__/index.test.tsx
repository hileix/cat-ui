import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Table from '../index'

Enzyme.configure({ adapter: new Adapter() })

// describe('Table', () => {
//   test('renders correctly', () => {
//     const wrapper = render(
//       <Table>Test</Table>
//     )
//     expect(wrapper).toMatchSnapshot()
//   })

//   test('two plus two is four', () => {
//     expect(2 + 2).toBe(4)
//   })
// })
