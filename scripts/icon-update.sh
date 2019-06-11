#!/bin/bash

set -e

code=$1

# mv src/components/Icon/styled/index.tsx src/components/Icon/styled/index.tsx.bak

echo "import { createGlobalStyle } from 'styled-components'
import { primaryBtnColor } from '../../../styles/theme'

const StyledIcon = createGlobalStyle\`
  
\`;

export { StyledIcon }
" >> src/components/Icon/styled/index.tsx.bak

sed -i "/createGlobalStyle/a abc" src/components/Icon/styled/index.tsx.bak