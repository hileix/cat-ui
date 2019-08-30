Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='tag-box'>
      <Tag className='default-tag'>
        default
      </Tag>

      <Tag borderColor='#ff6c6c' bgColor='#ff6c6c' textColor='#fff'>
        default
      </Tag>

      <style>
        {`
          .tag-box {
            padding: 5px;
          }
          .default-tag {
            margin-right: 8px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
