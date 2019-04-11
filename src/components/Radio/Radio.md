Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeId1: 3
    }
    this.onRadioChange = this.onRadioChange.bind(this)
  }

  onRadioChange (id) {
    this.setState({ activeId1: id })
  }

  render () {
    const { activeId1 } = this.state
    return (<div className='radio-box'>
      <h3>单独使用</h3>
      <Radio value={1}>1</Radio>
      <Radio checked value={2}>2</Radio>
      <h3>结合Radio.Group使用</h3>
      <Radio.Group value={activeId1} onChange={this.onRadioChange}>
        <Radio value={1}>1</Radio>
        <Radio value={2}>2</Radio>
        <Radio value={3}>3</Radio>
        <Radio value={4}>4</Radio>
        <Radio value={5} shape='hook'>5</Radio>
      </Radio.Group>

      <style>
        {`
          .radio-box {
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
