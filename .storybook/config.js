import { configure, addDecorator, addParameters } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withKnobs } from "@storybook/addon-knobs";
import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

if (process.env.NODE_ENV === "test") {
  require("babel-plugin-require-context-hook/register")();
}

const req = require.context("../src", true, /.stories.tsx$/);
const loadStories = () => {
  addDecorator(withInfo);
  addDecorator(withKnobs);
  addParameters({
    info: { inline: true },
    viewport: { viewports: INITIAL_VIEWPORTS }
  });
  req.keys().forEach(req);
};

configure(loadStories, module);
