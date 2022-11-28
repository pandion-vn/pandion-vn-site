/**
 * @type {import('next').NextConfig}
 */
const path = require('path');

module.exports = {
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false,
  },
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: [],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
};
