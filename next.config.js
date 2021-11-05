const imageOptions = {
  domains: ['auriga.co.in', 'auriga-gold.vercel.app'],
}

if (process.env.NODE_ENV !== 'production') {
  imageOptions['domains'].push('localhost')
}

const webPackOptions = (config, { dev, isServer }) => {
  // Replace React with Preact only in client production build
  if (!dev && !isServer) {
    Object.assign(config.resolve.alias, {
      react: 'preact/compat',
      'react-dom/test-utils': 'preact/test-utils',
      'react-dom': 'preact/compat',
    })
  }
  return config
}

module.exports = {
  swcMinify: true,
  reactStrictMode: true,
  layer0SourceMaps: true,
  images: imageOptions,
  webpack: webPackOptions,
}