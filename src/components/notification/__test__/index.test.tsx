import notification from '../index';

describe('notification', () => {
  test('renders one notification', () => {
    notification.success({
      title: 'success title',
      content: 'success content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(2);
  });

  test('renders two notification', () => {
    notification.warn({
      title: 'warn title',
      content: 'warn content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(4);
  });

  test('renders three notification', () => {
    notification.error({
      title: 'error title',
      content: 'error content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    console.log('dom:', dom);
    expect(dom.childNodes.length).toBe(6);
  });

  test('renders four notification', () => {
    notification.default({
      title: 'defaut title',
      content: 'default content'
    });
    const dom: any = document.querySelector('.cat-notification-container');
    expect(dom.childNodes.length).toBe(8);
  });
});
