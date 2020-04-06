module.exports = {
  content: ["src/**/*.js"],
  css: ["out/app.css"],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
};