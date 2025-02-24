#!/usr/bin/env node

import { cac } from 'cac'
import { version } from '../package.json'
import { logger } from '../src/utils/logger'
import { createProject } from '../src/commands/new'
import { addFeature } from '../src/commands/add'
import { generateComponent } from '../src/commands/generate'

const cli = cac('create-nuxt-cli')

cli
  .command('new <project-name>', '创建新的 Nuxt3 项目')
  .option('--template <template>', '选择项目模板', { default: 'default' })
  .option('--pm <package-manager>', '选择包管理器 (npm/yarn/pnpm)', { default: 'pnpm' })
  .action(async (projectName: string, options: any) => {
    try {
      await createProject(projectName, options)
    } catch (error) {
      logger.error(error instanceof Error ? error.message : '创建项目失败')
      process.exit(1)
    }
  })

cli
  .command('add <feature>', '添加功能到现有项目')
  .action(async (feature: string) => {
    try {
      await addFeature(feature)
    } catch (error) {
      logger.error(error instanceof Error ? error.message : '添加功能失败')
      process.exit(1)
    }
  })

cli
  .command('generate <type> <name>', '生成组件或页面')
  .alias('g')
  .action(async (type: string, name: string) => {
    try {
      await generateComponent(type, name)
    } catch (error) {
      logger.error(error instanceof Error ? error.message : '生成失败')
      process.exit(1)
    }
  })

cli.help()
cli.version(version)

cli.parse() 