import type { Preview } from "@storybook/react";
import React from 'react';
import { withScreenshot } from "storycap";
import { initialize, mswLoader } from 'msw-storybook-addon';
import { ThemeLayout } from '../src/theme';

// Initialize MSW
initialize();

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
  loaders: [mswLoader],
  decorators: [
    // @ts-ignore
    withScreenshot,
    (Story) => {
      return (
        <ThemeLayout storybook>
          <Story />
        </ThemeLayout>
      );
    },
  ],
};

export default preview;
