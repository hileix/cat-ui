import React from 'react';
import { mount, shallow } from 'enzyme';
import Popover from '../index';
import sinon from 'sinon';
import { getModeArray, positionNameConvert, getPosition } from '../utils';

describe('Popover', () => {
  // reset dom
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('renders correctly', () => {
    const wrapper = mount(
      <Popover>
        <Popover.Trigger>
          <span>popover trigger</span>
        </Popover.Trigger>
        <Popover.Content>
          {function() {
            return <div>popover content</div>;
          }}
        </Popover.Content>
      </Popover>
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.unmount();
  });

  test('An error is reported when there are no two children in a popover', () => {
    // children count 1
    expect(() => {
      shallow(
        <Popover>
          <Popover.Trigger>
            <span>popover trigger</span>
          </Popover.Trigger>
        </Popover>
      );
    }).toThrow();
  });

  test('When you click on the popover trigger, the popover content is displayed', () => {
    const wrapper = mount(
      <Popover mode='click'>
        <Popover.Trigger>
          <span className='my-trigger'>popover trigger</span>
        </Popover.Trigger>
        <Popover.Content>
          {function(visible: boolean) {
            return (
              visible && (
                <div className='my-popover-content'>popover content</div>
              )
            );
          }}
        </Popover.Content>
      </Popover>
    );
    expect(wrapper.exists('.my-popover-content')).toBe(false);

    // show
    wrapper.find('.my-trigger').simulate('click');
    expect(wrapper.exists('.my-popover-content')).toBe(true);

    // const wrapper2 = mount(<div className='click-div'>click</div>);
    // wrapper2.find('.click-div').simulate('click');
    // // hide
    // expect(wrapper.exists('.my-popover-content')).toBe(false);
  });

  test('When you hover on the popover trigger, the popover content is displayed', () => {
    const wrapper = mount(
      <Popover mode='hover'>
        <Popover.Trigger>
          <span className='my-trigger'>popover trigger</span>
        </Popover.Trigger>
        <Popover.Content>
          {function(visible: boolean) {
            return (
              visible && (
                <div className='my-popover-content'>popover content</div>
              )
            );
          }}
        </Popover.Content>
      </Popover>
    );

    expect(wrapper.exists('.my-popover-content')).toBe(false);

    // show
    wrapper.find('.my-trigger').simulate('mouseenter');
    expect(wrapper.exists('.my-popover-content')).toBe(true);

    // hide
    wrapper.find('.my-trigger').simulate('mouseleave');
    expect(wrapper.exists('.my-popover-content')).toBe(false);
  });

  test('Click, mouseenter, mouseleave events of trigger element bindings will be triggered', () => {
    const clickCallback = sinon.spy();
    const mouseEnterCallback = sinon.spy();
    const mouseLeaveCallback = sinon.spy();

    const wrapper = mount(
      <Popover mode={['click', 'hover']}>
        <Popover.Trigger>
          <span
            className='my-trigger'
            onClick={clickCallback}
            onMouseEnter={mouseEnterCallback}
            onMouseLeave={mouseLeaveCallback}
          >
            popover trigger
          </span>
        </Popover.Trigger>
        <Popover.Content>
          {function(visible: boolean) {
            return (
              visible && (
                <div className='my-popover-content'>popover content</div>
              )
            );
          }}
        </Popover.Content>
      </Popover>
    );

    const myTriggerWrapper = wrapper.find('.my-trigger');

    // click
    expect(clickCallback.callCount).toBe(0);
    myTriggerWrapper.simulate('click');
    expect(clickCallback.callCount).toBe(1);

    // mouseEnter
    expect(mouseEnterCallback.callCount).toBe(0);
    myTriggerWrapper.simulate('mouseenter');
    expect(mouseEnterCallback.callCount).toBe(1);

    // mouseEnter
    expect(mouseLeaveCallback.callCount).toBe(0);
    myTriggerWrapper.simulate('mouseleave');
    expect(mouseLeaveCallback.callCount).toBe(1);
  });
});

describe('Popover utils', () => {
  // reset dom
  afterEach(() => {
    (document.querySelector('body') as any).innerHTML = '';
  });

  test('getModeArray', () => {
    const result1 = getModeArray('click');
    expect(result1).toEqual(['click']);

    const result2 = getModeArray(['click', 'hover']);
    expect(result2).toEqual(['click', 'hover']);
  });

  test('getPosition', () => {
    // const triggerDOM = document.createElement('div');
    // triggerDOM.style.position = 'fixed';
    // triggerDOM.style.left = '100px';
    // triggerDOM.style.top = '100px';

    // const contentDOM = document.createElement('div');
    // contentDOM.style.width = '20px';
    // contentDOM.style.height = '20px';

    // document.body.append(triggerDOM, contentDOM);

    // const result1 = getPosition(
    //   triggerDOM,
    //   contentDOM,
    //   ['left', 'top'],
    //   ['left', 'bottom'],
    //   0,
    //   0,
    //   'body'
    // );

    // expect(result1).toEqual({ position: 'absolute', left: 100, top: 80 });
  });

  test('positionNameConvert', () => {
    const result1 = positionNameConvert('top');
    const result2 = positionNameConvert('topLeft');
    const result3 = positionNameConvert('topRight');
    const result4 = positionNameConvert('right');
    const result5 = positionNameConvert('rightTop');
    const result6 = positionNameConvert('rightBottom');
    const result7 = positionNameConvert('bottom');
    const result8 = positionNameConvert('bottomLeft');
    const result9 = positionNameConvert('bottomRight');
    const result10 = positionNameConvert('left');
    const result11 = positionNameConvert('leftTop');
    const result12 = positionNameConvert('leftBottom');

    const result13 = positionNameConvert('errorName' as 'left');

    expect(result1).toEqual({
      triggerPosition: ['center', 'top'],
      contentPosition: ['center', 'bottom']
    });
    expect(result2).toEqual({
      triggerPosition: ['left', 'top'],
      contentPosition: ['left', 'bottom']
    });
    expect(result3).toEqual({
      triggerPosition: ['right', 'top'],
      contentPosition: ['right', 'bottom']
    });
    expect(result4).toEqual({
      triggerPosition: ['right', 'center'],
      contentPosition: ['left', 'center']
    });
    expect(result5).toEqual({
      triggerPosition: ['right', 'top'],
      contentPosition: ['left', 'top']
    });
    expect(result6).toEqual({
      triggerPosition: ['right', 'bottom'],
      contentPosition: ['left', 'bottom']
    });
    expect(result7).toEqual({
      triggerPosition: ['center', 'bottom'],
      contentPosition: ['center', 'top']
    });
    expect(result8).toEqual({
      triggerPosition: ['left', 'bottom'],
      contentPosition: ['left', 'top']
    });
    expect(result9).toEqual({
      triggerPosition: ['right', 'bottom'],
      contentPosition: ['right', 'top']
    });
    expect(result10).toEqual({
      triggerPosition: ['left', 'center'],
      contentPosition: ['right', 'center']
    });
    expect(result11).toEqual({
      triggerPosition: ['left', 'top'],
      contentPosition: ['right', 'top']
    });
    expect(result12).toEqual({
      triggerPosition: ['left', 'bottom'],
      contentPosition: ['right', 'bottom']
    });
    expect(result13).toEqual({
      triggerPosition: ['center', 'top'],
      contentPosition: ['center', 'bottom']
    });
  });
});
