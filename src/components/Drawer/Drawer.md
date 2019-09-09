Example

```jsx
import Button from '../Button'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
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
        <div>
          <div id='drawer-wrapper-2'>
            <Drawer className='my-drawer' style={{ width: 200 }} visible={visible2} onClose={() => this.setState({ visible2: false })} mask={true}>
              <div style={{ width: 100, padding: 16 }}>
                test
              </div>
            </Drawer>
          </div>
          <Button onClick={() => this.setState({ visible2: true })}>打开 Drawer</Button>
        </div>
        
        <style>
          {`
            .drawer-box {
              padding: 5px;
            }
            #drawer-wrapper-1 {
              width: 300px;
              height: 400px;
              border: 1px solid #333;
            }
          `}
        </style>
      </div>
    )
  }
}

<Example />
```
