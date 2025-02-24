import inquirer from 'inquirer'
import { logger } from '../utils/logger'
import { initializeProject } from '../core/init'
import type { InitOptions } from '../types'

interface ProjectAnswers {
  projectType: string
  template: string
  packageManager: 'npm' | 'yarn' | 'pnpm'
  features: string[]
}

export async function createProject(name: string, options: Partial<InitOptions>) {
  logger.info('欢迎使用 Create Nuxt CLI!')
  
  // 交互式配置收集
  const answers = await inquirer.prompt<ProjectAnswers>([
    {
      type: 'list',
      name: 'projectType',
      message: '请选择项目类型：',
      choices: [
        { name: 'Web应用 (SPA/SSR/SSG)', value: 'web' },
        { name: 'Micro Frontend 主应用', value: 'micro-fe' },
        { name: 'BFF 服务层', value: 'bff' },
        { name: 'Admin 管理系统', value: 'admin' }
      ]
    },
    {
      type: 'list',
      name: 'template',
      message: '请选择技术方案：',
      choices: [
        { 
          name: '默认方案: Nuxt3 + Pinia + UnoCSS + Vitest', 
          value: 'default' 
        },
        { 
          name: '管理后台: Nuxt3 + NaiveUI + ProTable + MockJS', 
          value: 'admin' 
        },
        { 
          name: 'BFF方案: Nuxt3 + tRPC + Zod + Swagger', 
          value: 'bff' 
        },
        { 
          name: '微前端: Nuxt3 + qiankun/wujie', 
          value: 'micro-fe' 
        }
      ],
      when: (answers) => answers.projectType === 'web'
    },
    {
      type: 'checkbox',
      name: 'features',
      message: '选择企业模块：',
      choices: [
        { name: '权限中心 (RBAC + 数据权限)', value: 'auth' },
        { name: '微服务网关', value: 'gateway' },
        { name: '低代码平台接入', value: 'low-code' },
        { name: '大屏可视化引擎', value: 'data-screen' },
        { name: '分布式日志追踪', value: 'trace' }
      ]
    },
    {
      type: 'list',
      name: 'packageManager',
      message: '选择包管理器：',
      choices: [
        { name: 'pnpm (推荐)', value: 'pnpm' },
        { name: 'yarn', value: 'yarn' },
        { name: 'npm', value: 'npm' }
      ],
      default: options.packageManager || 'pnpm'
    }
  ])

  // 初始化项目配置
  const initOptions: InitOptions = {
    projectName: name,
    template: answers.template || options.template || 'default',
    packageManager: answers.packageManager || options.packageManager || 'pnpm',
    version: '0.1.0'
  }

  // 执行项目初始化
  logger.startSpinner('正在初始化项目...')
  const initResult = await initializeProject(initOptions)
  logger.stopSpinner()

  if (initResult) {
    logger.success(`项目 ${name} 创建成功！`)
    logger.info('接下来：')
    logger.info(`  cd ${name}`)
    logger.info(`  ${answers.packageManager} install`)
    logger.info(`  ${answers.packageManager} dev`)
  }
} 