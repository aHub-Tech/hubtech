const withPWA = require('next-pwa')
const isDev = process.env.NODE_ENV === 'development'

module.exports = withPWA({
  pwa: {
    disable: isDev,
    dest: 'public'
  },
  images: {
    deviceSizes: [320, 420, 768, 1024, 1200, 1300, 1500, 1700],
    iconSizes: [],
    domains: [],
    path: '/_next/image'
  },
  eslint: {
    dirs: [
      'components',
      'hooks',
      'ui',
      'pages',
      'services',
      'styles',
      'theme',
      'utils'
    ]
  },
  reactStrictMode: true,
  pageExtensions: ['tsx'],
  async redirects() {
    return [
      {
        source: '/discord',
        destination: 'https://discord.com/invite/RMDSHVkDmE',
        permanent: false
      }
    ]
  }
})
