Example

```jsx
import Button from '../Button'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false
    }
  }

  handleOpenDrawer() {
    this.setState({ visible: true })
  }

  handleOnClose() {
    this.setState({ visible: false })
  }

  render () {
    const { visible } = this.state
    return (<div className='drawer-box'>
      <Drawer visible={visible} onClose={() => this.handleOnClose()} mask={true}>
        <div style={{ width: 300, padding: 16 }}>
          test
        </div>
      </Drawer>
      <Button onClick={() => this.handleOpenDrawer()}>打开 Drawer</Button>

      <style>
        {`
          .drawer-box {
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
