const path = require("path");

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/components/**/*.stories.@(ts|tsx|js|jsx)"],
  addons: [
    // "@storybook/preset-create-react-app",
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
