const path = require("path");

module.exports = {
  stories: ["../src/components/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    {
      name: "@storybook/addon-docs",
      options: {
        configureJSX: true,
      },
    },
    "@storybook/addon-essentials",
    "@storybook/addon-actions",
    "@storybook/addon-links",
  ],
};
