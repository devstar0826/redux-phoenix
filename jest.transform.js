module.exports = require('babel-jest').createTransformer({
  presets: [
    ['env', {
      targets: {
        browsers: ['last 2 versions'],
      },
    }],
    'stage-3',
  ],
});
