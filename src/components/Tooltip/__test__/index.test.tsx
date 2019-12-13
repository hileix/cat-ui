import React from 'react';
import Enzyme from 'enzyme';
import { shallow, mount } from 'enzyme';
// import * as Adapter from 'enzyme-adapter-react-16';
import Tooltip from '../index';

// Enzyme.configure({ adapter: new Adapter() });

describe('Tooltip', () => {
  test('renders correctly', () => {
    const wrapper1 = shallow(
      <Tooltip content='tooltip content' position='top'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper2 = shallow(
      <Tooltip content='tooltip content' position='topLeft'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper3 = shallow(
      <Tooltip content='tooltip content' position='topRight'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper4 = shallow(
      <Tooltip content='tooltip content' position='right'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper5 = shallow(
      <Tooltip content='tooltip content' position='rightTop'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper6 = shallow(
      <Tooltip content='tooltip content' position='rightBottom'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper7 = shallow(
      <Tooltip content='tooltip content' position='bottom'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper8 = shallow(
      <Tooltip content='tooltip content' position='bottomLeft'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper9 = shallow(
      <Tooltip content='tooltip content' position='bottomRight'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper10 = shallow(
      <Tooltip content='tooltip content' position='left'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper11 = shallow(
      <Tooltip content='tooltip content' position='leftTop'>
        <span>trigger</span>
      </Tooltip>
    );
    const wrapper12 = shallow(
      <Tooltip content='tooltip content' position='leftBottom'>
        <span>trigger</span>
      </Tooltip>
    );
    expect(wrapper1).toMatchSnapshot();
    expect(wrapper2).toMatchSnapshot();
    expect(wrapper3).toMatchSnapshot();
    expect(wrapper4).toMatchSnapshot();
    expect(wrapper5).toMatchSnapshot();
    expect(wrapper6).toMatchSnapshot();
    expect(wrapper7).toMatchSnapshot();
    expect(wrapper8).toMatchSnapshot();
    expect(wrapper9).toMatchSnapshot();
    expect(wrapper10).toMatchSnapshot();
    expect(wrapper11).toMatchSnapshot();
    expect(wrapper12).toMatchSnapshot();
  });

  test('When you click trigger, the content should be displayed.', () => {
    const wrapper = mount(
      <Tooltip mode='click' content='tooltip content' position='top'>
        <span className='my-trigger'>trigger</span>
      </Tooltip>
    );
    wrapper.find('.my-trigger').simulate('click');
    let popoverContentDOM = document.querySelector(
      '.cat-tooltip__content--top'
    );
    expect(popoverContentDOM instanceof HTMLElement).toEqual(true);
  });

  test('When you click trigger, the content should be displayed', () => {
    const wrapper = mount(
      <Tooltip mode='click' content='tooltip content' position='top'>
        <span className='my-trigger'>trigger</span>
      </Tooltip>
    );
    wrapper.find('.my-trigger').simulate('click');
    const popoverContentDOM = document.querySelector(
      '.cat-tooltip__content--top'
    );
    expect(popoverContentDOM instanceof HTMLElement).toEqual(true);
  });
  
  test('When you mouseover trigger, the content should be displayed', () => {
    const wrapper = mount(
      <Tooltip mode='click' content='tooltip content' position='top'>
        <span className='my-trigger'>trigger</span>
      </Tooltip>
    );
    wrapper.find('.my-trigger').simulate('mouseover');
    const popoverContentDOM = document.querySelector(
      '.cat-tooltip__content--top'
    );
    expect(popoverContentDOM instanceof HTMLElement).toEqual(true);
  });
});
