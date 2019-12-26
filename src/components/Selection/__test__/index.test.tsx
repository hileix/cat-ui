import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Selection from '../index';
import Option from '../Option';
import ReactTestUtils from 'react-dom/test-utils'; 

describe('Option', () => {
  beforeEach(() => {
    document.querySelector('body').innerHTML = '';
  });
  test('option disabled', () => {
    const wrapper = mount(
      <Selection
        visible={false}
        defaultValue='选项 1'
        className='as'
        onSelect={this.handleSelect}
      >
        <Option disabled value='选项 1' />
        <Option value='选项 2' />
        <Option value='选项 3' />
      </Selection>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Option', () => {
  beforeEach(() => {
    document.querySelector('body').innerHTML = '';
  });
  test('option mouse event', () => {
    const wrapper = mount(
      <Selection
        visible
        defaultValue='选项 1'
        className='as'
        onSelect={this.handleSelect}
      >
        <Option className='my-option' value='选项 1'>
          <span id='span'>123</span>
        </Option>
        <Option value='选项 2' />
        <Option value='选项 3' />
      </Selection>
    );

    wrapper.find('.my-option').at(0).simulate('mouseenter');
    wrapper.find('.my-option').at(0).simulate('mouseleave');
    wrapper.find('.my-option').at(0).simulate('click');
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Selection', () => {
  test('renders correctly', () => {
    const wrapper = mount(
      <Selection
        visible
        value='选项 2'
        onSelect={this.handleSelect}
      >
        <Option className='option1' value='选项 1' />
        <Option value='选项 2' />
        <Option value='选项 3' />
        <Option value='选项 4' />
        <Option value='选项 5' />
        <Option />
        <Option>
          <span id='custom'>custom option</span>
        </Option>
      </Selection>
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Selection', () => {
  beforeEach(() => {
    document.querySelector('body').innerHTML = '';
  });
  test('keyboard event', () => {
    const wrapper = mount(
      <Selection
        visible
        value='选项 2'
        defaultValue='选项 1'
        className='my-selection'
        onSelect={this.handleSelect}
      >
        <Option className='option-1' value='选项 1' />
        <Option disabled className='option-2' value='选项 2' />
        <Option className='option-3' value='选项 3' />
      </Selection>
    );
    wrapper.find('.option-1').at(0).simulate('mouseenter');
    wrapper.find('.option-1').at(0).simulate('mouseleave');
    wrapper.find('.option-2').at(0).simulate('mouseenter');


    wrapper.find('.option-1').at(0).simulate('mouseenter');
    const event1 = new KeyboardEvent('keydown', {key: 'Enter'});
    document.dispatchEvent(event1);

    wrapper.find('.option-2').at(0).simulate('mouseenter');
    wrapper.find('.option-2').at(0).simulate('click');
    wrapper.find('.option-2').at(0).simulate('mouseleave');

    wrapper.find('.option-3').at(0).simulate('mouseenter');
    wrapper.find('.my-selection').at(0).simulate('keydown', {key: 'Down'});
    // const event2 = new KeyboardEvent('keydown', {key: 'Down'});
    // document.dispatchEvent(event2);


    wrapper.find('.option-2').at(0).simulate('mouseenter');
    const event3 = new KeyboardEvent('keydown', {key: 'Enter'});
    document.dispatchEvent(event3);

    expect(wrapper).toMatchSnapshot();
  });
});