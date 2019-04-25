Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onSort = this.onSort.bind(this)
  }

  onDragStart (e) {
    // console.log('Example:onDragStart', e)
  }

  onDragOver (e) {
    // console.log('Example:onDragOver', e)
  }

  onDragEnd (e) {
    // console.log('Example:onDragEnd', e)
  }

  onSort (e) {
    console.log('Example:onSort', e)
  }

  render () {
    return (<div className='dragger-box'>
      {/*
      <Dragger
        draggedElement={this.draggedElement}
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
        onDragEnd={this.onDragEnd}
        onSort={this.onSort}>
        <div id={1} className='item'>1</div>
        <div id={2} className='item'>2</div>
        <div id={3} className='item'>3</div>
        <div id={4} className='item'>4</div>
      */}
      <Dragger
        draggedElement={this.draggedElement}
        onDragStart={this.onDragStart}
        onDragOver={this.onDragOver}
        onDragEnd={this.onDragEnd}
        onSort={this.onSort}>
        <Dragger.Item id={1} className='item'>
          <div className='text'>111</div>
        </Dragger.Item>
        <Dragger.Item id={2} className='item'>
          <div className='text'>222</div>
        </Dragger.Item>
        <Dragger.Item id={3} className='item'>
          <div className='text'>333</div>
        </Dragger.Item>
        <Dragger.Item id={4} className='item'>
          <div className='text'>444</div>
        </Dragger.Item>
      </Dragger>

      <style>
        {`
          .dragger-box {
            padding: 5px;
          }
          .dragger-box .item {
            padding: 10px;
            width: 300px;
            background-color: #eee;
          }
          .dragger-box .hmly-dragger-item + .hmly-dragger-item {
            margin-top: 10px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
