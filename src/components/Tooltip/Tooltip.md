Example

```jsx
class Example extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    const content1 = 'Tooltip content'
    const content2 = (<div>
      <p>第一段文字</p>
      <p>第二段文字</p>
    </div>)
    const content3 = '喜马'
    const content4 = '上海证大喜马拉雅网络科技有限公司是国家高度重视的新经济龙头企业、独角兽企业，总部位于上海市浦东张江高科技园区。旗下拥有中国知名的音频分享平台喜马拉雅，手机用户超过4.7亿，汽车、智能硬件和智能家居用户超过3000万，占据了国内音频行业73%的市场份额。同时，喜马拉雅还拥有超过3500万的海外用户，是中国文化出海的中坚阵地。'

    return (<div className='tooltip-box'>
      <Tooltip 
        className='tooltip1' 
        content={content1}>
        content=string
      </Tooltip>

      <Tooltip
        className='tooltip1' 
        content={content2}>
        content=Rect.ReactNode
      </Tooltip>

      <Tooltip
        className='tooltip1' 
        content={content3}>
        content字数很短
      </Tooltip>

      <Tooltip
        className='tooltip1' 
        content={content4}>
        content字数很长，自动换行
      </Tooltip>

      <style>
        {`
          .tooltip-box .tooltip1 {
            display: inline-block;
            padding: 0 30px;
          }
        `}
      </style>
    </div>
    )
  }
}

<Example />
```
