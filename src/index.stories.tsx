import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { text } from "@storybook/addon-knobs";
import { App } from ".";

storiesOf("DEMO", module).add("App", () => (
  <App
    message={text("App message", "Hello, Storyboook!")}
    onClick={action("App.onClick")}
  />
));
