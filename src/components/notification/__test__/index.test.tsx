import notification from '../index';

describe('notification', () => {
  test('renders one notification', () => {
    notification.success({
      title: 'success title',
      content: 'success content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(1);
  });

  test('renders two notification', () => {
    notification.warn({
      title: 'warn title',
      content: 'warn content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(2);
  });

  test('renders three notification', () => {
    notification.error({
      title: 'error title',
      content: 'error content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(3);
  });
});
