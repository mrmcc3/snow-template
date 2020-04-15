module.exports = {
  content: ["src/**/*.jsx"],
  css: ["out/app.css"],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
};