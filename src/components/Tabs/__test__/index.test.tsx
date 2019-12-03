import * as React from 'react';
import { render } from 'enzyme';
import Tabs from '../index';

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
