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
        has: [{ type: 'host', value: 'www.swiredev.com' }],
        destination: 'https://swiredev.com/:path*',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig
