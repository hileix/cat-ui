Example

```jsx
import _ from 'lodash'
import Button from '../Button';
import Checkbox from '../Checkbox';
import Input from '../Input';
import Radio from '../Radio';
import Select from '../Select';
import Tooltip from '../Tooltip';

const Option = Select.Option;

class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visibility: 2,
      payment: 'a',
      fieldsError: {}
    }
    this.onVisibilityChange = this.onVisibilityChange.bind(this)
    this.onPaymentChange = this.onPaymentChange.bind(this)
    this.checkDesc = this.checkDesc.bind(this)
    this.checkPrice = this.checkPrice.bind(this)
    this.checkVisibility = this.checkVisibility.bind(this)
    this.checkPayment = this.checkPayment.bind(this)
    this.checkBenefits = this.checkBenefits.bind(this)
    this.checkMethod = this.checkMethod.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onVisibilityChange (value, error) {
    this.setState({ visibility: value })
  }

  onPaymentChange (value, error) {
    this.setState({ payment: value })
  }

  checkDesc (value) {
    const isInvalid = value.length === 0 || value.length > 10
    const error = isInvalid ? '长度需要大于0，小于10' : ''
    return error
  }

  checkVisibility (value) {
    const isInvalid = value === 3
    const error = isInvalid ? '不能选择3' : ''
    return error
  }

  checkPayment (value) {
    const isInvalid = value === 3
    const error = isInvalid ? '不能选择3' : ''
    return error
  }

  checkBenefits (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  checkMethod (value) {
    const isInvalid = value.length === 0 || value.length > 10
    const error = isInvalid ? '长度需要大于0，小于10' : ''
    return error
  }

  checkPrice (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  onFormSubmit (values, errors) {
    const { desc, price, visibility, payment, benefits, method } = values
    const params = { desc, price, visibility, payment, benefits, method }
    const isInvalid = _.some(errors, (error) => {
      return Boolean(error)
    })

    if (!isInvalid) {
      alert(`onFormSubmit ${JSON.stringify(params)}`)
      // console.log('Example:onFormSubmit:params', isInvalid, params)
    }
    console.log('Example:onFormSubmit:values, errors', values, errors)
  }

  render () {
    const { payment, visibility, fieldsError } = this.state
    const { descError, methodError } = fieldsError

    const isFullPayment = visibility === 1
    const isShowBenefits = payment === 'b'

    return (<div className='form-box'>
      <h3>不禁用提交按钮</h3>
      <Form 
        className='form1'
        labelAlign='right'
        labelWidth='200px'
        labelOffset='50px'
        onSubmit={this.onFormSubmit}>

        <Form.Item
          name='desc'
          label='Description'
          desc='How much would you like to charge your fans?'
          tips='field1 tips text'
          required
          check={this.checkDesc}>
          <Input error={descError} />
        </Form.Item>

        <Form.Item
          name='price'
          label='Price'
          desc='How much would you like to charge your fans?'
          tips='tips'
          required
          check={this.checkPrice}>
          <Select 
            className='select' 
            placeholder='Choose Price'>
            <Option value='10'>10</Option>
            <Option value='20'>20</Option>
            <Option value='30'disable>30</Option>
            <Option value='40'>40</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='visibility'
          required
          label='Earning Visibility'
          tips='field2 tips text field2 tips text'
          check={this.checkVisibility}>
          <Radio.Group 
            defaultValue={visibility}
            onChange={this.onVisibilityChange}>
            <Radio value={1}>1</Radio>
            <Radio value={2}>2</Radio>
            <Radio value={3}>3</Radio>
            <Radio disabled value={4}>4</Radio>
            <Radio value={5} shape='hook'>5</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          name='payment'
          label='Payment'
          tips='field2 tips text field2 tips text'
          check={this.checkPayment}>
          <Radio.Group 
            defaultValue={payment}
            onChange={this.onPaymentChange}>
            <Radio value={'a'}>a</Radio>
            <Radio value={'b'}>b</Radio>
            <Radio value={'c'}>c</Radio>
            <Radio value={'d'}>d</Radio>
            {isFullPayment && <React.Fragment>
              <Radio value={'e'}>e</Radio>
              <Radio value={'f'}>f</Radio>
            </React.Fragment>}
          </Radio.Group>
        </Form.Item>
        
        {isShowBenefits && 
          <Form.Item
            name='benefits'
            label='Benefits'
            desc='field3 help text'
            check={this.checkBenefits}>
            <Checkbox.Group>
              <Checkbox value={'a'}>A</Checkbox>
              <Checkbox value={'b'}>B</Checkbox>
              <Checkbox value={'c'}>C</Checkbox>
              <Checkbox value={'d'}>d</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        }

        <Form.Item
          name='method'
          label='Method'
          desc='How much would you like to charge your fans?'
          tips='tips'
          check={this.checkMethod}>
          <Input error={methodError} />
        </Form.Item>

        <Form.Item>
          <Button 
            size='md' 
            htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>

      <style>
        {`
          .form-box {
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
