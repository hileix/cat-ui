Example

```jsx
<h3>size</h3>
<StyledButton size='sm'>sm</StyledButton>
<StyledButton size='md'>md</StyledButton>
<StyledButton size='lg'>lg</StyledButton>

<h3>theme</h3>
<StyledButton theme='primary'>primary</StyledButton>
<StyledButton theme='yellow'>yellow</StyledButton>
<StyledButton theme='white-primary'>white-primary</StyledButton>
<StyledButton theme='white-cyan'>white-cyan</StyledButton>

<h3>block</h3>
<div className='block-box'>
  <StyledButton block>block</StyledButton>
</div>
<div className='block-box'>
  <StyledButton block theme='yellow'>block</StyledButton>
</div>
<div className='block-box'>
  <StyledButton block theme='white-primary'>block</StyledButton>
</div>

<h3>disabled</h3>
<StyledButton disabled>disabled</StyledButton>
<StyledButton disabled theme='yellow'>disabled</StyledButton>
<StyledButton disabled theme='white-primary'>disabled</StyledButton>

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
