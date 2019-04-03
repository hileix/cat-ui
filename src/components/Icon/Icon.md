Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='box'>
      <Icon type='share' />
      <Icon type='fb' />
      <Icon type='cp' />
      <Icon type='close' />
      <Icon type='question' />
      <Icon type='backward' />
      <Icon type='forward' />
      <Icon type='ring' />

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
