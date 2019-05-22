Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onSwitchChange = this.onSwitchChange.bind(this)
  }

  onSwitchChange (value) {
    console.log(123)
    this.setState({
      switchOpen: value,
      earlyAccessDisplayTime: value ? 86400 : 0
    })
  }

  render () {
    const { switchOpen } = this.state
    console.log(switchOpen)
    return (<div className='switch-box'>
      <Switch onChange={this.onSwitchChange } checked={switchOpen} />
      <style>
        {`
          .switch-box {
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
