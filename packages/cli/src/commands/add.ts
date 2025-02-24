import inquirer from 'inquirer'
import { logger } from '../utils/logger'

interface FeatureOptions {
  name: string
  description: string
  dependencies: string[]
  devDependencies: string[]
  files: string[]
}

const FEATURES: Record<string, FeatureOptions> = {
  auth: {
    name: '权限中心',
    description: 'RBAC + 数据权限',
    dependencies: [
      '@auth/nuxt',
      '@auth/core',
      'jsonwebtoken'
    ],
    devDependencies: [
      '@types/jsonwebtoken'
    ],
    files: [
      'auth/middleware',
      'auth/composables',
      'auth/types'
    ]
  },
  gateway: {
    name: '微服务网关',
    description: '服务发现 + 负载均衡',
    dependencies: [
      '@nuxt/proxy',
      'http-proxy-middleware'
    ],
    devDependencies: [],
    files: [
      'gateway/config',
      'gateway/middleware'
    ]
  }
}

export async function addFeature(feature: string) {
  // 验证功能是否存在
  if (!FEATURES[feature]) {
    const { selectedFeature } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedFeature',
        message: '请选择要添加的功能：',
        choices: Object.entries(FEATURES).map(([key, value]) => ({
          name: `${value.name} (${value.description})`,
          value: key
        }))
      }
    ])
    feature = selectedFeature
  }

  const selectedFeature = FEATURES[feature]
  
  // 确认安装
  const { confirm } = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'confirm',
      message: `确认添加 ${selectedFeature.name} 功能？这将安装以下依赖：\n` +
        `  Dependencies: ${selectedFeature.dependencies.join(', ')}\n` +
        `  DevDependencies: ${selectedFeature.devDependencies.join(', ')}`,
      default: true
    }
  ])

  if (!confirm) {
    logger.info('已取消安装')
    return
  }

  // 开始安装
  logger.startSpinner(`正在添加 ${selectedFeature.name} 功能...`)
  
  try {
    // TODO: 实现实际的安装逻辑
    // 1. 安装依赖
    // 2. 复制模板文件
    // 3. 修改配置文件
    
    logger.stopSpinner()
    logger.success(`${selectedFeature.name} 功能添加成功！`)
  } catch (error) {
    logger.stopSpinner()
    throw error
  }
} 