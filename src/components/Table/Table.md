Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      currentPage: 2
    }
    this.onPageChange = this.onPageChange.bind(this)
    this.onFilterChange2 = this.onFilterChange2.bind(this)
    this.onPageChang3 = this.onPageChang3.bind(this)
  }

  onPageChange (page) {
    console.log('Example:onPageChange', page)
    this.setState({ currentPage: page })
  }

  onFilterChange2 (id, value) {
    console.log('Example:onFilterChange2', id, value)
  }

  onPageChang3 (page) {
    console.log('Example:onPageChang3', page)
  }

  render () {
    const { currentPage } = this.state
    const columns1 = [{
      id: 'ranking',
      title: <span>ranking1111</span>,
      render: text => <a style={{color: 'red'}} href="javascript:;">{text}</a>
    }, {
      id: 'platforms',
      title: <span>rplatforms222</span>,
      render: (text, record) => {
        return (<a style={{color: 'blue'}} href="javascript:;">
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
      filterAllText: 'All',
      filters: [{
        text: 'ranking1',
        value: 'ranking1',
      }, {
        text: 'ranking2',
        value: 'ranking2',
      }],
      onFilter: (value, record) => record.name.indexOf(value) === 0,
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
        ranking: 'ranking1',
        platforms: 'name1',
        totalListen: 'number1',
        rates: 'rate1'
      }, {
        ranking: 'ranking1',
        platforms: 'name2',
        totalListen: 'number1',
        rates: 'rate1'
      }, {
        ranking: 'ranking2',
        platforms: 'name3',
        totalListen: 'number2',
        rates: 'rate2'
      }, {
        ranking: 'ranking3',
        platforms: 'name4',
        totalListen: 'number3',
        rates: 'rate3'
      }, {
        ranking: 'ranking3',
        platforms: 'name5',
        totalListen: 'number4',
        rates: 'rate3'
      }, {
        ranking: 'ranking1',
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
      onChange: this.onPageChange
    }

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
        onFilterChange={this.onFilterChange2}
        emptyText='空的模板' />

      <h3>有分页的Table</h3>
      <Table
        columns={columns2}
        dataSource={dataSource}
        emptyText='空的模板'
        pagination={pagination1}
        onFilterChange={this.onFilterChange2}
        onPageChange={this.onPageChang3} />

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


### Table组件数据更新

```jsx
import Button from '../Button'
class Example2 extends React.Component {
  constructor (props) {
    super(props)
    let columns = [{
      id: 'id',
      title: <span>id</span>,
    },{
      id: 'name',
      title: <span>name</span>,
    }]
    this.state = {
      dataSource: [],
      columns
    }
    this.reflush = this.reflush.bind(this)
  }

  reflush () {
    this.setState({
      dataSource: [{
        id: 1, 
        name: 'aa'
      },{
        id: 2, 
        name: 'bb'
      }]
    })
  }

  render () {
    // console.log(this.state.dataSource)
    return (
      <div>
        <Button onClick={this.reflush}> 更新Table数据 </Button>
        <Table 
        columns={this.state.columns}
        dataSource={this.state.dataSource}
        empty={''}
        />
      </div>
    )
  }
}
<Example2 />
```
