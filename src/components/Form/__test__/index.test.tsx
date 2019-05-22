import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Form from '../index'
import Input from '../../Input'

Enzyme.configure({ adapter: new Adapter() })

describe('Form', () => {
  test('renders correctly', () => {
    const checkField1 = (value: any) => {
      const isInvalid = value.length === 0 || value.length > 10
      const error = isInvalid ? '长度需要大于0，小于10' : ''
      return error
    }
    const wrapper = render(
      <Form labelWidth='200px'>
        <Form.Item
          name='username'
          label='field1'
          desc='How much would you like to charge your fans?'
          tips='field1 tips text'
          required
          check={checkField1}>
          <Input  />
        </Form.Item>
      </Form>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
