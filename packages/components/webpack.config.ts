import path from 'path'
import { Configuration } from 'webpack'

const baseConfig: Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
    next: 'Next',
  },
}

const esmConfig: Configuration = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.esm.js',
    library: {
      type: 'umd',
      name: 'esm',
    },
  },
  experiments: {
    outputModule: true,
  },
}

const cjsConfig: Configuration = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.cjs.js',
    library: {
      type: 'umd',
      name: 'csj',
    },
  },
}

const iifeConfig: Configuration = {
  ...baseConfig,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.iife.js',
    library: {
      type: 'umd',
      name: 'iife',
    },
  },
}

export default [esmConfig, cjsConfig, iifeConfig]
