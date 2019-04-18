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
      <h3>基础的Menu</h3>
      <Menu mode='pop' className='menu1'>
        <Menu.Item>Edit</Menu.Item>
        <Menu.Item>Share</Menu.Item>
        <Menu.Item>Download</Menu.Item>
        <Menu.Item>Delete</Menu.Item>
      </Menu>

      <h3>带Icon的Menu</h3>
      <Menu mode='pop' className='menu2'>
        <Menu.Item><Icon type='more' />Edit</Menu.Item>
        <Menu.Item><Icon type='share1' />Share</Menu.Item>
        <Menu.Item><Icon type='share3' />Download</Menu.Item>
        <Menu.Item><Icon type='close' />Delete</Menu.Item>
      </Menu>

      <style>
        {`
          .menu-box {
            padding: 5px;
            
          }
          .menu-box .menu1 {
            width: 200px;
            border: 1px solid #eee;
          }
          .menu-box .menu2 {
            width: 200px;
            border: 1px solid #eee;
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
