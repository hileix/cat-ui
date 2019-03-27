#!/bin/bash

set -e

checkBranch() {
  branch=$(git branch | grep \* | cut -d ' ' -f2)
  if [ branch != 'master' ]
  then
    echo -e "\033[31m \n只有master分支，才能发布到xnpm\n \033[0m"
    exit
  fi
}

upgradeVersion() {
  versionLine=$(grep version package.json)
  versionNum=$(echo ${versionLine} | tr -cd "[0-9].[0-9]")
  subVersionNum=$(echo ${versionNum##*.})
  newSubVersionNum=`expr $subVersionNum + 1`
  newVersionNum=$(echo ${versionNum/${subVersionNum}/${newSubVersionNum}})
  newVersionLine=$(echo "${versionLine/${versionNum}/${newVersionNum}}")
  sed -i "" "s/${versionLine}/${newVersionLine}/g" "package.json"
  echo -e "\033[32m \npackage.json更新成功：${newVersionLine}\n \033[0m"
}

checkBranch

upgradeVersion

npm publish --registry http://xnpm.ximalaya.com

if [ $? -eq 0 ]
then
  git commit -am "release:script"
  git push
  git status
  echo -e "\033[32m \n发布成功: ${newVersionLine}\n \033[0m"
else
  echo -e "\033[31m \n发布失败: ${newVersionLine}\n \033[0m"
fi
