import type { Preview } from "@storybook/react-vite";
import * as React from "react";
import { SWAPThemeProvider } from "../src/theme/SWAPThemeProvider";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "todo",
    },
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Inputs", "Display", "Feedback", "Navigation", "Layout"],
      },
    },
  },
  decorators: [
    (Story) => (
      <SWAPThemeProvider>
        <Story />
      </SWAPThemeProvider>
    ),
  ],
};

export default preview;
