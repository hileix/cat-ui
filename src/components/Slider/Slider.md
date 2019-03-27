Example

```jsx
class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (value) {
    this.setState({ value })
  }

  render () {
    const { value } = this.state

    return (
      <Slider value={value} onChange={this.handleChange} />
    )
  }
}
<div>
  <Slider defaultValue={50} />
  <App />
</div>
```
