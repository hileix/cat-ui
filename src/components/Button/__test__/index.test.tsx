import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

Enzyme.configure({ adapter: new Adapter() });

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
