import * as React from 'react';
import * as Enzyme from 'enzyme';
import { Component } from 'react';
import { render, mount } from 'enzyme';
import * as renderer from 'react-test-renderer';
import * as Adapter from 'enzyme-adapter-react-16';
import Button from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('Button', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <Button>Follow</Button>
    );
    expect(wrapper).toMatchSnapshot();
  });

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
  });

  test('mount correctly', () => {
    if (process.env.REACT === '15') {
      return;
    }
    expect(() => renderer.create(<Button>Follow</Button>)).not.toThrow();
  });

})
