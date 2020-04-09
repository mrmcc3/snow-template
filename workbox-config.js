module.exports = {
  globDirectory: '.',
  globPatterns: [
    'index.html',
    'web_modules/**/*.{js,json}',
    'out/**/*.{js,css}',
    'fonts/**/*.woff2'
  ],
  swDest: 'sw.js',
  inlineWorkboxRuntime: true,
}
