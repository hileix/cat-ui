const sass = require('sass');
const path = require('path');


const result = sass.renderSync({ file: path.resolve(__dirname, '../src/components/Button/styled/Button.scss') });

console.log({ result })
