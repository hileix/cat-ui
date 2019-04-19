Example

```jsx
import Icon from '../Icon'
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='menu-box'>
      <div className='menu-unit'>
        <h3>基础的Menu</h3>
        <Menu mode='pop' className='menu1'>
          <Menu.Item>Edit</Menu.Item>
          <Menu.Item>Share</Menu.Item>
          <Menu.Item>Download</Menu.Item>
          <Menu.Item>Delete</Menu.Item>
        </Menu>
      </div>
      
      <div className='menu-unit'>
        <h3>带Icon的Menu</h3>
        <Menu mode='pop' className='menu2'>
          <Menu.Item><Icon type='more' />Edit</Menu.Item>
          <Menu.Item><Icon type='share1' />Share</Menu.Item>
          <Menu.Item><Icon type='share3' />Download</Menu.Item>
          <Menu.Item><Icon type='close' />Delete</Menu.Item>
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
