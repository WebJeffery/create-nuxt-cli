import { execa } from 'execa';
import fs from 'fs-extra';
import path from 'path';
import pc from 'picocolors';

interface CreateAppOptions {
  name: string;
  template: 'base' | 'auth' | 'full';
  typescript: boolean;
  packageManager: 'npm' | 'pnpm' | 'yarn';
}

export async function createApp(options: CreateAppOptions) {
  const cwd = process.cwd();
  const targetDir = path.join(cwd, options.name);

  // 检查目录是否存在
  if (await fs.pathExists(targetDir)) {
    throw new Error(`目录 ${options.name} 已存在`);
  }

  console.log(`\n${pc.green('✨')} 创建项目 ${pc.cyan(options.name)}...\n`);

  // 创建项目目录
  await fs.ensureDir(targetDir);

  try {
    // 复制模板文件
    const templateDir = path.join(__dirname, '../../templates', options.template);
    await fs.copy(templateDir, targetDir);

    // 安装依赖
    console.log(`\n${pc.green('📦')} 安装依赖...\n`);
    
    const installCommand = options.packageManager === 'yarn' 
      ? 'yarn' 
      : options.packageManager === 'pnpm'
      ? 'pnpm install'
      : 'npm install';

    await execa(installCommand, [], {
      cwd: targetDir,
      stdio: 'inherit'
    });

    console.log(`\n${pc.green('🎉')} 项目创建成功！\n`);
    console.log(`要开始开发，运行以下命令：\n`);
    console.log(pc.cyan(`  cd ${options.name}`));
    console.log(pc.cyan(`  ${options.packageManager} dev\n`));

  } catch (error) {
    // 清理目录
    await fs.remove(targetDir);
    throw error;
  }
} 