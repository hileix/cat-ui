import * as React from 'react'
import * as Enzyme from 'enzyme'
import { mount } from 'enzyme'
import { ISelectProps } from '../Select'
import Select from '../index'

const Option = Select.Option

describe('Select', () => {
  test('renders correctly', () => {
    const handleSelect1 = (value: any) => {
      console.log('handleSelect', value)
    }
  
    const handleChange1 = (value: any) => {
      console.log('handleChange', value)
    }

    const wrapper = mount(
      <Select
        className='select-1'
        onSelect={handleSelect1}
        onChange={handleChange1}
      >
        <Option value='Option 1'>Option 1</Option>
        <Option value='Option 2'>Option 2</Option>
        <Option value='Option 3'>Option 3</Option>
        <Option value='Option 4' className='option-4'>Option 4</Option>
        <Option value='Option 5'>Option 5</Option>
      </Select>
    )

    wrapper.find('.selected-section').at(0).simulate('click');
    wrapper.find('.option-4').at(0).simulate('click');
    expect(wrapper).toMatchSnapshot()
  })
})

describe('Select', () => {
  test('disabled', () => {

    const wrapper = mount(
      <Select
        disabled
      >
        <Option value='Option 1'>Option 1</Option>
        <Option value='Option 2'>Option 2</Option>
        <Option value='Option 3'>Option 3</Option>
      </Select>
    )

    wrapper.find('.selected-section').at(0).simulate('click');
    expect(wrapper).toMatchSnapshot();
  })
})

class Demo extends React.Component<any, {value: string}> {
  constructor(props: ISelectProps) {
    super(props)
    this.state = {
      value: ''
    }
  }
  handleSelect = (value: any) => {
    this.setState({
      value
    })
  }

  handleChange = (value: any) => {
    this.setState({
      value
    })
  }

  render () {
    const { value } = this.state
    return (
      <Select
        value={value}
        onSelect={this.handleSelect}
        onChange={this.handleChange}
      >
        <Option value='Option 1'>Option 1</Option>
        <Option value='Option 2' className='option-2'>Option 2</Option>
        <Option value='Option 3' className='option-3'>Option 3</Option>
      </Select>
    )
  }
}

describe('Select', () => {
  test('value', () => {
    const wrapper = mount(<Demo />)
    wrapper.find('.selected-section').at(0).simulate('click');
    wrapper.find('.option-3').at(0).simulate('click');
    wrapper.find('.option-2').at(0).simulate('click');
    expect(wrapper).toMatchSnapshot();
  })
})
