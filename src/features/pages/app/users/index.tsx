'use client'

import { Box, Typography } from "@mui/material"
import { useLogic } from "./logic"
import { Loading } from "@/components/Loading"
import { UserList } from "@/features/users/UserList"

export const AppUsersPage = () => {
  const { isLoading, users, Snackbar } = useLogic();

  return (
    <Box>
      <Typography variant="h2">Users</Typography>

      {!isLoading && <UserList users={users} />}

      <Loading isLoading={isLoading} />
      <Snackbar />
    </Box>
  )
}
