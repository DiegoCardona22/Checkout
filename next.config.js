// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  trailingSlash: true,
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'src', 'styles')]
  },
  images: {
    domains: ['*']
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  }
};
