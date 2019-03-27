#！/bin/bash

upgradeVersion() {
  versionLine=$(grep version package.json)
  versionNum=$(echo ${versionLine} | tr -cd "[0-9].[0-9]")
  subVersionNum=$(echo ${versionNum##*.})
  newSubVersionNum=`expr $subVersionNum + 1`
  newVersionNum=$(echo ${versionNum/${subVersionNum}/${newSubVersionNum}})
  newVersionLine=$(echo "${versionLine/${versionNum}/${newVersionNum}}")
  sed -i "" "s/${versionLine}/${newVersionLine}/g" "package.json"
}

upgradeVersion

if [ $? -eq 0 ]
then
  echo "package.json更新成功：${newVersionLine}"
  break
else
  echo "package.json更新失败：${newVersionLine}"
  exit
fi

npm publish --registry http://xnpm.ximalaya.com

if [ $? -eq 0 ]
then
  echo "发布成功: ${newVersionLine}"
  git commit -am "publish:script"
  git push
  exit
else
  echo "发布失败: ${newVersionLine}"
  exit
fi
