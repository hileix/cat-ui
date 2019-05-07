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
      <Input className='item err' value='test value' error message='error msg is xxxx' />
      <Input className='item' theme='box' />
      <Input className='item' theme='box' placeholder='Please fill number' />
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
          .input-box .item + .item.err{
            margin-bottom: 30px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
