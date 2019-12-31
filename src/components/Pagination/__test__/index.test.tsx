import React from 'react'
import { mount } from 'enzyme'
import Pagination from '../index'

describe('Pagination', () => {
  // reset dom
  afterEach(() => {
    (document.querySelector('body') as HTMLBodyElement).innerHTML = '';
  });
  beforeEach(() => {
    (document.querySelector('body') as HTMLBodyElement).innerHTML = '';
  });

  test('renders correctly', () => {
    const wrapper1 = mount(
      <Pagination total={100} />
    )
    expect(wrapper1).toMatchSnapshot();

    const wrapper2 = mount(
      <Pagination total={100} current={1} pageSize={10} />
    )
    expect(wrapper2).toMatchSnapshot();
  });

  test('Clicking on Prev, next, and page Numbers triggers the onChange event', () => {
    let current = 1, pageSize = 10, total = 100;
    const handleChange = (page: number, pageSize: number) => {
      current = page;
      pageSize = pageSize;
    }

    const wrapper = mount(
      <Pagination total={total} current={current} pageSize={pageSize} onChange={handleChange} />
    )

    let prevDOM = wrapper.find('.cat-pagination__prev').hostNodes();
    let pageItemDOM = wrapper.find('.cat-pagination__item').hostNodes();
    let nextDOM = wrapper.find('.cat-pagination__next').hostNodes();

    expect(prevDOM.exists('.cat-pagination__prev--disabled')).toBe(true);
    expect(pageItemDOM.exists('.cat-pagination__item--active')).toBe(true);
    expect(nextDOM.not('.cat-pagination__next--disabled')).toEqual({});

    // click prev button
    prevDOM.simulate('click');
    expect(current).toBe(1);

    // click next button
    nextDOM.simulate('click');
    expect(current).toBe(2)

    // click the last one pageItem
    pageItemDOM.last().simulate('click');
    expect(current).toBe(10)


  })

})
