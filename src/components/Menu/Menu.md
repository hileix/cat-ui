Example

```jsx
import Icon from '../Icon'
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeKey4: 'income',
      activeKey5: 'setting',
      activeKey6: 'dashboard',
      activeKey7: 'setting'
    }
    this.onItem1Click = this.onItem1Click.bind(this)
    this.onMenu4Change = this.onMenu4Change.bind(this)
    this.onMenu5Change = this.onMenu5Change.bind(this)
    this.onMenu6Change = this.onMenu6Change.bind(this)
    this.onMenu7Change = this.onMenu7Change.bind(this)
  }

  onItem1Click (e) {
    console.log('Example:onItem1Click', e)
  }

  onMenu4Change (key) {
    this.setState({ activeKey4: key })
  }

  onMenu5Change (key) {
    this.setState({ activeKey5: key })
  }

  onMenu6Change (key) {
    this.setState({ activeKey6: key })
  }

  onMenu7Change (key) {
    this.setState({ activeKey7: key })
  }

  render () {
    const { activeKey4, activeKey5, activeKey6, activeKey7 } = this.state
    return (<div className='menu-box'>
      <div className='menu-unit'>
        <h3>基础的Menu</h3>
        <Menu mode='pop' className='menu1'>
          <Menu.Item onClick={this.onItem1Click}>Edit</Menu.Item>
          <Menu.Item onClick={this.onItem1Click}>Share</Menu.Item>
          <Menu.Item onClick={this.onItem1Click}>Download</Menu.Item>
          <Menu.Item onClick={this.onItem1Click}>Delete</Menu.Item>
        </Menu>
      </div>
      
      <div className='menu-unit'>
        <h3>带Icon的Menu</h3>
        <Menu mode='pop' className='menu2'>
          <Menu.Item><Icon type='edit' />Edit</Menu.Item>
          <Menu.Item><Icon type='share1' />Share</Menu.Item>
          <Menu.Item><Icon type='download' />Download</Menu.Item>
          <Menu.Item><Icon type='delete' />Delete</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>自定义Item样式的Menu</h3>
        <Menu className='menu3'>
          <Menu.Item className='item3'>Claim Your Podcast</Menu.Item>
          <Menu.Item className='item3'>Discover</Menu.Item>
          <Menu.Item className='item3'>Sign Up</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>activeKey的Menu</h3>
        <Menu 
          mode='inline' 
          activeKey={activeKey4}
          onChange={this.onMenu4Change}
          className='menu4'>
          <Menu.Item key='dashboard' className='item4'>Dashboard</Menu.Item>
          <Menu.Item key='income' className='item4'>Income Center</Menu.Item>
          <Menu.Item key='episodes' className='item4'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item4'>Show Settings</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>mode=inline的Menu</h3>
        <Menu 
          mode='inline' 
          activeKey={activeKey5}
          onChange={this.onMenu5Change}
          className='menu5'>
          <Menu.Item key='dashboard' className='item5'>Dashboard</Menu.Item>
          <Menu.SubMenu
            key='SubMenu'
            title={<span>Income Center</span>}>
            <Menu.Item key='income1' className='item5'>Income 1</Menu.Item>
            <Menu.Item key='income2' className='item5'>Income 2</Menu.Item>
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
          <Menu.Item key='episodes' className='item5'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item5'>Show Settings</Menu.Item>
          <Menu.Item key='analytics' className='item5'>Analytics</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>mode=pop的Menu</h3>
        <Menu 
          mode='pop' 
          activeKey={activeKey6}
          onChange={this.onMenu6Change}
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

      <div className='menu-unit'>
        <h3>mode=replace的Menu</h3>
        <Menu 
          mode='replace' 
          activeKey={activeKey7}
          onChange={this.onMenu7Change}
          className='menu7'>
          <Menu.Item key='dashboard' className='item7'>Dashboard</Menu.Item>
          <Menu.SubMenu
            title={<span>Income Center</span>}>
            <Menu.Item key='income1' className='item7'>Income 1</Menu.Item>
            <Menu.Item key='income2' className='item7'>Income 2</Menu.Item>
          </Menu.SubMenu>
          <Menu.Item key='episodes' className='item7'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item7'>Show Settings</Menu.Item>
          <Menu.Item key='analytics' className='item7'>Analytics</Menu.Item>
        </Menu>
      </div>

      <style>
        {`
          .menu-box .menu-unit {
            display: inline-block;
            width: 25%;
          }
          .menu-box .menu1 {
            width: 200px;
            border: 1px solid #eee;
          }
          .menu-box .menu2 {
            width: 200px;
            border: 1px solid #eee;
          }
          .menu-box .menu3 {
            width: 200px;
            border: 1px solid #eee;
          }
          .menu-box .menu3 .item3 {
            height: 55px;
            line-height: 55px;
          }
          .menu-box .menu3 .item3:hover {
            color: red;
          }
          .menu-box .menu4 .item4.hmly-menu-item-checked::before {
            position: absolute;
            top: 0px;
            left: 0px;
            content: '';
            width: 4px;
            height: 40px;
            background-color: #ff4444;
          }
          .menu-box .menu5 .item5.hmly-menu-item-checked::before {
            position: absolute;
            top: 0px;
            left: 0px;
            content: '';
            width: 4px;
            height: 40px;
            background-color: #ff4444;
          }
          .menu-box .menu6 .item6.hmly-menu-item-checked::before {
            position: absolute;
            top: 0px;
            left: 0px;
            content: '';
            width: 4px;
            height: 40px;
            background-color: #ffba0f;
          }
          .menu-box .menu7 .item7.hmly-menu-item-checked::before {
            position: absolute;
            top: 0px;
            left: 0px;
            content: '';
            width: 4px;
            height: 40px;
            background-color: rgba(83,118,130,0.8);
          }
          .menu-box .menu4 .item4:hover {
            background: #fff;
          }
          .menu-box .hmly-icon {
            margin-right: 10px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
