import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import message from '../index';

Enzyme.configure({ adapter: new Adapter() });

describe('message', () => {
  test('should be rendered and disappear after 1300ms', done => {
    message.success({ content: 'success content', duration: 1 });
    const messageDOM = document.querySelector('.cat-message--success');
    expect(messageDOM).toBeTruthy();
    setTimeout(() => {
      const messageDOM = document.querySelector('.cat-message--success');
      expect(messageDOM).toBeFalsy();
      done();
    }, 1310);
  });

  test('should be only one class with a value of cat-message-container when rendering two message', () => {
    message.warn({ content: 'warn content' });
    message.error({ content: 'error message' });
    const containerDOMs = document.querySelectorAll('.cat-message-container');
    expect(containerDOMs.length).toBe(1);
  });

  test('onClose should be called after the message has disappeared', done => {
    let isClose = false;
    const handleClose = () => {
      isClose = true;
    };
    message.success({
      content: 'success content',
      duration: 1,
      onClose: handleClose
    });
    setTimeout(() => {
      expect(isClose).toBeTruthy();
      done();
    }, 1310);
  });
});
