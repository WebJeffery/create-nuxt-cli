<template>
  <div>
    <UCard class="mb-4">
      <template #header>
        <h1 class="text-xl font-bold">欢迎使用 Nuxt3 企业级应用</h1>
      </template>

      <div class="space-y-4">
        <p>这是一个使用 Nuxt3 构建的企业级应用模板，包含以下特性：</p>

        <ul class="list-disc list-inside space-y-2">
          <li>基于 Nuxt3 的现代化开发框架</li>
          <li>集成 Nuxt UI 组件库</li>
          <li>使用 Pinia 进行状态管理</li>
          <li>TypeScript 支持</li>
          <li>ESLint + 代码规范</li>
          <li>单元测试 + E2E 测试</li>
          <li>自动化部署配置</li>
        </ul>
      </div>

      <template #footer>
        <div class="flex justify-end space-x-2">
          <UButton to="https://nuxt.com" target="_blank" color="gray"> 了解 Nuxt3 </UButton>
          <UButton to="https://ui.nuxt.com" target="_blank"> 浏览组件 </UButton>
        </div>
      </template>
    </UCard>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <UCard v-for="i in 3" :key="i">
        <template #header>
          <h2 class="text-lg font-semibold">功能模块 {{ i }}</h2>
        </template>
        <p>这里是功能模块的详细说明和示例代码。</p>
      </UCard>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: '首页'
})
</script>

<style lang="scss" scoped>
.features {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.feature {
  padding: 1.5rem;
  border-radius: 8px;
  background: #f4f4f5;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }

  p {
    color: #71717a;
  }
}
</style>
