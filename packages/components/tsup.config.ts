import { defineConfig } from 'tsup'

export default defineConfig({
  target: 'es6',
  entry: ['src/index.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
})
