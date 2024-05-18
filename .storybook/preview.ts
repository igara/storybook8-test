import type { Preview } from "@storybook/react";
import { withScreenshot } from "storycap";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    screenshot: {
      viewports: {
        large: {
          width: 1024,
          height: 768,
        },
        small: {
          width: 320,
          height: 568,
        },
      },
    },
  },
  decorators: [
    // @ts-ignore
    withScreenshot,
  ]
};

export default preview;
