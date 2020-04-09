module.exports = {
  globDirectory: '.',
  globPatterns: [
    'index.html',
    'web_modules/**/*.{js,json}',
    'out/**/*.{js,css}',
  ],
  swDest: 'sw.js',
  inlineWorkboxRuntime: true,
}