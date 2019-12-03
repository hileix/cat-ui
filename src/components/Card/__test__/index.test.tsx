import * as React from 'react';
import { render } from 'enzyme';
import Card from '../index';

describe('Card', () => {
  test('renders correctly', () => {
    const wrapper = render(<Card>Card component</Card>);
    expect(wrapper).toMatchSnapshot();
  });
});
