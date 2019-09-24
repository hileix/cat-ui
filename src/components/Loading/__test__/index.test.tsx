import * as React from 'react';
import * as Enzyme from 'enzyme';
import { render } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Loading from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Loading', () => {
  test('props: visible=false', () => {
    const wrapper = render(<Loading visible={false} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('props: visible=true', () => {
    const wrapper = render(<Loading visible={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
