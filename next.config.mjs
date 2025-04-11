/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@ant-design',
    'rc-util',
    'rc-pagination',
    "rc-picker",
    "rc-tree",
    "rc-table",
  ],
  i18n: {
    locales: ['th', 'en'],
    defaultLocale: 'th',
    localeDetection: false,
  },
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        hostname: 'complaint.drr.go.th',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3003',
        pathname: '/api/v1/source_type/image/**'
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '3001',
        pathname: '/api/v1/source_type/image/**'
      },
      {
        protocol: 'http',
        hostname: '203.150.243.195',
        port: '3003',
        pathname: '/api/v1/source_type/image/**'
      },
      {
        protocol: 'http',
        hostname: '203.150.243.195',
        port: '3001',
        pathname: '/api/v1/source_type/image/**'
      },
    ]
  }
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost',
  //       port: '3003',
  //       pathname: '/api/v1/source_type/image/**'
  //     },
  //     {
  //       protocol: 'http',
  //       hostname: 'localhost',
  //       port: '3001',
  //       pathname: '/api/v1/source_type/image/**'
  //     },
  //     {
  //       protocol: 'http',
  //       hostname: 'http://203.150.243.195',
  //       port: '3003',
  //       pathname: '/api/v1/source_type/image/**'
  //     },
  //     {
  //       protocol: 'http',
  //       hostname: 'http://203.150.243.195',
  //       port: '3001',
  //       pathname: '/api/v1/source_type/image/**'
  //     },
  //   ]
  // }
};

export default nextConfig;
