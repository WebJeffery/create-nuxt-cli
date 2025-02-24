import { defineConfig } from "tsup";

const isDev = process.env.npm_lifecycle_event === "dev";

export default defineConfig({
  entry: {
    'cli': 'bin/cli.ts'
  },
  format: ["esm"],
  dts: true,
  clean: true,
  shims: true,
  splitting: false,
  sourcemap: true,
  minify: false,
  target: "esnext",
  outDir: "dist",
  onSuccess: isDev ? "node dist/cli.js" : undefined,
  treeshake: true,
  external: [
    'inquirer',
    'chalk',
    'ora',
    'execa',
    'fs-extra',
    'cac'
  ]
});