<template>
  <div class="container">
    <h1 class="text-center py-4">关于我们</h1>
    <div class="about-content">
      <p>
        这是一个基于 Nuxt3 的企业级应用模板，我们的目标是为开发者提供一个功能完备、易于使用的起点。
      </p>
      <h2 class="mt-4">技术栈</h2>
      <ul class="tech-list">
        <li>
          <strong>Nuxt3</strong> - Vue3 的全栈框架
        </li>
        <li>
          <strong>TypeScript</strong> - 类型安全的 JavaScript
        </li>
        <li>
          <strong>Pinia</strong> - Vue 的状态管理解决方案
        </li>
        <li>
          <strong>SCSS</strong> - CSS 预处理器
        </li>
        <li>
          <strong>ESLint & Prettier</strong> - 代码质量和格式化工具
        </li>
        <li>
          <strong>Vitest</strong> - 单元测试框架
        </li>
        <li>
          <strong>Playwright</strong> - E2E 测试工具
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'default'
})
</script>

<style lang="scss" scoped>
.about-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 0;

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    color: #374151;
  }
}

.tech-list {
  list-style: none;
  padding: 0;
  margin-top: 1rem;

  li {
    padding: 1rem;
    margin-bottom: 1rem;
    background: #f4f4f5;
    border-radius: 8px;
    
    strong {
      color: var(--primary-color);
    }
  }
}
</style> 