#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 打包
npm run build

# 进入打包后的文件夹
cd dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME

git init
git add .
git commit -m '部署更新'

# 如果你要部署在 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/xtzg/home-made.git HEAD:gh-pages

# 返回上一级目录
cd .. 

echo "部署完成，请等待几分钟后访问 https://xtzg.github.io/home-made/"