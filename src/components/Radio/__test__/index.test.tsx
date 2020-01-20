import React from 'react';
import { mount } from 'enzyme';
import Radio from '../index';
import sinon from 'sinon';


describe('Radio', () => {
  // reset dom
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renders correctly', () => {
    const wrapper1 = mount(
      <Radio value="A">radio</Radio>
    );
    const wrapper2 = mount(
      <Radio value="A" checked>radio</Radio>
    );
    expect(wrapper1).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
  });

  test('Radio is selected when it is clicked', () => {
    const handleChange = sinon.spy();

    const wrapper = mount(
      <Radio value="A" onChange={handleChange}>radio</Radio>
    );

    expect(handleChange.callCount).toBe(0);
    expect(wrapper.state('checked')).toBe(false);

    const input = wrapper.find('input');
    input.simulate('change', { target: { checked: true } });

    expect(handleChange.callCount).toBe(1);
    expect(wrapper.state('checked')).toBe(true);
  });


  test('Disabled radio cannot trigger onChange', () => {
    const handleChange = sinon.spy();

    const wrapper = mount(
      <Radio value="A" onChange={handleChange} disabled>radio</Radio>
    );

    expect(handleChange.callCount).toBe(0);
    expect(wrapper.state('checked')).toBe(false);

    const input = wrapper.find('input');
    input.simulate('change');

    expect(handleChange.callCount).toBe(0);
    expect(wrapper.state('checked')).toBe(false);
  });
});


describe('Radio.Group', () => {
  // reset dom
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renders correctly', () => {
    const wrapper1 = mount(
      <Radio.Group defaultValue='A'>
        <Radio value='A'>A</Radio>
        <Radio value='B'>B</Radio>
        <Radio value='C'>C</Radio>
        <Radio value='D'>D</Radio>
      </Radio.Group>
    );

    expect(wrapper1).toMatchSnapshot();
  });

  test('Able to switch radio(unControlled)', () => {
    const handleChange = sinon.spy();

    const wrapper = mount(
      <Radio.Group defaultValue='A' onChange={handleChange}>
        <Radio value='A'>A</Radio>
        <Radio value='B'>B</Radio>
        <Radio value='C'>C</Radio>
        <Radio value='D'>D</Radio>
      </Radio.Group>
    );

    expect(wrapper.state('value')).toBe('A');
    expect(handleChange.callCount).toBe(0);

    wrapper.find('input').at(1).simulate('change', { target: { checked: true, value: 'B' } });

    expect(wrapper.state('value')).toBe('B');
    expect(handleChange.callCount).toBe(1);
  });

  test('Able to switch radio(unControlled)', () => {
    const handleChange = sinon.spy();

    const wrapper = mount(
      <Radio.Group value='A' onChange={handleChange}>
        <Radio value='A'>A</Radio>
        <Radio value='B'>B</Radio>
        <Radio value='C'>C</Radio>
        <Radio value='D'>D</Radio>
      </Radio.Group>
    );
    expect(handleChange.callCount).toBe(0);
    expect(wrapper.state('value')).toBe('A');

    wrapper.find('input').at(1).simulate('change', { target: { checked: true, value: 'B' } });

    wrapper.setProps({ value: 'B' });
    expect(handleChange.callCount).toBe(1);
    expect(wrapper.state('value')).toBe('B');
  });

  test('When Radio.group has null children, null should not be rendered', () => {
    const wrapper = mount(
      <Radio.Group defaultValue='A'>
        <Radio value='A'>A</Radio>
        <Radio value='B'>B</Radio>
        <Radio value='C'>C</Radio>
        <Radio value='D'>D</Radio>
        {null}
      </Radio.Group>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
