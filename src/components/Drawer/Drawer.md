Example

```jsx
import Button from '../Button'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: true,
      visible2: false
    }
  }

  handleOpenDrawer() {
    this.setState({ visible: true })
  }

  handleOnClose() {
    this.setState({ visible: false })
  }

  render () {
    const { visible, visible2 } = this.state
    return (
      <div className='drawer-box'>
        <div className='drawer-wrapper'>
          <Drawer className='my-drawer' style={{ width: 200 }} visible={visible} onClose={() => this.setState({ visible: false })} mask={true}>
            <div style={{ width: 100, padding: 16 }}>
              <input />
            </div>
          </Drawer>
          <Button onClick={() => this.setState({ visible: true })}>打开 Drawer</Button>
        </div>

        <div className='drawer-wrapper'>
          <Drawer style={{ width: 200 }} visible={visible2} onClose={() => this.setState({ visible2: false })} mask={true} destroyOnClose>
            <div style={{ width: 100, padding: 16 }}>
              <input />
            </div>
          </Drawer>
          <Button onClick={() => this.setState({ visible2: true })}>destroyOnClose</Button>
        </div>
        
        <style>
          {`
            .drawer-box {
              padding: 5px;
            }
            .drawer-wrapper {
              display: inline-block;
              margin: 0 8px;
            }
          `}
        </style>
      </div>
    )
  }
}

<Example />
```
