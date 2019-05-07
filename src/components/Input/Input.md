Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='input-box'>
      <Input className='item' />
      <Input className='item' placeholder='Please fill something' />
      <Input className='item' defaultValue='defaultValue' />
      <Input className='item' value='error msg is xxxx' error='server 500' />
      <Input className='item' theme='box' />
      <style>
        {`
          .input-box {
            padding: 5px;
          }
          .input-box .item{
            display: block;
            width: 200px;
            height: 50px;
          }
          .input-box .item + .item{
            margin: 15px 0 0 0;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
