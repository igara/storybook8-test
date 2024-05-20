import type { Meta, StoryObj } from '@storybook/react';
import { useDialog, Dialog as DialogComponent } from '@/components/Dialog';
import React from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'src/components/Dialog',
  component: DialogComponent,
  render: ({ ...args }) => {
    const { Dialog } = useDialog();
    return <Dialog {...args}></Dialog>;
  }
} satisfies Meta<typeof DialogComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _open_true: Story = {
  args: {
    handleClose: fn(),
    open: true,
    dialogTitle: 'Dialog Title',
    dialogContent: 'Dialog Content',
  },
};

export const _open_false: Story = {
  args: {
    handleClose: fn(),
    open: false,
    dialogTitle: 'Dialog Title',
    dialogContent: 'Dialog Content',
  },
};

export const _use_handleDialogOpen: Story = {
  args: {
    handleClose: fn(),
    open: false,
    dialogTitle: 'Dialog Title',
    dialogContent: 'Dialog Content',
  },
  render: ({ ...args }) => {
    const { Dialog, handleDialogOpen } = useDialog();
    React.useEffect(() => {
      handleDialogOpen();
    }, []);

    return <Dialog {...args}></Dialog>;
  }
};

export const _use_handleDialogClose: Story = {
  args: {
    handleClose: fn(),
    open: true,
    dialogTitle: 'Dialog Title',
    dialogContent: 'Dialog Content',
  },
  render: ({ ...args }) => {
    const { Dialog, handleDialogOpen, handleDialogClose } = useDialog();
    React.useEffect(() => {
      const test = async () => {
        handleDialogOpen();
        await new Promise((resolve) => setTimeout(resolve, 3000));
        handleDialogClose();
      }
      test();
    }, []);

    return <Dialog {...args}></Dialog>;
  }
};
