import inquirer from 'inquirer'
import { logger } from '../../utils/logger'
import { generateComponent as generateComponentTemplate } from './component'
import { generatePage as generatePageTemplate } from './page'

type GenerateType = 'component' | 'page'

export async function generateComponent(type: string, name: string) {
  // 验证生成类型
  if (!['component', 'page'].includes(type)) {
    const { selectedType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedType',
        message: '请选择要生成的类型：',
        choices: [
          { name: '组件 (Component)', value: 'component' },
          { name: '页面 (Page)', value: 'page' }
        ]
      }
    ])
    type = selectedType
  }

  // 收集额外配置
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'description',
      message: '请输入描述：',
      default: ''
    },
    {
      type: 'confirm',
      name: 'withTest',
      message: '是否生成测试文件？',
      default: true
    },
    {
      type: 'confirm',
      name: 'withStory',
      message: '是否生成 Story 文件？',
      default: false
    }
  ])

  // 开始生成
  logger.startSpinner(`正在生成 ${type} ${name}...`)

  try {
    if (type === 'component') {
      await generateComponentTemplate(name, answers)
    } else {
      await generatePageTemplate(name, answers)
    }

    logger.stopSpinner()
    logger.success(`${type} ${name} 生成成功！`)
  } catch (error) {
    logger.stopSpinner()
    throw error
  }
} 