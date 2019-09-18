

const fetch = require('node-fetch');
const path = require('path')
const fs = require('fs')
let cssString = ''
let styledPath = path.join(__dirname, '../../', 'src', 'styles', 'icon.scss')

let getIconfontCss = async function (code) {
  if (cssString) return cssString
  return await fetch(`http://at.alicdn.com/t/font_1236545_${code}.css`)
    .then((res) => {
      cssString = res.text()
      return cssString
    }, err => console.log(err))
}

let updateIconStyleFile = async function (code) {
  let css = await getIconfontCss(code)
  css = css.replace(/\.iconfont/, '.hmly-icon')

  let tempate = `
    // 该文件有模板生成，不要手动修改文件，具体查看scipts/updateIcon/processCss
    ${css}
  `;
  fs.writeFileSync(styledPath, tempate)
}

module.exports = {
  getIconfontCss,
  updateIconStyleFile
}
