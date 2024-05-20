'use client';

import React from 'react';
import {
  Dialog as MUIDIalog,
  DialogActions,
  DialogContent,
  DialogProps,
  DialogTitle,
} from '@mui/material';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useLogic, HandleClose } from './logic';

type Props = {
  id?: string;
  handleClose?: HandleClose;
  open?: boolean;
  dialogTitle: string;
  dialogContent: React.ReactNode;
  dialogAction?: React.ReactNode;
  dialogSX?: DialogProps['sx'];
}

export const Dialog: React.FC<Props> = ({ id, handleClose, open, dialogTitle, dialogContent, dialogAction, dialogSX }) => {
  return (
    <MUIDIalog onClose={handleClose} aria-labelledby={id} open={!!open} sx={dialogSX}>
      <DialogTitle sx={{ m: 0, p: 2 }} id={id}>
        {dialogTitle}
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
        }}>
        <CloseIcon />
      </IconButton>

      <DialogContent>{dialogContent}</DialogContent>
      {!!dialogAction && <DialogActions>{dialogAction}</DialogActions>}
    </MUIDIalog>
  );
}

export const useDialog = () => {
  const { isOpen, handleDialogClose, handleDialogOpen } = useLogic();

  const Component: React.FC<Props> = (props) => (
    <Dialog
      {...props}
      open={isOpen}
      handleClose={handleDialogClose}
    />
  );

  return {
    Dialog: Component,
    handleDialogOpen,
    handleDialogClose
  };
};
