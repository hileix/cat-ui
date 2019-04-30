Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current1: 2
    }
    this.onChange1 = this.onChange1.bind(this)
  }

  onChange1 (page) {
    this.setState({ current1 : page})
    console.log('Example:onChange1', page)
  }

  render () {
    const { current1 } = this.state
    return (<div className='pagination-box'>
      <Pagination
        current={current1}
        total={85}
        onChange={this.onChange1} />

      <style>
        {`
          .pagination-box {
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
