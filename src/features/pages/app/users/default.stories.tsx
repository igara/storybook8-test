import type { Meta, StoryObj } from '@storybook/react';
import { AppUsersPage } from '@/features/pages/app/users';
import { errorGetUsersAPIMock, loadedGetUsers0APIMock, loadedGetUsers100APIMock, loadedGetUsers1APIMock, loadingGetUsersAPIMock } from '@/data/mock/msw/api/users/get';

const meta = {
  title: 'pages/app/users',
  component: AppUsersPage,
} satisfies Meta<typeof AppUsersPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _loading_api_users: Story = {
  parameters: {
    msw: {
      handlers: [
        loadingGetUsersAPIMock(),
      ],
    },
  },
};

export const _error_api_users: Story = {
  parameters: {
    msw: {
      handlers: [
        errorGetUsersAPIMock(),
      ],
    },
  },
};

export const _load_api_users_0: Story = {
  parameters: {
    msw: {
      handlers: [
        loadedGetUsers0APIMock(),
      ],
    },
  },
};

export const _load_api_users_1: Story = {
  parameters: {
    msw: {
      handlers: [
        loadedGetUsers1APIMock(),
      ],
    },
  },
};

export const _load_api_users_100: Story = {
  parameters: {
    msw: {
      handlers: [
        loadedGetUsers100APIMock(),
      ],
    },
  },
};
