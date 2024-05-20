'use client';

import React from 'react';
import { Snackbar as MUISnackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { SnackbarState, HandleClose, useLogic } from './logic';

type Props = {
  snackbar: SnackbarState;
  handleClose: HandleClose;
}

export const Snackbar: React.FC<Props> = ({ snackbar, handleClose }) => {
  return (
    <MUISnackbar
      open={snackbar.open}
      autoHideDuration={snackbar.severity === 'error' ? null : 6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      sx={{ zIndex: 9999 }}
    >
      <Alert onClose={handleClose} severity={snackbar.severity}>
        {snackbar.message}
      </Alert>
    </MUISnackbar>
  )
}

export const useSnackbar = () => {
  const { snackbar, setSnackbar, handleClose } = useLogic();

  const Component: React.FC = () => (
    <Snackbar snackbar={snackbar} handleClose={handleClose} />
  );

  return {
    Snackbar: Component,
    setSnackbar
  };
};
