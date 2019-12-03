import * as React from 'react';
import { render } from 'enzyme';
import Icon from '../index';

describe('Icon', () => {
  test('renders correctly', () => {
    const wrapper = render(<Icon type='close' />);
    expect(wrapper).toMatchSnapshot();
  });
});
