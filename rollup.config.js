import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index',
  output: {
    dir: 'dist',
    format: 'cjs',
    sourcemap: false,
    exports: 'named'
  },
  external: [],
  experimentalCodeSplitting: false,
  plugins: [resolve(), commonjs()]
};
