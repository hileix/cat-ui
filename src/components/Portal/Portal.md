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
      <Button onClick={() => this.toggleDialog(true)}>打开Portal</Button>
      <Button onClick={() => this.toggleDialog(false)}>关闭Portal</Button>
      <Portal 
        visible={isOpen}
        onClose={() => this.toggleDialog(false)}>
        <div className='portal'>
          <p>对话框内容...</p>
          <p>对话框内容...</p>
          <p>对话框内容...</p>
        </div>
      </Portal>
      <style>
        {`
          .portal {
            position: fixed;
            left: 50%;
            top: 50%;
            width: 300px;
            heitht: 300px;
            background-color: #eee;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
