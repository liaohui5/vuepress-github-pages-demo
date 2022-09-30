## 介绍

利用 github pages 部署 vuepress 项目

## 部署步骤

### 1.新建编译部署脚本 `publish.sh`

```sh
#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹(注意目录路径)
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 注意修改用户名和分支名(有的人默认分支是master而不是main)
# 最终会部署到: https://<USER_NAME>.github.io/<REPO_NAME>
git push -f git@github.com:liaohui5/vuepress-github-pages-demo.git main:gh-pages

cd -

# 写好文档之后, 执行这个脚本
```

### 2.新建仓库操作

1. 创建仓库
2. 在 `.vitepress/config.js` 中设置 `base` 选项(和仓库名同名)

![](https://raw.githubusercontent.com/liaohui5/images/main/images/202209302347575.png)


### 3.github pages 设置

