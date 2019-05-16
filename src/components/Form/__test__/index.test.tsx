import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Form from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Form', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Form>
        <Form.Item
          label='field1'
          desc='How much would you like to charge your fans?'
          tips='field1 tips text'
        >
        </Form.Item>
      </Form>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
