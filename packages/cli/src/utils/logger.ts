import chalk from 'chalk'
import ora from 'ora'

class Logger {
  private spinner = ora()

  info(message: string) {
    console.log(chalk.blue('ℹ'), message)
  }

  success(message: string) {
    console.log(chalk.green('✔'), message)
  }

  warn(message: string) {
    console.log(chalk.yellow('⚠'), message)
  }

  error(message: string) {
    console.log(chalk.red('✖'), message)
  }

  startSpinner(text: string) {
    this.spinner.start(text)
  }

  stopSpinner() {
    this.spinner.stop()
  }

  updateSpinner(text: string) {
    this.spinner.text = text
  }
}

export const logger = new Logger() 