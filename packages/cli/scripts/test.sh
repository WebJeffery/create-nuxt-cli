#!/bin/bash

# 构建项目
pnpm build

# 创建测试目录
rm -rf test-project
mkdir test-project
cd test-project

# 运行 CLI
node ../dist/cli.js new my-app

# 如果成功，进入项目目录
if [ $? -eq 0 ]; then
  cd my-app
  pnpm install
  pnpm dev
fi 