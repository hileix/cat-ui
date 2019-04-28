Example

```jsx
import Button from '../Button';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible1: false
    }
    this.onVisibleChange2 = this.onVisibleChange2.bind(this)
    this.showPopover1 = this.showPopover1.bind(this)
    this.showPopover2 = this.showPopover2.bind(this)
    this.closePopover2 = this.closePopover2.bind(this)
  }

  onVisibleChange2 () {
    const { visible1 } = this.state
    this.setState({ visible1: !visible1 })
  }

  showPopover1 () {
    console.log('showPopover1')
  }

  showPopover2 () {
    this.setState({ visible1: true })
  }

  closePopover2 () {
    this.setState({ visible1: false })
  }

  render () {
    const { visible1 } = this.state

    return (<div className='popover-box'>
      <h3>mode='click'的Popover</h3>
      <Popover mode='click'>
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

       <h3>mode='hover'的Popover</h3>
      <Popover mode='hover'>
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

      <h3>外部visible的Popover</h3>
      <Popover 
        visible={visible1}
        onVisibleChange={this.onVisibleChange2}>
        <Popover.Trigger>
          <Button onClick={this.showPopover2}>点击打开</Button>
          <Button onClick={this.closePopover2}>点击关闭</Button>
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
          .popover-box button + button {
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
