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
    const footer = (
      <div className='footer'>
        <Button size='sm'>sm</Button>
        <Button size='md'>md</Button>
        <Button size='lg'>lg</Button>
      </div>
    )

    return (<div>
      <Button onClick={() => this.toggleDialog(true)}>打开基础Modal</Button>
      <Button onClick={() => this.toggleDialog(true)}>打开自定义footer的Modal</Button>
      <Modal 
        title='Enter the amount you want to redeem'
        visible={isOpen}
        cancelText=''
        okText='Submit'
        onClose={() => this.toggleDialog(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
      <Modal 
        title='Enter the amount you want to redeem'
        visible={isOpen}
        cancelText=''
        okText='Submit'
        footer={footer}
        onClose={() => this.toggleDialog(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
    </div>
    )
  }
}

<Example />
```
