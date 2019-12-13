import React from 'react';
import { mount } from 'enzyme';

import Popover from '../index';

describe('Popover', () => {
  test('renders correctly', () => {
    const wrapper = mount(
      <Popover>
        <Popover.Trigger>
          <span>popover trigger</span>
        </Popover.Trigger>
        <Popover.Content>
          {function() {
            return <div>popover content</div>;
          }}
        </Popover.Content>
      </Popover>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('When you click on the popover trigger, the popover content is displayed', () => {
    const wrapper = mount(
      <Popover mode='click'>
        <Popover.Trigger>
          <span className='my-trigger'>popover trigger</span>
        </Popover.Trigger>
        <Popover.Content>
          {function(visible: boolean) {
            return (
              visible && (
                <div className='my-popover-content'>popover content</div>
              )
            );
          }}
        </Popover.Content>
      </Popover>
    );

    expect(wrapper.exists('.my-popover-content')).toBe(false);

    wrapper.find('.my-trigger').simulate('click');

    expect(wrapper.exists('.my-popover-content')).toBe(true);
  });
});

describe('Popover utils', () => {
  test('renders correctly', () => {
    const wrapper = mount(
      <Popover mode='click'>
        <Popover.Trigger>
          <span>popover trigger</span>
        </Popover.Trigger>
        <Popover.Content>
          {function() {
            return <div>popover content</div>;
          }}
        </Popover.Content>
      </Popover>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
