import * as React from 'react';
import * as Enzyme from 'enzyme';
import { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Loading from '../index';

Enzyme.configure({ adapter: new Adapter() });

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
