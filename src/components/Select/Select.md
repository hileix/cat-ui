Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='select-box'>
      <Select>
        test
      </Select>

      <style>
        {`
          .select-box {
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
