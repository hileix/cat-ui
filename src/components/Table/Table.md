Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const columns = [{
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

    const dataSource = [
      {
        ranking: () => {
          return (<span>ranking1</span>)
        },
        platforms: () => {
          return (<span>name1</span>)
        },
        totalListen: () => {
          return (<span>number1</span>)
        },
        rates: () => {
          return (<span>rate1</span>)
        }
      }, {
        ranking: () => {
          return (<span>ranking2</span>)
        },
        platforms: () => {
          return (<span>name2</span>)
        },
        totalListen: () => {
          return (<span>number2</span>)
        },
        rates: () => {
          return (<span>rate2</span>)
        }
      }, {
        ranking: () => {
          return (<span>ranking3</span>)
        },
        platforms: () => {
          return (<span>name3</span>)
        },
        totalListen: () => {
          return (<span>number3</span>)
        },
        rates: () => {
          return (<span>rate3</span>)
        }
      }
    ]

    const empty = (<div className='empty1'>
      <h4>title</h4>
      <p>empty empty empty text</p>
    </div>)

    return (<div className='table-box'>
      <h3>基础Table</h3>
      <Table
        columns={columns}
        dataSource={dataSource}
        emptyText='空的模板' />

      {/*
      <h3>使用emptyText的Table</h3>
      <Table
        columns={[]}
        dataSource={[]}
        emptyText={`You don't have any premium transaction.`} />
      */}
       
      <h3>自定义empty的Table</h3>
      <Table
        columns={[]}
        dataSource={[]}
        empty={empty} />
      
      <h3>align=center的Table</h3>
      <Table
        columns={columns}
        dataSource={dataSource}
        emptyText='空的模板' />
        
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
