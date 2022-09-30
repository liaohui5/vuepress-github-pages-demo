## 介绍

利用 github pages 部署 vuepress 项目

## 部署步骤

### 1.新建仓库

1. 创建仓库
2. 在 `.vitepress/config.js` 中设置 `base` 选项(和仓库名同名)
3. 在本地初始化项目并提交到 github

```sh
git init
git add .
git commit -m "init repo"
git remote add origin https://github.com/liaohui5/vuepress-github-pages-demo
git push origin main:main
```

![](https://raw.githubusercontent.com/liaohui5/images/main/images/202209302347575.png)

### 2.新建编译部署脚本 `publish.sh`

```sh
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
```

### 3.查看结果

查看 github pages 中, 部署好的 url(提交后, 可能需要等待 2 分钟左右才能刷新)

![](https://raw.githubusercontent.com/liaohui5/images/main/images/202210010022423.png)

![](https://raw.githubusercontent.com/liaohui5/images/main/images/202210010025323.png)
