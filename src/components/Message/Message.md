Example

```jsx
import Button from '../Button'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onClick1 = this.onClick1.bind(this)
    this.onClick2 = this.onClick2.bind(this)
    this.onClick3 = this.onClick3.bind(this)
    this.onClick4 = this.onClick4.bind(this)
    this.onClick5 = this.onClick5.bind(this)
  }

  onClick1 () {
    Message.success('Example:success:text', 1000)
  }

  onClick2 () {
    Message.error('Example:error:text', 2000, () => {
      console.log('Example:error:cb()')
    })
  }

  onClick3 () {
    Message.info('Example:info:text')
  }

  onClick4 () {
    Message.warn('Example:warn:text')
  }

  onClick5 () {
    Message.loading('Example:loading:text')
  }

  render () {
    return (<div className='message-box'>
      <Button onClick={this.onClick1} theme='white-primary'>
        Message.success
      </Button>
      <Button onClick={this.onClick2}>
        Message.error
      </Button>
      <Button onClick={this.onClick3} theme='borderless'>
        Message.info
      </Button>
      <Button onClick={this.onClick4} theme='yellow'>
        Message.warn
      </Button>
      <Button onClick={this.onClick5} theme='white-cyan'>
        Message.loading
      </Button>

      <style>
        {`
          .message-box {
            padding: 5px;
          }
          .message-box button {
              margin: 10px;
            }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
