/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const withPWA = require('next-pwa')({
  dest: 'public'
})
const nextConfig = {
  reactStrictMode: false,
  i18n,
  outputFileTracing: true,
  pwa:{
    dest:'public',
    register:true,
    skipWaiting:true,
    runtimeCaching,
		buildExcludes: [/middleware-manifest.json$/],
    disable: process.env.NODE_ENV === 'development',
  }

}

module.exports = withPWA(nextConfig)
