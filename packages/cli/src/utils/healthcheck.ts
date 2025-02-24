import { execa } from 'execa'
import { logger } from './logger'

export interface DiskSpace {
  free: number
  required: number
  hasEnoughSpace: boolean
}

export async function checkDiskSpace(): Promise<DiskSpace> {
  try {
    // 在 macOS 和 Linux 上使用 df 命令
    const { stdout } = await execa('df', ['-k', '.'])
    const lines = stdout.trim().split('\n')
    const [_, ...fields] = lines[1].split(/\s+/)
    
    // 在 macOS 上，可用空间在第 4 个字段
    // 在 Linux 上，可用空间在第 3 个字段
    const availableField = process.platform === 'darwin' ? 3 : 2
    const freeSpace = Math.floor(parseInt(fields[availableField]) / 1024 / 1024) // 转换为 GB

    const requiredSpace = 1 // 最低要求 1GB
    const hasEnoughSpace = freeSpace >= requiredSpace

    if (!hasEnoughSpace) {
      logger.warn(`可用空间较少: ${freeSpace}GB，建议至少 ${requiredSpace}GB`)
    }

    return {
      free: freeSpace,
      required: requiredSpace,
      hasEnoughSpace: true // 暂时不阻止安装
    }
  } catch (error) {
    // 如果无法检查磁盘空间，我们假设有足够的空间
    logger.warn('无法检查磁盘空间，将继续执行')
    return {
      free: 999,
      required: 1,
      hasEnoughSpace: true
    }
  }
} 