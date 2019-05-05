Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='upload-box'>
      <button className='upload-box-btn'>
        上传按钮
        <Upload />
      </button>

      <style>
        {`
          .upload-box {
            padding: 5px;
          }
          .upload-box-btn {
            position: relative;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
