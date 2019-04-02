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
        title='Enter the amount you want to redeem'
        visible={isOpen}
        cancelText='Cancel'
        okText='OK'
        onClose={() => this.toggleDialog(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
    </div>
    )
  }
}

<Example />
```
