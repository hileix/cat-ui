import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../index';
import '../../../styles/index.scss';
import './style.scss';

const Demo1 = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const [isDraggable, setIsDraggable] = useState(true);

  const onPageChange = (page: any) => {
    setCurrentPage(page);
  }

  const onFilterChange2 = (id: any, value: any) => {
    console.log('Example:onFilterChange2', id, value)
    return {}
  }

  const onPageChang3 = (page: number) => {
    console.log('Example:onPageChang3', page)
    return {}
  }

  const onSort1 = (sortedIds: any, id: any) => {
    console.log('Example:onSort1', sortedIds, id)
    return {}
  }

  const columns1 = [{
    id: 'ranking',
    title: <span>ranking1111</span>,
    render: text => <a style={{ color: 'red' }}>{text}</a>
  }, {
    id: 'platforms',
    title: <span>rplatforms222</span>,
    render: (text, record) => {
      return (<a style={{ color: 'blue' }}>
        {text}---{record.rates}
      </a>)
    }
  }, {
    id: 'totalListen',
    title: <span>platforms3333</span>
  }, {
    id: 'rates',
    title: <span>platforms444</span>
  }]

  const columns2 = [{
    id: 'ranking',
    defaultFilterKey: 0,
    filters: [{
      text: 'all',
      key: 0,
    }, {
      text: 'ranking1',
      key: 'ranking1',
    }, {
      text: 'ranking2',
      key: 'ranking2',
    }],
    title: <span>ranking1111</span>
  }, {
    id: 'platforms',
    title: <span>rplatforms222</span>
  }, {
    id: 'totalListen',
    title: <span>platforms3333</span>
  }, {
    id: 'rates',
    title: <span>platforms444</span>
  }]

  const dataSource = [
    {
      id: 'id11',
      key1: 'id11',
      ranking: 'ranking1',
      platforms: 'name1',
      totalListen: 'number1',
      rates: 'rate1'
    }, {
      id: 'id12',
      key1: 'id12',

      draggable: false,
      ranking: 'ranking2',
      platforms: 'name2',
      totalListen: 'number1',
      rates: 'rate1'
    }, {
      id: 'id13',
      key1: 'id13',

      ranking: 'ranking3',
      platforms: 'name3',
      totalListen: 'number2',
      rates: 'rate2'
    }, {
      id: 'id14',
      key1: 'id14',
      ranking: 'ranking4',
      platforms: 'name4',
      totalListen: 'number3',
      rates: 'rate3'
    }, {
      id: 'id15',
      key1: 'id15',

      ranking: 'ranking5',
      platforms: 'name5',
      totalListen: 'number4',
      rates: 'rate3'
    }, {
      id: 'id16',
      key1: 'id16',
      ranking: 'ranking6',
      platforms: 'name6',
      totalListen: (<div className='action'>
        <p>111111</p>
        <p>22222</p>
      </div>),
      rates: (<span className='action'>...</span>)
    }
  ]

  const empty = (<div className='empty1'>
    <h4>title</h4>
    <p>empty empty empty text</p>
  </div>)

  const pagination1 = {
    current: currentPage,
    total: dataSource.length,
    pageSize: 2,
    onChange: onPageChange
  }

  const pagination2 = {
    current: currentPage,
    total: 100,
    pageSize: 10,
    onChange: onPageChange
  }

  return (<div className='table-box'>
    <Table
      columns={columns1}
      dataSource={dataSource}
      // empty={<div>empty</div>}
      align='left'
      rowKey='id'
    />
  </div>
  )
}


storiesOf('Table 表格', module)
  .add('Table', () => <Demo1 />);
