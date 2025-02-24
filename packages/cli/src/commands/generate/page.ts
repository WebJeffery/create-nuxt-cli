import path from 'path'
import fs from 'fs-extra'
import { logger } from '../../utils/logger'

interface PageOptions {
  description: string
  withTest: boolean
  withStory: boolean
}

const PAGE_TEMPLATE = `<script setup lang="ts">
definePageMeta({
  title: 'PAGE_TITLE',
  layout: 'default'
})

// 在此定义页面逻辑
</script>

<template>
  <div>
    <h1>PAGE_TITLE</h1>
    <!-- 在此编写页面内容 -->
  </div>
</template>

<style scoped>
/* 在此编写页面样式 */
</style>
`

const TEST_TEMPLATE = `import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import PAGE_NAME from './PAGE_NAME.vue'

describe('PAGE_NAME', () => {
  it('renders correctly', () => {
    const wrapper = mount(PAGE_NAME)
    expect(wrapper.exists()).toBe(true)
  })
})
`

export async function generatePage(name: string, options: PageOptions) {
  const pagesDir = path.resolve(process.cwd(), 'pages')
  
  // 处理嵌套路由
  const pagePath = name.split('/').filter(Boolean)
  const pageName = pagePath[pagePath.length - 1]
  const pageDir = path.join(pagesDir, ...pagePath.slice(0, -1))

  // 创建页面目录
  await fs.ensureDir(pageDir)

  // 生成页面文件
  const pageFile = path.join(pageDir, `${pageName}.vue`)
  const pageContent = PAGE_TEMPLATE
    .replace(/PAGE_TITLE/g, pageName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
    )
  await fs.writeFile(pageFile, pageContent)

  // 生成测试文件
  if (options.withTest) {
    const testFile = path.join(pageDir, `${pageName}.test.ts`)
    const testContent = TEST_TEMPLATE
      .replace(/PAGE_NAME/g, pageName)
    await fs.writeFile(testFile, testContent)
  }

  logger.success(`页面 ${name} 生成成功！`)
} 