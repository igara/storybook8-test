'use client';

import React from 'react';

export type HandleClose = () => void

export const useLogic = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDialogOpen = () => {
    setIsOpen(true);
  };
  const handleDialogClose = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    handleDialogOpen,
    handleDialogClose
  }
}
