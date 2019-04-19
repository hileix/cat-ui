Example

```jsx
import Icon from '../Icon'
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      activeKey4: 'income'
    }
    this.onItem1Click = this.onItem1Click.bind(this)
    this.onMenu4Change = this.onMenu4Change.bind(this)
  }

  onItem1Click (e) {
    console.log('Example:onItem1Click', e)
  }

  onMenu4Change (key) {
    console.log('Example:onMenu4Change', key)
    this.setState({ activeKey4: key })
  }

  render () {
    const { activeKey4 } = this.state
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
        <h3>移动端的Menu</h3>
        <Menu className='menu3'>
          <Menu.Item className='item3'>Claim Your Podcast</Menu.Item>
          <Menu.Item className='item3'>Discover</Menu.Item>
          <Menu.Item className='item3'>Sign Up</Menu.Item>
          <Menu.Item className='item3'>Log In</Menu.Item>
        </Menu>
      </div>

      <div className='menu-unit'>
        <h3>mode=inline的Menu</h3>
        <Menu 
          mode='inline' 
          activeKey={activeKey4}
          onChange={this.onMenu4Change}
          className='menu4'>
          <Menu.Item key='dashboard' className='item4'>Dashboard</Menu.Item>
          <Menu.Item key='income' className='item4'>Income Center</Menu.Item>
          <Menu.Item key='episodes' className='item4'>Episodes</Menu.Item>
          <Menu.Item key='setting' className='item4'>Show Settings</Menu.Item>
          <Menu.Item key='analytics' className='item4'>Analytics</Menu.Item>
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
            height: 60px;
            line-height: 60px;
          }
          .menu-box .menu3 .item3:hover {
            color: red;
          }
          .menu-box .menu4 .item4.hmly-menu-item-checked::before {
            position: absolute;
            top: 7px;
            left: 0px;
            content: '';
            width: 4px;
            height: 30px;
            background-color: #ff4444;
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
