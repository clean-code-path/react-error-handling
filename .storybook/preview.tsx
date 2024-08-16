import type { Preview } from '@storybook/react';
import { Global } from '@emotion/react';
import { globalStyles } from '../src/styles/globalStyles';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <>
        <Global styles={globalStyles} />
        <Story />
      </>
    ),
  ],
};

export default preview;
