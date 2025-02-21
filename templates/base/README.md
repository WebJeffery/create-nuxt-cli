# Nuxt3 企业级应用模板

这是一个基于 Nuxt3 的企业级应用模板，提供了一套完整的开发框架和最佳实践。

## 特性

- 🚀 基于 Nuxt3 的现代化开发框架
- 🎨 集成 Nuxt UI 组件库，美观易用
- 📦 使用 Pinia 进行状态管理
- 🔧 TypeScript 支持，类型安全
- 📝 ESLint + 代码规范
- 🧪 单元测试 + E2E 测试支持
- 🚢 自动化部署配置

## 快速开始

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev

# 构建生产版本
pnpm build

# 预览生产版本
pnpm preview
```

## 项目结构

```
.
├── assets/           # 静态资源
├── components/       # 组件
├── composables/      # 组合式函数
├── layouts/          # 布局
├── pages/           # 页面
├── public/          # 公共文件
├── stores/          # 状态管理
├── types/           # 类型定义
├── utils/           # 工具函数
├── app.vue          # 应用入口
├── nuxt.config.ts   # Nuxt 配置
└── tsconfig.json    # TypeScript 配置
```

## 开发指南

### 组件开发

- 使用 TypeScript 编写组件
- 遵循 Vue3 组合式 API
- 使用 Nuxt UI 组件库

### 状态管理

使用 Pinia 进行状态管理：

```ts
// stores/counter.ts
export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const increment = () => count.value++
  return { count, increment }
})
```

### 测试

```bash
# 运行单元测试
pnpm test

# 运行 E2E 测试
pnpm test:e2e
```

## 部署

项目支持多种部署方式：

- 静态托管 (Static Hosting)
- Node.js 服务器
- Docker 容器

## 贡献指南

1. Fork 本仓库
2. 创建特性分支
3. 提交代码
4. 创建 Pull Request

## 许可证

MIT 