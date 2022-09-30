#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹(注意路径)
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 注意修改用户名和分支名(有的人默认分支是master而不是main, 远程的分支名必须是 gh-pages)
# 最终会部署到: https://<USER_NAME>.github.io/<REPO_NAME>
git push -f origin main:gh-pages

# 回到项目根目录
cd -

# 写好文档之后, 执行这个脚本发布
