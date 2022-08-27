import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];
const formats = ['esm', 'cjs'];
const plugins = [
  terser(),
  commonjs(),
  resolve({ extensions }),
  peerDepsExternal(),
  typescript({ tsconfig: './tsconfig.build.json' }),
];

export default [
  {
    input: 'src/index.ts',
    output: formats.map((format) => ({
      file: `lib/browser.${format}.js`,
      format,
      sourcemap: true,
      name: 'web-components',
      globals: {
        react: 'React',
        'react-dom': 'ReactDOM',
        'styled-components': 'styled',
      },
    })),
    plugins,
    external: ['react', 'react-dom', 'styled-components'],
  },
];
