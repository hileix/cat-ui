

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
  // .iconfont 使用 .hmly-icon 替换
  css = css.replace(/\.iconfont/, '.hmly-icon')
  // 移除 woff2（暂时）
  css = css.replace(/url\('data:application\/x-font-woff2;.+format\('woff2'\),/, '');
  // 添加 https 前缀
  css = css.replace(/\/\/at.alicdn.com/g, 'https://at.alicdn.com');

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
