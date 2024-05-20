import type { Meta, StoryObj } from '@storybook/react';
import { Loading } from '@/components/Loading';

const meta = {
  title: 'src/components/Loading',
  component: Loading,
} satisfies Meta<typeof Loading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _true: Story = {
  args: {
    isLoading: true,
  },
};

export const _false: Story = {
  args: {
    isLoading: false,
  },
};
