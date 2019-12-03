import * as React from 'react'
import { render, mount } from 'enzyme'
import Scroll from '../index'

describe('Scroll', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Scroll>
        <div>block1</div>
        <div>block2</div>
      </Scroll>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('unmount Component', () => {

    const wrapper = mount(
      <Scroll>
        <div>block1</div>
        <div>block2</div>
      </Scroll>
    )

    const componentWillUnmount = jest.spyOn(wrapper.instance(), 'componentWillUnmount');
    wrapper.unmount();
    expect(componentWillUnmount).toHaveBeenCalled();
  })

  test('call onPageIndexChange correctly', () => {
    const onPageIndexChange = jest.fn()

    const eventMap = {
      scroll: null,
    };

    window.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });

    const wrapper = mount(
      <Scroll onPageIndexChange={onPageIndexChange}>
        <div>block1</div>
        <div>block2</div>
      </Scroll>
    )

    eventMap.scroll();
    expect(wrapper.prop('onPageIndexChange')).toHaveBeenCalled()
  })

})
