'use strict';

// This is similar to how `env` works in Babel:
// https://babeljs.io/docs/usage/babelrc/#env-option
// We are not using `env` because it’s ignored in versions > babel-core@6.10.4:
// https://github.com/babel/babel/issues/4539
// https://github.com/facebook/create-react-app/issues/720
// It’s also nice that we can enforce `NODE_ENV` being specified.
var env = process.env.BABEL_ENV || process.env.NODE_ENV;

module.exports = {
  presets: [
    [
      'env',
      env === 'test'
        ? {
            targets: {
              node: 'current'
            }
          }
        : {
            modules: env === 'commonjs' ? 'commonjs' : false
          }
    ]
  ],
  plugins: [
    ['transform-object-rest-spread', { useBuiltIns: true }],
    require.resolve('./transform-object-assign-require')
  ]
};
