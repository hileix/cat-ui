Example

```jsx
const Option = Select.Option;

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='select-box'>
      <Select className='select1' placeholder='Choose Price'>
        <Option value='1'>Option 1</Option>
        <Option value='2'>Option 2</Option>
        <Option value='3'>Option 3</Option>
      </Select>

      <style>
        {`
          .select-box .select1 {
            width: 316px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
