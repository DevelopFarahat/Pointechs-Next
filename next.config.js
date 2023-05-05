/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [/middleware-manifest.json$/],
  disable: process.env.NODE_ENV === 'development',
   register: true,
   scope: '/',
   sw: 'service-worker.js',
})

const nextConfig = withPWA({
  reactStrictMode: false,
  i18n,
})

module.exports = nextConfig
