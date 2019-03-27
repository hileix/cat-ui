#！/bin/bash

# version=$(grep version package.json)

# echo ${version}
# echo ${version/.*\d/5}
# echo ${sed 's/version/sss/g'}
# echo hssere365test | sed 's/.*ere\([0-9]*\).*/\1/g'
# echo ${version} | sed 's/.*ere\([0-9]*\).*/\1/g'
# echo ${version}

# basepath=$(dirname $0)
# echo $basepath
# sed 's/version/sss/g' 'package.json'
# sed -i "" 's/"version": "0.0.4"/"version": "0.0.5"/g' 'package.json'

npm publish --registry http://xnpm.ximalaya.com

