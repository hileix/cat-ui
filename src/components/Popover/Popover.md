Example

```jsx
import Button from '../Button';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible1: false
    }
    this.onVisibleChange1 = this.onVisibleChange1.bind(this)
    this.showPopover1 = this.showPopover1.bind(this)
  }

  onVisibleChange1 () {
    const { visible1 } = this.state
    this.setState({ visible1: !visible1 })
  }

  showPopover1 () {
    this.setState({ visible1: true })
  }

  render () {
    const { visible1 } = this.state

    return (<div className='popover-box'>
      <Popover 
        visible={visible1}
        onVisibleChange={this.onVisibleChange1}>
        <Popover.Trigger>
          <Button onClick={this.showPopover1}>点击打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content'>
            <p>通用的触发式弹层组件, 可以自定义定位算法、触发方式以及弹层显示方式。</p>
            <p>向下弹出的弹层组件</p>
          </div>
        </Popover.Content>
      </Popover>

      <style>
        {`
          .popover-box {
            padding: 5px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
