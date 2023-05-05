/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const runtimeCaching = require("next-pwa/cache");
const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  buildExcludes: [
    /\/*server\/middleware-chunks\/[0-9]*[a-z]*[A-Z]*\.js$/,
    /middleware-manifest\.json$/,
    /middleware-runtime\.js$/,
    /_middleware\.js$/,
    /^.+\\_middleware\.js$/,
],
publicExcludes: ['!robots.txt'],
  disable: process.env.NODE_ENV === 'development',
})

const nextConfig = {
  reactStrictMode: false,
  i18n,

}

module.exports = withPWA(nextConfig)
