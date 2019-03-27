Example

```jsx
<div className='top-box'>
  <Tooltip placement='topLeft' title={<div>Add</div>}>
    <div className='item top-left'>top-left</div>
  </Tooltip>
  <Tooltip placement='top' title={<div>Add</div>}>
    <div className='item top-left'>top</div>
  </Tooltip>
  <Tooltip placement='topRight' title={<div>Add</div>}>
    <div className='item top-right'>top-right</div>
  </Tooltip>
</div>

<style>
  {`
    .top-box,
    .bottom-box {
      width: 900px;
      margin: 60px auto;
      text-align: center;
    }
    .item {
      display: inline-block;
      font-size: 0.875rem;
      transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
      border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 500;
      line-height: 1.5;
      border-radius: 4px;
      letter-spacing: 0.02857em;
      text-transform: uppercase;
      padding: 10px;
      text-align: center;
      cursor: pointer;
      margin: 0 5%;
    }
    .item:hover {
      text-decoration: none;
      background-color: rgba(0, 0, 0, 0.08);
    }
  `}
</style>
```
