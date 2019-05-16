Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='tooltip-box'>
      <Tooltip content='Tooltip content'>
        test
      </Tooltip>

      <style>
        {`
          .tooltip-box {
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
