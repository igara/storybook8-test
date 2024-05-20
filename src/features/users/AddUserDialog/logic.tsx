'use client'

import React from 'react';
import { useDialog } from '@/components/Dialog';
import { useForm } from 'react-hook-form';
import { AddUserFormResolver, AddUserFormType } from '@/schemas/form/AddUserFormSchema';

export const useLogic = () => {
  const { handleDialogOpen, Dialog } = useDialog();
  const formMethod = useForm<AddUserFormType>({
    resolver: AddUserFormResolver,
    mode: 'all',
  });

  const formID = 'add-user-form';

  const onSubmit = formMethod.handleSubmit(async (data) => {
    console.log("onsubmit")
  });

  return {
    handleDialogOpen,
    Dialog,
    formID,
    onSubmit,
    formMethod
  }
};
