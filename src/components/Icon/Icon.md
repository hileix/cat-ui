new Examplate 


```jsx
let NewIcon = () =>{
  return (
    <div className="icon-box">
      
<div className='icon-item'>
  <Icon type={Icon.IconType.close} />
  close
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.down} />
  down
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.right} />
  right
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.left} />
  left
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.up} />
  up
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.instagram} />
  instagram
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.twitter} />
  twitter
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.facebook} />
  facebook
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.locked} />
  locked
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.unlocked} />
  unlocked
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.volumeLow} />
  volume-low
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.volumeHigh} />
  volume-high
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.volumeMuted} />
  volume-muted
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.loopList} />
  loop-list
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.loopSingle} />
  loop-single
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.shuffle} />
  shuffle
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.question} />
  question
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.pause} />
  pause
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.playerNext} />
  player-next
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.play} />
  play
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.playerPrev} />
  player-prev
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.sortDown} />
  sort-down
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.playlist} />
  playlist
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.sortUp} />
  sort-up
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.share} />
  share
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.liked} />
  liked
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.like} />
  like
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.visible} />
  visible
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.invisible} />
  invisible
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.drag} />
  drag
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.dragMouse} />
  drag-mouse
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.upload} />
  upload
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.enter} />
  enter
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.edit} />
  edit
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.download} />
  download
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.stats} />
  stats
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.delete} />
  delete
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.more} />
  more
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.filter} />
  filter
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.people} />
  people
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.disc} />
  disc
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.forward} />
  forward
</div>

<div className='icon-item'>
  <Icon type={Icon.IconType.backward} />
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

