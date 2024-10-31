import path from 'node:path';
import * as sass from 'sass-embedded';

/** @type {import('webpack').Configuration} */
const config = {
  mode: 'production',
  entry: path.resolve('./src/main.js'),
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              api: 'modern-compiler',
            },
          },
        ],
      },
    ],
  },
};

export default config;
