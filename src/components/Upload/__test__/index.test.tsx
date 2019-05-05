import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Upload from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Upload', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Upload>Test</Upload>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
