#!/bin/bash

set -e

input=$1

mkdir src/components/${input}
mkdir src/components/${input}/__test__
mkdir src/components/${input}/styled

touch src/components/${input}/index.ts
touch src/components/${input}/${input}.tsx
touch src/components/${input}/${input}.md
touch src/components/${input}/styled/index.tsx
touch src/components/${input}/__test__/index.test.tsx

# 导入${input}/${input}.tsx默认模块
echo "import * as React from 'react'
import { Component } from 'react'
import { Styled${input} } from './styled'

export interface ${input}Props {
  /** 类名 */
  className?: string;
  /** 样式 */
  style?: object;
}

/**
 * ${input}
 */
class ${input} extends Component<${input}Props, any> {

  render() {
    return (
      <Styled${input}>
        ${input}
      </Styled${input}>
    )
  }
}

export default ${input}
" >> src/components/${input}/${input}.tsx

# 导入${input}/index.ts默认模块
echo "import ${input} from './${input}'

export default ${input}" >> src/components/${input}/index.ts

# 导入${input}/${input}.md默认模块
echo "Example

\`\`\`jsx
<${input}>${input}</${input}>

<style>
  {\`

  \`}
</style>
\`\`\`
" >> src/components/${input}/${input}.md

# 导入${input}/styled/index.tsx默认模块
echo "import styled from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const Styled${input} = styled.div\`
  color: red;
\`;

export { Styled${input} }
" >> src/components/${input}/styled/index.tsx

# 导入${input}/__test__/index.test.tsx默认模块
echo "import * as React from 'react'
import * as Enzyme from 'enzyme'
import { render } from 'enzyme'
import * as Adapter from 'enzyme-adapter-react-16'
import ${input} from '../index'

Enzyme.configure({ adapter: new Adapter() })

describe('${input}', () => {
  test('renders correctly', () => {
    const wrapper = render(
      <${input}>Test</${input}>
    )
    expect(wrapper).toMatchSnapshot()
  })

  test('two plus two is four', () => {
    expect(2 + 2).toBe(4)
  })
})
" >> src/components/${input}/__test__/index.test.tsx

echo -e "\033[32m \n新建组件成功: ${input}\n \033[0m"
