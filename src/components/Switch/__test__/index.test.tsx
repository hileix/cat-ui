import React from 'react';
import Enzyme from 'enzyme';
import { mount } from 'enzyme';
import Switch from '../index';
import sinon from 'sinon';


describe('Switch', () => {
  // reset dom
  beforeEach(() => {
    document.body.innerHTML = '';
  });
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renders correctly', () => {
    const wrapper = mount(
      <Switch />
    )
    expect(wrapper).toMatchSnapshot()
  });

  test('defaultChecked and checked props', () => {
    const wrapper1 = mount(
      <Switch defaultChecked />
    );
    expect(wrapper1.state('checked')).toBe(true);

    const wrapper2 = mount(
      <Switch checked />
    );
    expect(wrapper2.state('checked')).toBe(true);

    const wrapper3 = mount(
      <Switch defaultChecked={false} checked={true} />
    );
    expect(wrapper3.state('checked')).toBe(true);
  });

  test('disabled props', () => {
    const wrapper = mount(
      <Switch disabled={true} />
    );
    expect(wrapper.state('checked')).toBe(false);

    const button = wrapper.find('button');
    button.simulate('click');

    expect(wrapper.state('checked')).toBe(false);
  });

  test('auto focus', () => {
    const wrapper = mount(
      <Switch autoFocus></Switch>
    );

    const buttonDOM = wrapper.find('button').getDOMNode();
    const activeElement = document.activeElement;

    expect(buttonDOM).toBe(activeElement)
  });

  test('When mouseup is triggered, the switch loses focus', () => {
    const wrapper = mount(
      <Switch></Switch>
    );

    const button = wrapper.find('button');
    button.simulate('click');

    const activeElement = document.activeElement;

    expect(button).not.toBe(activeElement)
  });

  test('The left and right keys switch the Switch state correctly', () => {
    const wrapper = mount(
      <Switch></Switch>
    );

    expect(wrapper.state('checked')).toBe(false);
    const button = wrapper.find('button');
    // right
    button.simulate('keydown', {
      keyCode: 39,
    });
    expect(wrapper.state('checked')).toBe(true);
    // left
    button.simulate('keydown', {
      keyCode: 37,
    });
    expect(wrapper.state('checked')).toBe(false);
  });

  test('callbacks triggered', () => {
    const mouseupCallback = sinon.spy();

    const wrapper = mount(
      <Switch onMouseUp={mouseupCallback}></Switch>
    );

    expect(mouseupCallback.callCount).toBe(0);

    const button = wrapper.find('button');
    button.simulate('mouseup');

    expect(mouseupCallback.callCount).toBe(1);



  });
})
