'use client';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import React from 'react';
import { CssBaseline } from '@mui/material';

export const theme = createTheme({
});

type ThemeLayoutProps = {
  children: React.ReactNode;
  /**
   * Storybook使用の際(true)bodyではなくdivでラップするようにする
   */
  storybook?: boolean;
};

/**
 * Storybook, Next.js本体でも共通にスタイル適応するためのLayoutコンポーネント
 */
export const ThemeLayout: React.FC<ThemeLayoutProps> = ({
  children,
  storybook = false,
}) => {
  const WrapperTag = storybook ? 'div' : 'body';

  return (
    <WrapperTag>
      <AppRouterCacheProvider options={{ enableCssLayer: true }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </AppRouterCacheProvider>
    </WrapperTag>
  );
};
