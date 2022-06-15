const webpack = require('webpack');
const rm = require('rimraf');
const config = require('./webpack.config');

const env = process.env.NODE_ENV || 'development';

rm('./build/', (removeErr) => {
  if (removeErr) throw removeErr;

  webpack(config, (err, stats) => {
    if (err) throw err;

    process.stdout.write(
      `${stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false,
      })}\n\n`,
    );

    if (stats.hasErrors()) {
      process.exit(1);
    }

    console.log('Build complete');
  });
});
