/** @type {import('next').NextConfig} */
const nextConfig = {
  devIndicators: { buildActivity: false },
  webpack: (config: { cache: boolean; plugins: any[]; }) => {
    config.cache = false;
    config.plugins = config.plugins?.filter((plugin: { constructor: { name: any; }; }) => {
      const name = plugin.constructor?.name;
      return !name?.includes('Cache');
    });
    return config;
  },
  outputFileTracingExcludes: {
    '*': ['cache/**/*', '**/cache/**/*'],
  },
  experimental: {
    webpackBuildWorker: false,
  },
};

module.exports = nextConfig;