Example

```jsx
import Steps from './Steps'

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (<div className='steps-box'>
      <Steps current='1'>
        <Steps.Step title='step1' />
        <Steps.Step title='step2' />
        <Steps.Step title='step3' />
      </Steps>
      <br />
      <Steps current='3'>
        <Steps.Step title='step1' />
        <Steps.Step title='step2' />
        <Steps.Step title='step3' />
        <Steps.Step title='step4' />
      </Steps>
      <style>
        {`
          .steps-box {
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
