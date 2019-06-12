new Examplate 


引入`Icon`后
 可以使用`Icon.Type.`来查看已有的icon
 ```jsx
let NewIcon = () =>{
  return (
    <div className="icon-box">
      
<div className='icon-item'>
  <Icon type={Icon.Type.close} />
  close
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.down} />
  down
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.right} />
  right
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.left} />
  left
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.up} />
  up
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.instagram} />
  instagram
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.twitter} />
  twitter
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.facebook} />
  facebook
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.locked} />
  locked
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.unlocked} />
  unlocked
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.volumeLow} />
  volume-low
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.volumeHigh} />
  volume-high
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.volumeMuted} />
  volume-muted
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.loopList} />
  loop-list
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.loopSingle} />
  loop-single
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.shuffle} />
  shuffle
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.question} />
  question
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.pause} />
  pause
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.playerNext} />
  player-next
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.play} />
  play
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.playerPrev} />
  player-prev
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.sortDown} />
  sort-down
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.playlist} />
  playlist
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.sortUp} />
  sort-up
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.share} />
  share
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.liked} />
  liked
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.like} />
  like
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.visible} />
  visible
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.invisible} />
  invisible
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.drag} />
  drag
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.dragMouse} />
  drag-mouse
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.upload} />
  upload
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.enter} />
  enter
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.edit} />
  edit
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.download} />
  download
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.stats} />
  stats
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.delete} />
  delete
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.more} />
  more
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.filter} />
  filter
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.people} />
  people
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.disc} />
  disc
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.forward} />
  forward
</div>

<div className='icon-item'>
  <Icon type={Icon.Type.backward} />
  backward
</div>

      <style>
        {`
          .icon-box .hmly-icon {
            margin-right: 10px;
          }
          .icon-box .icon-item {
            display: inline-block;
            width: 20%;
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
  )
}
<NewIcon />
```

   
 
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
        <Icon type='question-circle' onClick={this.handleClick} />
        question-circle
      </div>
      <div className='icon-item'>
        <Icon type='question' />
        question
      </div>
      <div className='icon-item'>
        <Icon type='share3' />
        share3
      </div>
      <div className='icon-item'>
        <Icon type='share2' />
        share2
      </div>
      <div className='icon-item'>
        <Icon type='share1' />
        share1
      </div>
      <div className='icon-item'>
        <Icon type='more' />
        more
      </div>
      <div className='icon-item'>
        <Icon type='stats' />
        stats
      </div>
      <div className='icon-item'>
        <Icon type='forward' />
        forward
      </div>
      <div className='icon-item'>
        <Icon type='backward' />
        backward
      </div>
      <div className='icon-item'>
        <Icon type='ins' />
        ins
      </div>
      <div className='icon-item'>
        <Icon type='twitter' />
        twitter
      </div>
      <div className='icon-item'>
        <Icon type='facebook' />
        facebook
      </div>
      <div className='icon-item'>
        <Icon type='crown' />
        crown
      </div>
      <div className='icon-item'>
        <Icon type='early-access' />
        early-access
      </div>
      <div className='icon-item'>
        <Icon type='hi-circle' />
        hi-circle
      </div>
      <div className='icon-item'>
        <Icon type='ad-free' />
        ad-free
      </div>
      <div className='icon-item'>
        <Icon type='close' />
        close
      </div>
      <div className='icon-item'>
        <Icon type='upload' />
        upload
      </div>
      <div className='icon-item'>
        <Icon type='delete' />
        delete
      </div>
      <div className='icon-item'>
        <Icon type='edit' />
        edit
      </div>
      <div className='icon-item'>
        <Icon type='up' />
        up
      </div>
      <div className='icon-item'>
        <Icon type='download' />
        download
      </div>
      <div className='icon-item'>
        <Icon type='process' />
        process
      </div>
      <div className='icon-item'>
        <Icon type='filter' />
        filter
      </div>
      <div className='icon-item'>
        <Icon type='enter' />
        enter
      </div>
      <div className='icon-item'>
        <Icon type='drag1' />
        drag1
      </div>
      <div className='icon-item'>
        <Icon type='drag2' />
        drag2
      </div>
      <div className='icon-item'>
        <Icon type='prev' />
        prev
      </div>
      <div className='icon-item'>
        <Icon type='next' />
        next
      </div>
      <div className='icon-item'>
        <Icon type='eye-open' />
        eye-open
      </div>
      <div className='icon-item'>
        <Icon type='eye-close' />
        eye-close
      </div>
      <style>
        {`
          .icon-box .hmly-icon {
            margin-right: 10px;
          }
          .icon-box .icon-item {
            display: inline-block;
            width: 20%;
            margin-bottom: 20px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```

