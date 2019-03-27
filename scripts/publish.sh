#！/bin/bash

versionLine=$(grep version package.json)
versionNum=$(echo ${versionLine} | tr -cd "[0-9].[0-9]")
subVersionNum=$(echo ${versionNum##*.})
newSubVersionNum=`expr $subVersionNum + 1`
newVersionNum=$(echo ${versionNum/${subVersionNum}/${newSubVersionNum}})
newVersionLine=$(echo "${versionLine/${versionNum}/${newVersionNum}}")

echo ${versionLine}
echo ${versionNum}
echo ${subVersionNum}
echo ${newSubVersionNum}
echo ${newVersionNum}
echo ${newVersionLine}

sed -i "" "s/${versionLine}/${newVersionLine}/g" "package.json"

git commit -am "publish:script"

npm publish --registry http://xnpm.ximalaya.com

echo "发布成功：${newVersionLine}"
