// tsup.config.js
export default {
  entryPoints: ['src/index.tsx'],
  format: ['cjs', 'esm'],
  splitting: true,
  sourcemap: true,
  dts: true,
  external: ['react', 'react-dom', 'next'],
  target: 'node14',
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    {
      name: 'replace-react',
      setup(build) {
        build.onResolve({ filter: /^react$/, namespace: '' }, () => ({
          path: require.resolve('react'),
        }))
        build.onResolve({ filter: /^react\/(.*)$/, namespace: '' }, (args) => ({
          path: require.resolve(`react/${args.path}`),
        }))
        build.onResolve({ filter: /^react-dom\/(.*)$/, namespace: '' }, (args) => ({
          path: require.resolve(`react-dom/${args.path}`),
        }))
      },
    },
  ],
}
