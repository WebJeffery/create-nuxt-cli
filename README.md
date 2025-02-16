
# Create Nuxt CLI

一个用于快速创建企业级 Nuxt3 全栈应用的命令行工具。

## 特性

- 🚀 快速创建 - 通过简单的命令即可创建完整的 Nuxt3 项目
- 📦 模块化设计 - 基于 pnpm workspace + Turborepo 的模块化项目结构
- 🎯 多种模板 - 提供多种项目模板，满足不同场景需求
- 🔒 认证系统 - 内置完整的用户认证和授权系统
- 🎨 UI 组件库 - 集成现代化 UI 组件库
- 📱 响应式设计 - 完美适配多种设备
- 🔧 开发工具 - ESLint, Prettier, TypeScript 等开发工具配置
- 🧪 测试框架 - 集成单元测试和 E2E 测试
- 📈 性能优化 - 内置性能优化最佳实践
- 🚢 CI/CD - 预配置的 CI/CD 流程

## 项目结构

```
create-nuxt-cli/
├── packages/
│   ├── cli/                # CLI 工具主程序
│   ├── create-app/         # 创建应用的核心逻辑
│   └── config/            # 共享配置
├── templates/             # 项目模板
│   ├── base/             # 基础模板
│   ├── auth/             # 认证模板
│   └── full/             # 完整企业级模板
├── turbo.json            # Turborepo 配置
└── pnpm-workspace.yaml   # 工作空间配置
```

## 快速开始

```bash
# 使用 npm
npm create nuxt-cli@latest my-app

# 使用 pnpm
pnpm create nuxt-cli my-app

# 使用 yarn
yarn create nuxt-cli my-app
```

## 可用模板

### 基础模板 (base)
- Nuxt3 基础配置
- TypeScript 支持
- ESLint + Prettier
- 基础布局

### 认证模板 (auth)
包含基础模板全部功能，另加：
- 用户认证系统
- 权限管理
- JWT 处理
- 中间件配置

### 完整企业级模板 (full)
包含认证模板全部功能，另加：
- UI 组件库
- 状态管理
- API 集成
- 数据库配置
- 测试配置
- CI/CD 配置


## 开发

```bash
# 安装依赖
pnpm install

# 开发模式
pnpm dev

# 构建
pnpm build

# 测试
pnpm test
```

## 贡献指南

1. Fork 本项目
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 创建 Pull Request

## 许可证

MIT 