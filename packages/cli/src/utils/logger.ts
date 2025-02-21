import pc from 'picocolors';

export const logger = {
  info(message: string, ...args: any[]) {
    console.log(pc.cyan(`✨ ${message}`), ...args);
  },
  success(message: string, ...args: any[]) {
    console.log(pc.green(`✔ ${message}`), ...args);
  },
  warn(message: string, ...args: any[]) {
    console.log(pc.yellow(`⚠ ${message}`), ...args);
  },
  error(message: string, ...args: any[]) {
    console.log(pc.red(`✘ ${message}`), ...args);
  }
}; 