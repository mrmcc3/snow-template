module.exports = {
  content: ["src/**/*.jsx"],
  css: ["public/out/app.css"],
  defaultExtractor: (content) => content.match(/[\w-/.:]+(?<!:)/g) || [],
};
