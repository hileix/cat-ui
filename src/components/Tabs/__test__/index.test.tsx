import * as React from 'react';
import * as Enzyme from 'enzyme';
import { render } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Tabs from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Tabs', () => {
  test('renders correctly', () => {
    const wrapper = render(<Tabs activeId='1'>Test</Tabs>);
    expect(wrapper).toMatchSnapshot();

    const wrapper2 = render(
      <Tabs activeId='1' tabBarExtraContent={'tabBarExtraContent'}>
        Test
      </Tabs>
    );
    expect(wrapper2).toMatchSnapshot();
  });
});
