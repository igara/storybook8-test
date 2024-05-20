import type { Meta, StoryObj } from '@storybook/react';
import { UserList } from '@/features/users/UserList';
import { sampleUser, sampleUsers100 } from '@/data/mock/msw/api/users/get';

const meta = {
  title: 'features/users/UserList',
  component: UserList,
} satisfies Meta<typeof UserList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _users_0: Story = {
  args: {
    users: [],
  },
};

export const _users_1: Story = {
  args: {
    users: [sampleUser],
  },
};

export const _users_100: Story = {
  args: {
    users: sampleUsers100,
  },
};
