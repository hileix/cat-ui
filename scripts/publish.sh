#!/bin/bash

set -e

upgradeVersion() {
  versionLine=$(grep version package.json)
  versionNum=$(echo ${versionLine} | tr -cd "[0-9].[0-9]")
  subVersionNum=$(echo ${versionNum##*.})
  newSubVersionNum=`expr $subVersionNum + 1`
  newVersionNum=$(echo ${versionNum/${subVersionNum}/${newSubVersionNum}})
  newVersionLine=$(echo "${versionLine/${versionNum}/${newVersionNum}}")
  sed -i "" "s/${versionLine}/${newVersionLine}/g" "package.json"
  echo "package.json更新成功：${newVersionLine}"
}

upgradeVersion

if [ $? -eq 0 ]
then
  git commit -am "publish:script"
  git push
  git status
  echo "发布成功: ${newVersionLine}"
else
  echo "发布失败: ${newVersionLine}"
fi
