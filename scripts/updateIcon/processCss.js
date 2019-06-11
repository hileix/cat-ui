

const fetch = require('node-fetch');
const path = require('path')
const fs = require('fs')
let cssString = ''
let styledPath = path.join(__dirname, '../../', 'src', 'components', 'Icon','styled', 'index.tsx')

let getIconfontCss = async function (code) {
  if(cssString) return cssString
  return await fetch(`http://at.alicdn.com/t/font_1236545_${code}.css`)
  .then((res)=>{
    cssString = res.text()
    return cssString
  }, err => console.log(err))
}




let updateIconStyleFile = async function (code) {
  let css = await getIconfontCss(code)
  css = css.replace(/"(\\)/g, '"$1$1').replace(/\.iconfont/, '.hmly-icon')

  let tempate = `
    /**
     * 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
     */
    import { createGlobalStyle } from 'styled-components'

    const StyledIcon = createGlobalStyle\`
      ${css}
    \`;

    export { StyledIcon }
    `
    fs.writeFileSync(styledPath, tempate)
}

module.exports = {
  getIconfontCss,
  updateIconStyleFile
}


// call:
// updateIconStyleFile("jmuw9sfqs2").then((res)=>{

// })