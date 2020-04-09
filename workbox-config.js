module.exports = {
  globDirectory: '.',
  globPatterns: [
    'index.html',
    'web_modules/**/*.{js,json}',
    'out/**/*.{js,css}',
    'fonts/**/*.woff2',
    'robots.txt'
  ],
  swDest: 'sw.js',
  inlineWorkboxRuntime: true,
  navigateFallback: '/index.html'
}
