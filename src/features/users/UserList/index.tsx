'use client'

import { User } from "@/app/api/users/route";
import { Box, Typography } from "@mui/material"

type Props = {
  users: User[];
}

export const UserList = ({ users }: Props) => {
  if (users.length === 0) {
    return (
      <Box>
        <Typography variant="body1">User not found.</Typography>
      </Box>
    )
  }

  return (
    <Box>
      {users.map((user) => (
        <Box key={user.id}>
          <Typography variant="h3">{user.name}</Typography>
          <Typography variant="body1">Age: {user.age}</Typography>
          <Typography variant="body1">{user.description}</Typography>
        </Box>
      ))}
    </Box>
  )
}
