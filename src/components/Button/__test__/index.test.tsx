import * as React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

describe('Button', () => {
  test('renders correctly', () => {
    const wrapper = shallow(<Button>Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders props:style', () => {
    const wrapper = shallow(<Button style={{ fontSize: 24 }}>Button</Button>);
    const style = wrapper.find('button').props().style;
    expect(style).toEqual({ fontSize: 24 });
  });
  test('renders props:loading', () => {
    const wrapper = shallow(<Button loading>Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });
  test('renders props:loading,type', () => {
    const wrapper = shallow(
      <Button loading type='primary'>
        Button
      </Button>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
