Example

```jsx
import Button from '../Button';
import Menu from '../Menu';

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
    this.onItem1Click = this.onItem1Click.bind(this)
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

  onItem1Click () {
    console.log('onItem1Click')
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
          <Button onClick={this.showPopover1}>hover打开</Button>
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

      <h3>mode='click'的Menu Popover</h3>
      <Popover mode='click'>
        <Popover.Trigger>
          <Button onClick={this.showPopover1}>点击打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content-menu'>
            <Menu mode='pop' className='menu1'>
              <Menu.Item onClick={this.onItem1Click}>Edit</Menu.Item>
              <Menu.Item onClick={this.onItem1Click}>Share</Menu.Item>
              <Menu.Item onClick={this.onItem1Click}>Download</Menu.Item>
              <Menu.Item onClick={this.onItem1Click}>Delete</Menu.Item>
            </Menu>
          </div>
        </Popover.Content>
      </Popover>

      <h3>mode='hover'的Menu Popover</h3>
      <Popover mode='hover'>
        <Popover.Trigger>
          <Button onClick={this.showPopover1}>hover打开</Button>
        </Popover.Trigger>
        <Popover.Content>
          <div className='pop-content-menu'>
            <Menu 
              mode='pop' 
              className='menu6'>
              <Menu.Item key='dashboard' className='item6'>Dashboard</Menu.Item>
              <Menu.SubMenu
                title={<span>Income Center</span>}>
                <Menu.Item key='income1' className='item6'>Income 1</Menu.Item>
                <Menu.Item key='income2' className='item6'>Income 2</Menu.Item>
                <Menu.SubMenu
                  title={<span>Center</span>}>
                  <Menu.Item key='center1' className='item6'>Center 1</Menu.Item>
                  <Menu.Item key='center2' className='item6'>Center 2</Menu.Item>
                  <Menu.Item key='center3' className='item6'>Center 3</Menu.Item>
                  <Menu.Item key='center4' className='item6'>Center 4</Menu.Item>
                </Menu.SubMenu>
                <Menu.Item key='income3' className='item6'>Income 3</Menu.Item>
                <Menu.Item key='income4' className='item6'>Income 4</Menu.Item>
              </Menu.SubMenu>
              <Menu.Item key='episodes' className='item6'>Episodes</Menu.Item>
              <Menu.Item key='setting' className='item6'>Show Settings</Menu.Item>
              <Menu.Item key='analytics' className='item6'>Analytics</Menu.Item>
            </Menu>
          </div>
        </Popover.Content>
      </Popover>

      <style>
        {`
          .popover-box button + button {
            margin-left: 20px;
          }
          .pop-content {
            padding: 10px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
