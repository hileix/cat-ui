Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const columns = [{
      dataIndex: 'ranking',
      render: <span>ranking1111</span>
    }, {
      dataIndex: 'platforms',
      render: <span>platforms2333</span>
    }, {
      dataIndex: 'totalListen',
      render: <span>platforms3333</span>
    }, {
      dataIndex: 'rates',
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

    console.log('Table', Table)
    return (<div className='box'>
      <Table
        align='center'
        columns={columns}
        emptyText='空的模板'
        dataSource={dataSource} />

      <style>
        {`
          .box {
            padding: 5px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
