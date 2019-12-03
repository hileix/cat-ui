import * as React from 'react';
import { shallow } from 'enzyme';
import Avatar from '../index';

describe('Avatar', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <Avatar src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png' />
    );
    expect(wrapper).toMatchSnapshot();
  });
  test('renders size={20}', () => {
    const wrapper = shallow(
      <Avatar
        size={50}
        src='https://raw.githubusercontent.com/sialvsic/static-host/master/public/laptop.png'
      />
    );
    const style = wrapper.find('.cat-avatar').props().style;
    expect(style).toEqual({ width: 50, height: 50, lineHeight: 50 });
  });
});
