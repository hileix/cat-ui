import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import Table from '../index';
import '../../../styles/index.scss';
import './style.scss';
import DemoWrapper from '@utils/DemoWrapper';

const generateDataSource = (page: number, pageSize: number = 10) => {
  let arr: Array<{
    id: string;
    ranking: string;
    platforms: string;
    totalListen: string;
    rates: string;
  }> = [];
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  for (let i = start; i < end; i++) {
    arr.push({
      id: `${i}`,
      ranking: `ranking-${i}`,
      platforms: `platforms-${i}`,
      totalListen: `totalListen-${i}`,
      rates: `rates-${i}`
    });
  }
  return arr;
}

const columns = [
  {
    id: 'ranking',
    title: <span>ranking</span>,
    render: (text: any) => <a style={{ color: 'red' }}>{text}</a>
  },
  {
    id: 'platforms',
    title: <span>rplatforms</span>,
    render: (text: any, record: any) => {
      return (<a style={{ color: 'blue' }}>
        {text}---{record.rates}
      </a>)
    }
  },
  {
    id: 'totalListen',
    title: <span>platforms</span>
  },
  {
    id: 'rates',
    title: <span>platforms</span>
  }
];

const Demo1 = () => {
  const [dataSource1, setDataSource] = useState(generateDataSource(1, 5));
  const [dataSource2, setDataSource2] = useState(generateDataSource(1, 20));
  const [current, setCurrent] = useState(1);

  const handlePaginationChange = (page: number, pageSize?: number) => {
    setCurrent(page);
  }

  return (
    <>
      <DemoWrapper title='基础表格' desc='无分页'>
        <Table
          rowKey='id'
          columns={columns}
          dataSource={dataSource1}
        />
      </DemoWrapper>
      <DemoWrapper title='基础表格' desc='带分页'>
        <Table
          rowKey='id'
          columns={columns}
          dataSource={dataSource2}
          pagination={{
            current,
            total: dataSource2.length,
            pageSize: 5,
            onChange: handlePaginationChange
          }}
        />
      </DemoWrapper>
    </>
  )
}

const Demo2 = () => {
  const [current, setCurrent] = useState(1);
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState(generateDataSource(1, 5));

  const handlePaginationChange = (page: number, pageSize?: number) => {
    const dataSource = generateDataSource(page, pageSize);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setDataSource(dataSource);
    }, 1000)
    setCurrent(page);
  }
  return <DemoWrapper title='加载服务端数据'>
    <Table
      columns={columns}
      dataSource={dataSource}
      align='left'
      rowKey='id'
      pagination={{
        current,
        pageSize: 5,
        total: 100,
        onChange: handlePaginationChange
      }}
      loading={loading}
    />
  </DemoWrapper>
}

const Demo3 = () => {
  return <>
    <DemoWrapper title='空数据' desc='使用默认 empty 模板'>
      <Table
        columns={columns}
        dataSource={[]}
      />
    </DemoWrapper>
    <DemoWrapper title='自定义模板' desc='自定义 empty 模板'>
      <Table
        columns={columns}
        dataSource={[]}
        empty={<div>数据为空~</div>}
      />
    </DemoWrapper>
  </>
}

storiesOf('数据展示/Table 表格', module)
  .add('基础表格', () => <Demo1 />)
  .add('加载服务端数据', () => <Demo2></Demo2>)
  .add('空数据', () => <Demo3></Demo3>);
