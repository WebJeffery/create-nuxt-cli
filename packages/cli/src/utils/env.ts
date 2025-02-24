import { execa } from 'execa'
import semver from 'semver'

export interface NodeVersion {
  version: string
  required: string
  satisfies: boolean
}

export interface NpmVersion {
  name: string
  version: string
}

export async function getNodeVersion(): Promise<NodeVersion> {
  const required = '>=18.0.0'
  const version = process.version
  return {
    version,
    required,
    satisfies: semver.satisfies(version, required)
  }
}

export async function getNpmVersion(): Promise<NpmVersion> {
  try {
    // 检查是否安装了 pnpm
    const { stdout: pnpmVersion } = await execa('pnpm', ['--version'])
    return { name: 'pnpm', version: pnpmVersion.trim() }
  } catch {
    try {
      // 检查是否安装了 yarn
      const { stdout: yarnVersion } = await execa('yarn', ['--version'])
      return { name: 'yarn', version: yarnVersion.trim() }
    } catch {
      // 默认使用 npm
      const { stdout: npmVersion } = await execa('npm', ['--version'])
      return { name: 'npm', version: npmVersion.trim() }
    }
  }
} 