// const withPWA = require('next-pwa')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  generateBuildId: () => 'build',
  images: {
    domains: [
      'upload.wikimedia.org',
      'images-of-elements.com',
      'quimicar-api.herokuapp.com',
      'en.wikipedia.org'
    ]
  }
}
