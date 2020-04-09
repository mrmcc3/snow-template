module.exports = {
  globDirectory: 'public',
  globPatterns: [
    'index.html',
    'web_modules/**/*.{js,json}',
    'out/**/*.{js,css}',
    'fonts/**/*.woff2',
    'robots.txt',
    'manifest.json'
  ],
  swDest: 'public/sw.js',
  inlineWorkboxRuntime: true,
  navigateFallback: '/index.html'
}
