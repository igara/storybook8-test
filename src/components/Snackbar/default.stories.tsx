import type { Meta, StoryObj } from '@storybook/react';
import { useSnackbar, Snackbar as SnackbarComponent } from '@/components/Snackbar';
import React from 'react';
import { fn } from '@storybook/test';

const meta = {
  title: 'src/components/Snackbar',
  component: SnackbarComponent,
  render: ({ ...args }) => {
    const { Snackbar, setSnackbar } = useSnackbar();
    React.useEffect(() => {
      setSnackbar(args.snackbar);
    }, [args.snackbar, setSnackbar]);

    return <Snackbar />;
  }
} satisfies Meta<typeof SnackbarComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _severity_success: Story = {
  args: {
    snackbar: {
      open: true,
      message: 'success',
      severity: 'success',
    },
    handleClose: fn(),
  },
};

export const _severity_info: Story = {
  args: {
    snackbar: {
      open: true,
      message: 'info',
      severity: 'info',
    },
    handleClose: fn(),
  },
};

export const _severity_warning: Story = {
  args: {
    snackbar: {
      open: true,
      message: 'warning',
      severity: 'warning',
    },
    handleClose: fn(),
  },
};

export const _severity_error: Story = {
  args: {
    snackbar: {
      open: true,
      message: 'error',
      severity: 'error',
    },
    handleClose: fn(),
  },
};

export const _open_false: Story = {
  args: {
    snackbar: {
      open: false,
      message: 'error',
      severity: 'error',
    },
    handleClose: fn(),
  },
};
