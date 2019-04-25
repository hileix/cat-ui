Example


```jsx
import Button from '../Button';

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isOpen1: false,
      isOpen2: false,
      isOpen3: false,
      isOpen4: false
    }
  }

  toggleDialog1 (isOpen1) {
    this.setState({ isOpen1 })
  }

  toggleDialog2 (isOpen2) {
    this.setState({ isOpen2 })
  }

  toggleDialog3 (isOpen3) {
    this.setState({ isOpen3 })
  }

  toggleDialog4 (isOpen4) {
    this.setState({ isOpen4 })
  }

  render () {
    const { isOpen1, isOpen2, isOpen3, isOpen4 } = this.state
    const footer = (
      <div className='footer'>
        <Button 
          onClick={() => this.toggleDialog2(false)}
          size='md'
          theme='borderless'>
          Cancel
        </Button>
        <Button 
          size='md'
          onClick={() => this.toggleDialog2(false)}>
          Submit
        </Button>
      </div>
    )

    return (<div className='modal-box'>
      <Button onClick={() => this.toggleDialog1(true)}>基础Modal</Button>
      <Button onClick={() => this.toggleDialog2(true)}>自定义footer的Modal</Button>
      <Button onClick={() => this.toggleDialog3(true)}>align=center的Modal</Button>
      <hr />
      <Button onClick={() => this.toggleDialog4(true)}>align=center && noCloseIcon的Modal</Button>
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
        align='center'
        cancelText=''
        okText='Submit'
        footer={footer}
        onClose={() => this.toggleDialog2(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
      <Modal 
        title='Enter the amount you want to redeem'
        visible={isOpen3}
        align='center'
        cancelText=''
        okText='Submit'
        onClose={() => this.toggleDialog3(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
      <Modal 
        title='Enter the amount you want to redeem'
        visible={isOpen4}
        align='center'
        cancelText=''
        okText='OK'
        noCloseIcon
        onClose={() => this.toggleDialog4(false)}>
        <p>Please ensure that the amount you are redeeming does not exceed the remaining total amount.</p>
      </Modal>
      <style>
        {`
          .modal-box .hmly-button + .hmly-button {
            margin-left: 20px;
          }
          .footer {
            float: right;
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
