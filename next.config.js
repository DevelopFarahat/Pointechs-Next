/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
   register: true,
})

const nextConfig = withPWA({
  reactStrictMode: false,
  i18n,
})

module.exports = nextConfig
