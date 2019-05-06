import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render, mount } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import Icon from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('Icon', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Icon type='close' />
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('props: type', () => {
    const wrapper1 = render(<Icon type='question-circle' />)
    const wrapper2 = render(<Icon type='question' />)
    const wrapper3 = render(<Icon type='share3' />)
    const wrapper4 = render(<Icon type='share2' />)
    const wrapper5 = render(<Icon type='share1' />)
    const wrapper6 = render(<Icon type='more' />)
    const wrapper7 = render(<Icon type='stats' />)
    const wrapper8 = render(<Icon type='forward' />)
    const wrapper9 = render(<Icon type='backward' />)
    const wrapper10 = render(<Icon type='ins' />)
    const wrapper11 = render(<Icon type='twitter' />)
    const wrapper12 = render(<Icon type='facebook' />)
    const wrapper13 = render(<Icon type='crown' />)
    const wrapper14 = render(<Icon type='early-access' />)
    const wrapper15 = render(<Icon type='hi-circle' />)
    const wrapper16 = render(<Icon type='ad-free' />)
    const wrapper17 = render(<Icon type='close' />)
    expect(wrapper1).toMatchSnapshot()
    expect(wrapper2).toMatchSnapshot()
    expect(wrapper3).toMatchSnapshot()
    expect(wrapper4).toMatchSnapshot()
    expect(wrapper5).toMatchSnapshot()
    expect(wrapper6).toMatchSnapshot()
    expect(wrapper7).toMatchSnapshot()
    expect(wrapper8).toMatchSnapshot()
    expect(wrapper9).toMatchSnapshot()
    expect(wrapper10).toMatchSnapshot()
    expect(wrapper11).toMatchSnapshot()
    expect(wrapper12).toMatchSnapshot()
    expect(wrapper13).toMatchSnapshot()
    expect(wrapper14).toMatchSnapshot()
    expect(wrapper15).toMatchSnapshot()
    expect(wrapper16).toMatchSnapshot()
    expect(wrapper17).toMatchSnapshot()
  })

  test('props: onClick', () => {
    let isClicked = false
    const wrapper = mount(<Icon type='more' onClick={() => {isClicked = true}} />)
    wrapper.find('.hmly-icon').simulate('click')
    expect(isClicked).toBe(true)
  })

})
