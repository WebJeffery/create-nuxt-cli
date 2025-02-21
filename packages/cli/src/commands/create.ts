import path from 'path';
import fs from 'fs-extra';
import prompts from 'prompts';
import { logger } from '../utils/logger';

interface CreateOptions {
  template: string;
  packageManager: string;
  typescript: boolean;
  force: boolean;
}

export async function create(projectName: string, options: CreateOptions) {
  // 验证项目名称
  if (!projectName) {
    const response = await prompts({
      type: 'text',
      name: 'projectName',
      message: '请输入项目名称:',
      initial: 'my-nuxt-app'
    });
    projectName = response.projectName;
  }

  if (!projectName) {
    logger.error('项目名称是必需的');
    process.exit(1);
  }

  // 验证模板选项
  if (!['base', 'auth', 'full'].includes(options.template)) {
    const response = await prompts({
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
    options.template = response.template;
  }

  const targetDir = path.resolve(process.cwd(), projectName);

  // 检查目标目录是否存在
  if (fs.existsSync(targetDir)) {
    if (!options.force) {
      const { overwrite } = await prompts({
        type: 'confirm',
        name: 'overwrite',
        message: `目录 ${projectName} 已存在。是否覆盖？`,
        initial: false
      });

      if (!overwrite) {
        logger.warn('操作已取消');
        process.exit(0);
      }

      await fs.remove(targetDir);
    } else {
      await fs.remove(targetDir);
    }
  }

  logger.info(`创建项目 ${projectName}...`);

  try {
    // 复制模板
    const templateDir = path.resolve(__dirname, `../../../templates/${options.template}`);
    await fs.copy(templateDir, targetDir);

    // 更新 package.json
    const pkgPath = path.join(targetDir, 'package.json');
    const pkg = await fs.readJson(pkgPath);
    pkg.name = projectName;
    await fs.writeJson(pkgPath, pkg, { spaces: 2 });

    // 安装依赖
    logger.info('安装依赖...');
    // TODO: 实现依赖安装

    logger.success(`项目创建成功！\n`);
    logger.info(`开始使用：\n`);
    logger.info(`  cd ${projectName}`);
    logger.info(`  ${options.packageManager} install`);
    logger.info(`  ${options.packageManager} dev\n`);
  } catch (error) {
    logger.error('项目创建失败：', error);
    process.exit(1);
  }
} 