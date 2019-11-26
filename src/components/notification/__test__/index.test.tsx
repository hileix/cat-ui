import * as React from 'react';
import * as Enzyme from 'enzyme';
import { render, mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  test('renders correctly', () => {
    const wrapper = render(<Button>Button</Button>);
    expect(wrapper).toMatchSnapshot();
  });

  // test('renders characters: Chinese, Japanese', () => {
  //   const wrapper1 = render(<Button>按钮</Button>)
  //   const wrapper2 = render(<Button>ヒマラヤ</Button>)
  //   expect(wrapper1).toMatchSnapshot()
  //   expect(wrapper2).toMatchSnapshot()
  // })

  // test('props: size', () => {
  //   const wrapper1 = render(<Button size='sm'>sm</Button>)
  //   const wrapper2 = render(<Button size='md'>md</Button>)
  //   const wrapper3 = render(<Button size='lg'>lg</Button>)
  //   expect(wrapper1).toMatchSnapshot()
  //   expect(wrapper2).toMatchSnapshot()
  //   expect(wrapper3).toMatchSnapshot()
  // })

  // test('props: theme', () => {
  //   const wrapper1 = render(<Button theme='primary'>primary</Button>)
  //   const wrapper2 = render(<Button theme='yellow'>yellow</Button>)
  //   const wrapper3 = render(<Button theme='white-primary'>white-primary</Button>)
  //   const wrapper4 = render(<Button theme='white-cyan'>white-cyan</Button>)
  //   const wrapper5 = render(<Button theme='borderless'>borderless</Button>)
  //   expect(wrapper1).toMatchSnapshot()
  //   expect(wrapper2).toMatchSnapshot()
  //   expect(wrapper3).toMatchSnapshot()
  //   expect(wrapper4).toMatchSnapshot()
  //   expect(wrapper5).toMatchSnapshot()
  // })

  // test('props: block', () => {
  //   const wrapper = render(<Button block>block</Button>)
  //   expect(wrapper).toMatchSnapshot()
  // })

  // test('props: disabled', () => {
  //   const wrapper = render(<Button disabled>disabled</Button>)
  //   expect(wrapper).toMatchSnapshot()
  // })

  // test('props: onClick', () => {
  //   let isClicked = false
  //   const wrapper = mount(<Button onClick={() => {isClicked = true}}>Button</Button>)
  //   wrapper.simulate('click')
  //   expect(isClicked).toBe(true)
  // })

  // test('props: disabled && onClick', () => {
  //   let isClicked = false
  //   const wrapper = mount(<Button disabled onClick={() => {isClicked = true}}>disabled</Button>)
  //   wrapper.simulate('click')
  //   expect(isClicked).toBe(false)
  // })
});
