import { createTheme } from '@mui/material';
import { daDK, enUS } from '@mui/material/locale';

export const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
    },
  },
  daDK
);

export const darkTheme = createTheme(
  {
    palette: { mode: 'dark' },
  },
  daDK
);


