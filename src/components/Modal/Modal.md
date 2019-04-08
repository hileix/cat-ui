Example


```jsx
import Button from '../Button';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen1: false,
      isOpen2: false
    }
  }

  toggleDialog1 (isOpen1) {
    this.setState({ isOpen1 })
  }

  toggleDialog2 (isOpen2) {
    this.setState({ isOpen2 })
  }

  render () {
    const { isOpen1, isOpen2 } = this.state
    const footer = (
      <div className='footer'>
        <Button 
          onClick={() => this.toggleDialog2(false)}
          theme='white-primary'>Cancel</Button>
        <Button theme='white-cyan'>Submit</Button>
      </div>
    )

    return (<div className='modal-box'>
      <Button onClick={() => this.toggleDialog1(true)}>打开基础Modal</Button>
      <Button onClick={() => this.toggleDialog2(true)}>打开自定义footer的Modal</Button>
      <Modal 
        title='Enter the amount you want to redeem'
        visible={isOpen1}
        cancelText=''
        okText='Submit'
        onClose={() => this.toggleDialog1(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
      <Modal 
        title='Enter the amount you want to redeem'
        visible={isOpen2}
        cancelText=''
        align='center'
        okText='Submit'
        footer={footer}
        onClose={() => this.toggleDialog2(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
      <style>
        {`
          .modal-box .hmly-button + .hmly-button {
            margin-left: 20px;
          }
          .footer .hmly-button + .hmly-button {
            margin-left: 20px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
