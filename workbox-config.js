module.exports = {
  globDirectory: 'public',
  globPatterns: [
    'index.html',
    'web_modules/**/*.{js,json}',
    'out/**/*.{js,css}',
    'fonts/**/*.woff2',
    'robots.txt',
    'manifest.json',
    'favicon.ico',
    'img/*.png'
  ],
  swDest: 'public/sw.js',
  navigateFallback: '/index.html'
}
