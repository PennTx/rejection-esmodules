import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default [{
  input: 'config/react-module.js',
  output: {
    file: 'web_modules/react.js',
    format: 'esm'
  },  
  plugins: [
    commonjs(),
    replace({
      'process.env.NODE_ENV': '"development"'
    }), 
    resolve()
  ]   
}, {
  input: 'config/react-dom-module.js',
  external: [ 'react' ],
  output: {
    file: 'web_modules/react-dom.js',
    format: 'esm',
    paths: {
      'react': './react.js'
    }
  },  
  plugins: [
    replace({
      'process.env.NODE_ENV': '"development"'
    }),
    commonjs(),
    resolve()
  ]
}, {
  input: 'config/react-redux-module.js',
  external: [ 'react', 'react-dom', 'react-is' ],
  output: {
    file: 'web_modules/react-redux.js',
    format: 'esm',
    paths: {
      'react': './react.js',
      'react-dom': './react-dom.js',
      'react-is': './react-is.js'
    }
  },  
  plugins: [
    replace({
      'process.env.NODE_ENV': '"development"'
    }),
    commonjs(),
    resolve()
  ]
}, {
  input: 'config/react-is-module.js',
  output: {
    file: 'web_modules/react-is.js',
    format: 'esm'
  },  
  plugins: [
    replace({
      'process.env.NODE_ENV': '"development"'
    }),
    commonjs(),
    resolve()
  ]
}];

