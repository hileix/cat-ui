Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='input-box'>
      <span className='hint' >
        线型输入框:
      </span>
      <Input className='item' />
      <span className='hint' >
        线型输入框带清除按钮:
      </span>
      <Input className='item' showClear />
      <span className='hint' >
        线型密码输入框:
      </span>
      <Input className='item' type='line-pwd' />
      <span className='hint' >
        线型密码输入框带眼睛按钮:
      </span>
      <Input className='item' type='line-pwd' showEye />
      <span className='hint' >
        线型输入框带占位符:
      </span>
      <Input className='item' placeholder='Please fill something' />
      <span className='hint' >
        线型输入框带默认值:
      </span>
      <Input className='item' defaultValue='defaultValue' />
      <span className='hint' >
        线型输入框错误展示:
      </span>
      <Input className='item err' value='test value' error message='error msg is xxxx' />
      <span className='hint' >
        盒子输入框:
      </span>
      <Input className='item item-box' type='box' />
      <span className='hint' >
        盒子输入框带清除按钮:
      </span>
      <Input className='item item-box' type='box' showClear />
      <span className='hint' >
        盒子密码输入框:
      </span>
      <Input className='item item-box' type='box-pwd' />
      <span className='hint' >
        盒子密码输入框带眼睛按钮:
      </span>
      <Input className='item item-box' type='box-pwd' showEye />
      <span className='hint' >
        盒子输入框带占位符:
      </span>
      <Input className='item item-box' type='box' placeholder='Please fill number' />
      <span className='hint' >
        盒子输入框带默认值:
      </span>
      <Input className='item item-box' type='box' defaultValue='you are awesome' />
      <span className='hint' >
        盒子输入框带错误展示:
      </span>
      <Input className='item item-box err' type='box' value='cuole' error message='error msg is zzzz' />
      <span className='hint' >
        盒子输入框带错误展示和占位符:
      </span>
      <Input className='item item-box err' type='box' value='123123' error message='error msg is yyyy' placeholder='Please fill username' />
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
          .input-box .hint{
            display: block;
            margin: 15px 0;
          }
          .input-box .item + .item{
            margin: 20px 0 0 0;
          }
          .input-box .item.err{
            margin-bottom: 50px;
          }
          .input-box .item.item-box{
            width: 380px;
            height: 52px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
