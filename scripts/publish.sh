#!/bin/bash

set -e

versionLine=$(grep version package.json)
versionNum=$(echo ${versionLine} | tr -cd "[0-9].[0-9]")
subVersionNum=$(echo ${versionNum##*.})
newSubVersionNum=`expr $subVersionNum + 1`
newVersionNum=$(echo ${versionNum/${subVersionNum}/${newSubVersionNum}})
newVersionLine=$(echo "${versionLine/${versionNum}/${newVersionNum}}")
sed -i "" "s/${versionLine}/${newVersionLine}/g" "package.json"
echo "package.json更新成功：${newVersionLine}"

git commit -am "publish:script"
git push

echo "发布成功: ${newVersionLine}"
