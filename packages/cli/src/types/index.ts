export interface InitOptions {
  projectName: string
  template: string
  packageManager: 'npm' | 'yarn' | 'pnpm'
  version: string
}

export interface ProjectConfig {
  name: string
  version: string
  description: string
  author: string
  dependencies: Record<string, string>
  devDependencies: Record<string, string>
}

export interface TemplateOptions {
  name: string
  path: string
  description: string
  features: string[]
} 