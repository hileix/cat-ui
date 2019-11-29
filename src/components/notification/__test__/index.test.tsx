import * as React from 'react';
import * as Enzyme from 'enzyme';
import { mount } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import notification from '../index';
import Content from '../Content';

Enzyme.configure({ adapter: new Adapter() });

describe('notification', () => {
  test('renders one notification', () => {
    notification.success({
      title: 'success title',
      content: 'success content'
    });
    const dom = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(1);
  });

  test('renders two notification', () => {
    notification.warn({
      title: 'warn title',
      content: 'warn content'
    });
    const dom = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(2);
  });

  test('renders three notification', () => {
    notification.error({
      title: 'error title',
      content: 'error content'
    });
    const dom = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(3);
  });
});
