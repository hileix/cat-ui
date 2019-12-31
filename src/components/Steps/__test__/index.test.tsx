import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Steps from '../index'

describe('Steps', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Steps>
        <Steps.Step title='step1' />
        <Steps.Step title='step2' />
        <Steps.Step title='step3' />
      </Steps>
    )
    expect(wrapper).toMatchSnapshot()
  })

})
