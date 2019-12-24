import * as React from 'react';
import * as Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Search from '../index';

Enzyme.configure({ adapter: new Adapter() });

// describe('Search', () => {
//   test('renders correctly', () => {
//     const wrapper = shallow(
//       <Search />
//     );
//     expect(wrapper).toMatchSnapshot();
//   });
//   test('renders size={20}', () => {
//     const wrapper = shallow(
//       <Search />
//     );
//     const style = wrapper.find('.cat-avatar').props().style;
//     expect(style).toEqual({ width: 50, height: 50, lineHeight: 50 });
//   });
// });
