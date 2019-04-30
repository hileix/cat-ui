Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      current1: 2,
      current2: 6
    }
    this.onChange1 = this.onChange1.bind(this)
    this.onChange2 = this.onChange2.bind(this)
  }

  onChange1 (page) {
    this.setState({ current1 : page})
    console.log('Example:onChange1', page)
  }

  onChange2 (page) {
    this.setState({ current2 : page})
    console.log('Example:onChange2', page)
  }

  render () {
    const { current1, current2 } = this.state
    return (<div className='pagination-box'>
      <h3>基础Pagination</h3>
      <Pagination
        current={current1}
        total={85}
        onChange={this.onChange1} />
      
      <h3>基础Pagination</h3>
      <Pagination
        current={current2}
        total={185}
        onChange={this.onChange2} />

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
