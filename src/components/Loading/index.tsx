'use client';

import { Backdrop, Box, CircularProgress, Typography } from '@mui/material';

type Props = {
  isLoading: boolean;
};

export const Loading = ({ isLoading }: Props) => {
  return (
    <Backdrop open={isLoading} sx={{ zIndex: 10 }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={10}
        bgcolor="white"
        borderRadius={3}
      >
        <CircularProgress />
        <Typography>loading...</Typography>
      </Box>
    </Backdrop>
  );
}
