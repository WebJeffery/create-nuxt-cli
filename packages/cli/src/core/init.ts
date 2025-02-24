import { execa } from 'execa'
import { logger } from '@/utils/logger'
import { checkDiskSpace } from '@/utils/healthcheck'
import { getNodeVersion, getNpmVersion } from '@/utils/env'
import type { InitOptions } from '@/types'

export async function initializeProject(options: InitOptions) {
  logger.info('正在执行环境检查...')

  // 检查 Node.js 版本
  const nodeVersion = await getNodeVersion()
  if (!nodeVersion.satisfies) {
    logger.warn(`当前 Node.js 版本 ${nodeVersion.version} 不满足要求，建议升级到 ${nodeVersion.required}`)
  }

  // 检查磁盘空间
  const space = await checkDiskSpace()
  if (!space.hasEnoughSpace) {
    logger.error(`磁盘空间不足: 剩余 ${space.free}GB，最低要求 ${space.required}GB`)
    process.exit(1)
  }

  // 检查包管理器
  const npmVersion = await getNpmVersion()
  logger.info(`使用包管理器: ${npmVersion.name} ${npmVersion.version}`)

  return {
    nodeVersion,
    space,
    npmVersion
  }
} 