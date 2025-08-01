/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com']
  },
  output: 'export',

  async redirects() {
    return [
      {
        source: '/(.*)',
        has: [{ type: 'host', value: 'www.swirecreative.com' }],
        destination: 'https://swirecreative.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
