'use client';

import React from 'react';

export type SnackbarState = {
  open: boolean;
  message: string;
  severity: 'success' | 'info' | 'warning' | 'error';
}

export type HandleClose = (
  _: React.SyntheticEvent | Event,
  reason?: 'timeout' | 'clickaway' | 'escapeKeyDown' | undefined
) => void

export const useLogic = () => {
  const [snackbar, setSnackbar] = React.useState<SnackbarState>({
    open: false,
    message: '',
    severity: 'info',
  });

  const handleClose: HandleClose = (
    _,
    reason,
  ) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return {
    snackbar,
    setSnackbar,
    handleClose
  }
}
