#!/usr/bin/env node

import { Command } from 'commander';
import prompts from 'prompts';
import pc from 'picocolors';
// import { createApp } from '@create-nuxt-cli/create-app';
import { version } from '../package.json';

const program = new Command();

program
  .name('create-nuxt-cli')
  .description('创建 Nuxt3 企业级应用的 CLI 工具')
  .version(version)
  .argument('[name]', '项目名称')
  .option('-t, --template <template>', '选择模板 (base/auth/full)', 'base')
  .option('--ts, --typescript', '使用 TypeScript', true)
  .option('--pm <package-manager>', '包管理器 (npm/pnpm/yarn)', 'pnpm')
  .action(async (name: string | undefined, options) => {
    console.log(`\n${pc.cyan('Create Nuxt CLI')} v${version}\n`);

    let projectName = name;
    let template = options.template;

    if (!projectName) {
      const res = await prompts({
        type: 'text',
        name: 'projectName',
        message: '请输入项目名称:',
        initial: 'my-nuxt-app'
      });
      projectName = res.projectName;
    }

    if (!['base', 'auth', 'full'].includes(template)) {
      const res = await prompts({
        type: 'select',
        name: 'template',
        message: '请选择项目模板:',
        choices: [
          { title: '基础模板', value: 'base' },
          { title: '认证模板', value: 'auth' },
          { title: '完整企业级模板', value: 'full' }
        ],
        initial: 0
      });
      template = res.template;
    }

    if (!projectName) {
      console.log(pc.red('错误: 项目名称是必需的'));
      process.exit(1);
    }

    try {
      // await createApp({
      //   name: projectName,
      //   template,
      //   typescript: options.typescript,
      //   packageManager: options.pm
      // });
    } catch (error) {
      console.log(pc.red(`\n创建项目失败: ${(error as Error).message}`));
      process.exit(1);
    }
  });

program.parse(); 