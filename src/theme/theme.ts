import { createTheme } from '@mui/material';
import { CSSProperties } from 'react';

declare module '@mui/material' {
  interface PaletteOptions {
    neutral: {
      white: CSSProperties['color'];
      lightGrey: CSSProperties['color'];
      mediumGrey: CSSProperties['color'];
      darkBlue: CSSProperties['color'];
      veryDarkBlue: CSSProperties['color'];
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: 'hsl(25, 97%, 53%)',
    },
    neutral: {
      white: 'hsl(0, 0%, 100%)',
      lightGrey: 'hsl(217, 12%, 63%)',
      mediumGrey: 'hsl(216, 12%, 54%)',
      darkBlue: 'hsl(213, 19%, 18%)',
      veryDarkBlue: 'hsl(216, 12%, 8%)',
    },
  },
  typography: {
    body1: {
      fontSize: '15px',
      fontFamily: 'Overpass, sans-serif',
      fontWeightRegular: 400,
      fontWeightBold: 700,
    },
  },
});

export default theme;
