Example

```jsx
<h3>size</h3>
<NewButton size='sm'>sm</NewButton>
<NewButton size='md'>md</NewButton>
<NewButton size='lg'>lg</NewButton>

<h3>theme</h3>
<NewButton theme='primary'>primary</NewButton>
<NewButton theme='yellow'>yellow</NewButton>
<NewButton theme='white-primary'>white-primary</NewButton>
<NewButton theme='white-cyan'>white-cyan</NewButton>

<h3>block</h3>
<div className='block-box'>
  <NewButton block>block</NewButton>
</div>
<div className='block-box'>
  <NewButton block theme='yellow'>block</NewButton>
</div>
<div className='block-box'>
  <NewButton block theme='white-primary'>block</NewButton>
</div>

<h3>disabled</h3>
<NewButton disabled>disabled</NewButton>
<NewButton disabled theme='yellow'>disabled</NewButton>
<NewButton disabled theme='white-primary'>disabled</NewButton>

<style>
  {`
    .hmly-button + .hmly-button {
      margin-left: 20px;
    }
    .block-box {
      width: 300px;
    }
    .block-box + .block-box {
      margin-top: 20px;
    }
  `}
</style>
```
