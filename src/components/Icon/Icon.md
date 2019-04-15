Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('Example:handleClick')
  }

  render () {
    return (<div className='box'>
      <Icon type='question-circle' onClick={this.handleClick} />
      <Icon type='question' />
      <Icon type='share3' />
      <Icon type='share2' />
      <Icon type='share1' />
      <Icon type='more' />
      <Icon type='stats' />
      <Icon type='forward' />
      <Icon type='backward' />
      <Icon type='ins' />
      <Icon type='twitter' />
      <Icon type='facebook' />
      <Icon type='crown' />
      <Icon type='early-access' />
      <Icon type='hi-circle' />
      <Icon type='ad-free' />
      <Icon type='close' />

      <style>
        {`
          .hmly-icon + .hmly-icon {
            margin-left: 20px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
