import { createTheme } from '@mui/material';
import { daDK } from '@mui/material/locale';

export const lightTheme = createTheme(
  {
    typography: {
      fontFamily: 'Monospace, Roboto, Helvetica, Arial, sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
    },
    palette: {
      mode: 'light',
    },
  },
  daDK
);

export const darkTheme = createTheme({ ...lightTheme, palette: { mode: 'dark' } });
