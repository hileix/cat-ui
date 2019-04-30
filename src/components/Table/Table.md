Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const columns1 = [{
      id: 'ranking',
      render: <span>ranking1111</span>
    }, {
      id: 'platforms',
      render: <span>rplatforms222</span>
    }, {
      id: 'totalListen',
      render: <span>platforms3333</span>
    }, {
      id: 'rates',
      render: <span>platforms444</span>
    }]

    const columns2 = [{
      id: 'ranking',
      filters: [{
        text: 'ranking1',
        value: 'ranking1',
      }, {
        text: 'ranking2',
        value: 'ranking2',
      }],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
      render: <span>ranking1111</span>
    }, {
      id: 'platforms',
      render: <span>rplatforms222</span>
    }, {
      id: 'totalListen',
      render: <span>platforms3333</span>
    }, {
      id: 'rates',
      render: <span>platforms444</span>
    }]

    const dataSource = [
      {
        ranking: 'ranking1',
        platforms: 'name1',
        totalListen: 'number1',
        rates: 'rate1'
      }, {
        ranking: 'ranking1',
        platforms: 'name1',
        totalListen: 'number1',
        rates: 'rate1'
      }, {
        ranking: 'ranking2',
        platforms: 'name2',
        totalListen: 'number2',
        rates: 'rate2'
      }, {
        ranking: 'ranking3',
        platforms: 'name3',
        totalListen: 'number3',
        rates: 'rate3'
      }
    ]

    const empty = (<div className='empty1'>
      <h4>title</h4>
      <p>empty empty empty text</p>
    </div>)

    return (<div className='table-box'>
      <h3>基础Table</h3>
      <Table
        columns={columns1}
        dataSource={dataSource}
        emptyText='空的模板' />

      {/*
      <h3>使用emptyText的Table</h3>
      <Table
        columns={[]}
        dataSource={[]}
        emptyText={`You don't have any premium transaction.`} />
      */}
       
      <h3>有筛选栏的Table</h3>
      <Table
        columns={columns2}
        dataSource={dataSource}
        emptyText='空的模板' />

      <h3>align=center的Table</h3>
      <Table
        columns={columns1}
        dataSource={dataSource}
        align='center'
        emptyText='空的模板' />

      <h3>自定义empty的Table</h3>
      <Table
        columns={[]}
        dataSource={[]}
        empty={empty} />
        
      <style>
        {`
          .table-box {
            padding: 5px;
          }
          .table-box .empty1 {
              text-align: center;
              color: red;
            }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
