import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Avatar from '../index';

Enzyme.configure({ adapter: new Adapter() });

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
