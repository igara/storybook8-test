'use client'

import { Box, Button } from "@mui/material"
import { useLogic } from "./logic"
import { FormProvider } from 'react-hook-form';
import { TextField } from "@/components/TextField";

export const useAddUserDialog = () => {
  const {
    Dialog,
    handleDialogOpen,
    formID,
    onSubmit,
    formMethod
  } = useLogic();

  const Component: React.FC = () => (
    <Dialog
      dialogTitle="Add User"
      dialogContent={
        <FormProvider {...formMethod}>
          <form id={formID} onSubmit={onSubmit}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                label={formMethod.register("name").name}
                name={formMethod.register("name").name}
              />
              <TextField
                label={formMethod.register("age").name}
                name={formMethod.register("age").name}
                type="number"
                inputProps={{
                  inputMode: "numeric",
                }}
              />
              <TextField
                multiline
                rows={4}
                label={formMethod.register("description").name}
                name={formMethod.register("description").name}
              />
            </Box>
          </form>
        </FormProvider>
      }
      dialogAction={
        <Box>
          <Button type="submit" form={formID}>submit</Button>
        </Box>
      } />
  );

  return {
    AddUserDialog: Component,
    handleDialogOpen
  }
}
