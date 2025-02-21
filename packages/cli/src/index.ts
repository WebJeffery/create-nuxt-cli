#!/usr/bin/env node
import { cac } from 'cac';
import { version } from '../package.json';
import { create } from './commands/create';
import { logger } from './utils/logger';

const cli = cac('create-nuxt-cli');

cli
  .command('[project-name]', '创建一个新的 Nuxt3 项目')
  .option('--template <template>', '选择项目模板 (base/auth/full)', { default: 'base' })
  .option('--packageManager <pm>', '选择包管理器 (npm/yarn/pnpm)', { default: 'pnpm' })
  .option('--ts, --typescript', '使用 TypeScript', { default: true })
  .option('--force', '强制覆盖目标目录', { default: false })
  .action(async (projectName: string, options: any) => {
    try {
      await create(projectName, options);
    } catch (error) {
      logger.error('项目创建失败：', error);
      process.exit(1);
    }
  });

cli.help();
cli.version(version);

try {
  cli.parse();
} catch (error) {
  logger.error('命令执行失败：', error);
  process.exit(1);
} 