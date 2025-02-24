# @create-nuxt-cli/cli

一个用于创建 Nuxt3 企业级应用的命令行工具。

## 特性

- 🚀 快速创建 Nuxt3 项目
- 📦 内置多种项目模板
- 🛠 自动安装依赖
- 🎨 支持自定义配置
- 📝 TypeScript 支持
- 🔍 智能项目检测

## 安装

```bash
npm install -g @create-nuxt-cli/cli
# 或者
yarn global add @create-nuxt-cli/cli
# 或者
pnpm add -g @create-nuxt-cli/cli
```

## 使用

```bash
# 创建新项目
create-nuxt-cli new my-project

# 添加功能到现有项目
create-nuxt-cli add auth

# 生成组件/页面
create-nuxt-cli generate component MyComponent
```

## 项目模板

- `default`: 基础模板，包含 Nuxt3 基本配置
- `full`: 完整模板，包含所有企业级功能
- `admin`: 管理系统模板
- `mobile`: 移动端模板

## 配置

你可以通过以下方式自定义配置：

```bash
create-nuxt-cli new my-project --template admin --pm pnpm
```

## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 运行测试
pnpm test
```

## 贡献

欢迎提交 Issue 和 Pull Request！

## 许可证

MIT

# 本地测试
pnpm build
node dist/index.js my-app

# 发布到 npm
pnpm publish


后续优化
添加更多模板选项
完善错误处理和日志
增加进度指示
提供回滚机制
添加单元测试


现在我们已经创建了一个基本的 Nuxt3 CLI 工具和基础模板。让我们总结一下已完成的工作：
CLI 工具功能：
支持创建新项目
提供多种模板选择
交互式配置
自动安装依赖
基础模板功能：
集成 Nuxt UI 组件库
TypeScript 支持
Pinia 状态管理
ESLint 配置
测试框架
现代化的 UI 设计
项目结构：
使用 pnpm workspace 管理多包
清晰的目录结构
完整的文档
接下来的步骤：
实现认证模板（auth）：
添加用户认证系统
JWT 处理
权限管理
实现完整企业级模板（full）：
添加更多企业级功能
数据库集成
API 集成
Docker 支持
1. 改进 CLI 工具：
添加更多自定义选项
优化错误处理
