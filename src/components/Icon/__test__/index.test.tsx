import * as React from 'react';
import * as Enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Icon from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Icon', () => {
  test('renders correctly', () => {
    const wrapper = render(<Icon type='close' />);
    expect(wrapper).toMatchSnapshot();
  });
});
