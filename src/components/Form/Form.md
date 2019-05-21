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
      payment: 'a',
      fieldsError: {}
    }
    this.onField2Change = this.onField2Change.bind(this)
    this.onPaymentChange = this.onPaymentChange.bind(this)
    this.checkDesc = this.checkDesc.bind(this)
    this.checkField2 = this.checkField2.bind(this)
    this.checkField3 = this.checkField3.bind(this)
    this.checkField4 = this.checkField4.bind(this)
    this.checkField5 = this.checkField5.bind(this)
    this.getFormData = this.getFormData.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onField2Change (value) {
    // console.log('Example:onField2Change', value)
    this.setState({ field2: value })
  }

  onPaymentChange (value) {
    this.setState({ payment: value })
  }

  checkDesc (value) {
    const isInvalid = value.length === 0 || value.length > 10
    const error = isInvalid ? '长度需要大于0，小于10' : ''
    console.log('Example:checkDesc', value, isInvalid)
    return error
  }

  checkField2 (value) {
    const isInvalid = value === 3
    const error = isInvalid ? '不能选择3' : ''
    return error
  }

  checkField3 (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  checkField4 (value) {
    const isInvalid = value.length === 0 || value.length > 10
    const error = isInvalid ? '长度需要大于0，小于10' : ''
    return error
  }

  checkField5 (value) {
    const isInvalid = value.length > 10
    const error = isInvalid ? '长度不能大于10' : ''
    return error
  }

  getFormData (values, errors) {
    console.log('Example:getFormData', values, errors)
  }

  onSubmit (values, errors) {
    const { area, tag, type, desc, username } = values
    const params = { area, tag, type, desc, username }
    const isInvalid = _.some(errors, (error) => {
      return Boolean(error)
    })

    if (!isInvalid) {
      alert(`onSubmit ${JSON.stringify(params)}`)
    }
    console.log('Example:onSubmit:values, errors', values, errors, isInvalid)
    console.log('Example:onSubmit:params', params, type, errors.username)
  }

  render () {
    const { field1, field2, field3, field4, field5, payment, fieldsError } = this.state
    const { field1Error, field4Error } = fieldsError

    const isFullField3 = field2 === 3
    const isShowBenefits = payment === 'b'

    return (<div className='form-box'>
      <h3>不禁用提交按钮</h3>
      <Form 
        className='form1'
        labelWidth='200px'
        getFormFields={this.getFormData}>

        <Form.Item
          name='desc'
          label='Description'
          desc='How much would you like to charge your fans?'
          tips='field1 tips text'
          required
          check={this.checkDesc}>
          <Input error={field1Error} />
        </Form.Item>

        <Form.Item
          name='price'
          label='Price'
          desc='How much would you like to charge your fans?'
          tips='tips'
          required
          check={this.checkField5}>
          <Select 
            className='select' 
            placeholder='Choose Price'>
            <Option value='1' >Option 1</Option>
            <Option value='2' >Option 2</Option>
            <Option value='3' disable>Option 3</Option>
            <Option value='4'>Option 4</Option>
          </Select>
        </Form.Item>

        <Form.Item
          name='visibility'
          required
          label='Earning Visibility'
          tips='field2 tips text field2 tips text'
          check={this.checkField2}>
          <Radio.Group 
            defaultValue={2}
            onChange={this.onField2Change}>
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
          check={this.checkField2}>
          <Radio.Group 
            defaultValue={'a'}
            onChange={this.onPaymentChange}>
            <Radio value={'a'}>a</Radio>
            <Radio value={'b'}>b</Radio>
            <Radio value={'c'}>c</Radio>
            <Radio value={'d'}>d</Radio>
          </Radio.Group>
        </Form.Item>
        
        {isShowBenefits && 
          <Form.Item
            name='benefits'
            label='Benefits'
            desc='field3 help text'
            check={this.checkField3}>
            <Checkbox.Group>
              <Checkbox value={'A'}>A</Checkbox>
              <Checkbox value={'B'}>B</Checkbox>
              <Checkbox value={'C'}>C</Checkbox>
              {isFullField3 && <React.Fragment>
                <Checkbox disabled value='D'>D</Checkbox>
                <Checkbox value={'E'}>E</Checkbox>
              </React.Fragment>}
              <Checkbox value={'F'}>F</Checkbox>
            </Checkbox.Group>
          </Form.Item>
        }

        <Form.Item
          name='method'
          label='Method'
          desc='How much would you like to charge your fans?'
          tips='tips'
          check={this.checkField4}>
          <Input error={field4Error} />
        </Form.Item>

        <Form.Item>
          <Button 
            size='md' 
            onClick={this.onSubmit}>
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
