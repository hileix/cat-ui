Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
    this.draggedElement = this.draggedElement.bind(this)
    this.onDragStart = this.onDragStart.bind(this)
    this.onDragOver = this.onDragOver.bind(this)
    this.onDragEnd = this.onDragEnd.bind(this)
    this.onSort = this.onSort.bind(this)
  }

  draggedElement (element) {
    // console.log('Example:draggedElement', element)
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
          .dragger-box .cat-dragger-item + .cat-dragger-item {
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
