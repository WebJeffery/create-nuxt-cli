import path from 'path'
import fs from 'fs-extra'
import { logger } from '../../utils/logger'

interface ComponentOptions {
  description: string
  withTest: boolean
  withStory: boolean
}

const COMPONENT_TEMPLATE = `<script setup lang="ts">
defineProps<{
  // 在此定义组件属性
}>()

// 在此定义组件逻辑
</script>

<template>
  <div>
    <!-- 在此编写组件模板 -->
  </div>
</template>

<style scoped>
/* 在此编写组件样式 */
</style>
`

const TEST_TEMPLATE = `import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import COMPONENT_NAME from './COMPONENT_NAME.vue'

describe('COMPONENT_NAME', () => {
  it('renders correctly', () => {
    const wrapper = mount(COMPONENT_NAME)
    expect(wrapper.exists()).toBe(true)
  })
})
`

const STORY_TEMPLATE = `import type { Meta, StoryObj } from '@storybook/vue3'
import COMPONENT_NAME from './COMPONENT_NAME.vue'

const meta = {
  title: 'Components/COMPONENT_NAME',
  component: COMPONENT_NAME,
  tags: ['autodocs'],
} satisfies Meta<typeof COMPONENT_NAME>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // 在此定义组件参数
  }
}
`

export async function generateComponent(name: string, options: ComponentOptions) {
  const componentDir = path.resolve(process.cwd(), 'components')
  const componentPath = path.join(componentDir, name)

  // 创建组件目录
  await fs.ensureDir(componentPath)

  // 生成组件文件
  const componentFile = path.join(componentPath, `${name}.vue`)
  await fs.writeFile(componentFile, COMPONENT_TEMPLATE)

  // 生成测试文件
  if (options.withTest) {
    const testFile = path.join(componentPath, `${name}.test.ts`)
    const testContent = TEST_TEMPLATE
      .replace(/COMPONENT_NAME/g, name)
    await fs.writeFile(testFile, testContent)
  }

  // 生成 Story 文件
  if (options.withStory) {
    const storyFile = path.join(componentPath, `${name}.stories.ts`)
    const storyContent = STORY_TEMPLATE
      .replace(/COMPONENT_NAME/g, name)
    await fs.writeFile(storyFile, storyContent)
  }

  // 生成 index.ts
  const indexFile = path.join(componentPath, 'index.ts')
  await fs.writeFile(
    indexFile,
    `export { default } from './${name}.vue'\n`
  )

  logger.success(`组件 ${name} 生成成功！`)
} 