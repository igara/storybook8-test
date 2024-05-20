'use client'

import React from 'react';
import { User } from '@/app/api/users/route';
import { useSnackbar } from '@/components/Snackbar';

type CallAPIErrorArgs = {
  message: string;
  response: Response;
};

export class CallAPIError extends Error {
  public response: Response;

  constructor({ message, response }: CallAPIErrorArgs,) {
    super();
    this.message = message;
    this.response = response
  }
}

export const useLogic = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [users, setUsers] = React.useState<User[]>([]);
  const { setSnackbar, Snackbar } = useSnackbar();

  const callAPI = async () => {
    try {
      const response = await fetch('/api/users');
      if (response.status !== 200) throw new CallAPIError({
        message: `${response.url}: Failed to load users.`,
        response,
      });

      const data = await response.json();
      setUsers(data.users);
      setSnackbar({
        open: true,
        message: 'Users loaded.',
        severity: 'success',
      });
    } catch (error) {
      if (error instanceof CallAPIError) {
        console.error(error.message);
        setSnackbar({
          open: true,
          message: error.message,
          severity: 'error',
        });
      } else {
        console.error("/api/users: An error occurred.", error);
        setSnackbar({
          open: true,
          message: '/api/users: An error occurred.',
          severity: 'error',
        });
      }
    }
    setIsLoading(false);
  }

  React.useEffect(() => {
    callAPI();
  }, [isLoading]);

  return {
    isLoading,
    users,
    Snackbar
  }
};
