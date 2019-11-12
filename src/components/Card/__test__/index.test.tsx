import * as React from 'react';
import * as Enzyme from 'enzyme';
import { render, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Card from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Card', () => {
  test('renders correctly', () => {
    const wrapper = render(<Card>Card component</Card>);
    expect(wrapper).toMatchSnapshot();
  });
});
