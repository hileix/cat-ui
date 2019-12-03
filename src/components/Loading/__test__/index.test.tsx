import * as React from 'react';
import { render } from 'enzyme';
import Loading from '../index';

describe('Loading', () => {
  test('props: visible={false}', () => {
    const wrapper = render(<Loading visible={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('props: visible={true}', () => {
    const wrapper = render(<Loading visible />);
    expect(wrapper).toMatchSnapshot();
  });

  test(`props: className='my-loading'`, () => {
    const wrapper = render(<Loading visible className='my-loading' />);
    expect(wrapper).toMatchSnapshot();
  });

  test('props: size={18}', () => {
    const wrapper = render(<Loading visible className='my-loading' />);
    expect(wrapper).toMatchSnapshot();
  });
});
