Example


```jsx
import Button from '../Button';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen: false
    }
  }

  toggleDialog (isOpen) {
    this.setState({ isOpen })
  }

  render () {
    const { isOpen } = this.state

    return (<div>
      <Button onClick={() => this.toggleDialog(true)}>打开Modal</Button>
      <Modal 
        visible={isOpen}
        onClose={() => this.toggleDialog(false)}>
        <p>对话框内容...</p>
        <p>对话框内容...</p>
        <p>对话框内容...</p>
      </Modal>
    </div>
    )
  }
}

<Example />
```
