import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Selection from '../index';
import Option from '../Option';

Enzyme.configure({ adapter: new Adapter() });

describe('Selection', () => {
  test('renders correctly', () => {
    const wrapper = shallow(
      <Selection
        open
        value='选项 2'
        onSelect={this.handleSelect}
      >
        <Option className='qwer' value='选项 1' />
        <Option value='选项 2' />
        <Option value='选项 3' />
        <Option value='选项 4' />
        <Option value='选项 5' />
      </Selection>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
