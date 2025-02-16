import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';

export interface CreateAppOptions {
  name: string;
  template: string;
  typescript: boolean;
  packageManager: string;
}

export async function createApp(options: CreateAppOptions) {
  const { name, template, typescript, packageManager } = options;
  const projectDir = path.resolve(process.cwd(), name);

  // 创建项目目录
  await fs.ensureDir(projectDir);

  // 初始化 Nuxt 项目
  await execa('npx', ['create-nuxt-app', name], {
    cwd: projectDir,
    stdio: 'inherit'
  });

  // 根据模板添加额外配置
  switch (template) {
    case 'auth':
      // 添加认证相关配置
      break;
    case 'full':
      // 添加完整企业级配置
      break;
    default:
      // 基础配置
      break;
  }

  // 安装依赖
  await execa(packageManager, ['install'], {
    cwd: projectDir,
    stdio: 'inherit'
  });

  console.log(`\n项目创建成功！\n`);
  console.log(`进入项目目录: cd ${name}`);
  console.log(`启动开发服务器: ${packageManager} run dev\n`);
} 