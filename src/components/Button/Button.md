Example

```jsx

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick (e) {
    console.log('Example:handleClick', e)
  }

  render () {
    return (<div className='button-box'>
      <h3>size</h3>
      <Button size='sm'>sm</Button>
      <Button size='md'>md</Button>
      <Button size='lg'>lg</Button>
      <Button>default</Button>

      <h3>theme</h3>
      <Button theme='primary'>primary</Button>
      <Button theme='primary-up' style={{color: 'blue', height: '60px'}}>primary-up</Button>
      <Button theme='yellow'>yellow</Button>
      <Button theme='white-primary'>white-primary</Button>
      <Button theme='white-cyan'>white-cyan</Button>
      <Button theme='borderless'>borderless</Button>

      <h3>block</h3>
      <div className='block-box'>
        <Button block>block</Button>
      </div>
      <div className='block-box'>
        <Button block theme='yellow'>block</Button>
      </div>
      <div className='block-box'>
        <Button block theme='white-primary'onClick={this.handleClick}>block</Button>
      </div>

      <h3>disabled</h3>
      <Button disabled onClick={this.handleClick}>disabled</Button>
      <Button disabled theme='yellow'>disabled</Button>
      <Button disabled theme='white-primary'>disabled</Button>

      <style>
        {`
          .button-box .hmly-button {
            margin: 0 20px 20px 20px;
          }
          .button-box .block-box {
            display: inline-block;
            width: 280px;
          }
          .button-box .block-box + .block-box {
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
