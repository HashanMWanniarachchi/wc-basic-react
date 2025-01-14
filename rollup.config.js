import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';


export default {
   input: 'src/index.js',
   output: {
      file: 'public/bundle.js',
      format: 'iife',
        globals: {
            'react': 'React',
            'react-dom': 'ReactDOM'
        }
   },
   external: [
    'react',
    'react-dom',
    'HeroService'
   ],
   plugins: [
      nodeResolve({
         extensions: ['.js', '.jsx']
      }),
      babel({
         babelHelpers: 'bundled',
         presets: ['@babel/preset-react'],
         extensions: ['.js', '.jsx']
      }),
      commonjs(),
      replace({
         preventAssignment: false,
         'process.env.NODE_ENV': '"development"'
      })
   ]
};