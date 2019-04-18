Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick () {
    console.log('Example:handleClick')
  }

  render () {
    return (<div className='icon-box'>
      <div className='icon-item'>
        question-circle
        <Icon type='question-circle' onClick={this.handleClick} />
      </div>
      <div className='icon-item'>
        question
        <Icon type='question' />
      </div>
      <div className='icon-item'>
        share3
        <Icon type='share3' />
      </div>
      <div className='icon-item'>
        share2
        <Icon type='share2' />
      </div>
      <div className='icon-item'>
        share1
        <Icon type='share1' />
      </div>
      <div className='icon-item'>
        more
        <Icon type='more' />
      </div>
      <div className='icon-item'>
        stats
        <Icon type='stats' />
      </div>
      <div className='icon-item'>
        forward
        <Icon type='forward' />
      </div>
      <div className='icon-item'>
        backward
        <Icon type='backward' />
      </div>
      <div className='icon-item'>
        ins
        <Icon type='ins' />
      </div>
      <div className='icon-item'>
        twitter
        <Icon type='twitter' />
      </div>
      <div className='icon-item'>
        facebook
        <Icon type='facebook' />
      </div>
      <div className='icon-item'>
        crown
        <Icon type='crown' />
      </div>
      <div className='icon-item'>
        early-access
        <Icon type='early-access' />
      </div>
      <div className='icon-item'>
        hi-circle
        <Icon type='hi-circle' />
      </div>
      <div className='icon-item'>
        ad-free
        <Icon type='ad-free' />
      </div>
      <div className='icon-item'>
        close
        <Icon type='close' />
      </div>

      <style>
        {`
          .icon-box .hmly-icon {
            margin-left: 10px;
          }
          .icon-box .icon-item {
            display: inline-block;
            width: 20%;
            margin-bottom: 10px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
