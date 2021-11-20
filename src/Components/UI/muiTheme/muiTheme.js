import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#24CCA7', //main GREEN      
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#4A56E2', //main BLUE
      contrastText: '#4A56E2',
    },
    accent: {
      main: '#FF6596',
    },
  },
  breakpoints: {
    values: {
      mobile: 320,
      tablet: 768,
      desktop: 1280,
    },
  },
  typography: {
    fontFamily: ['Poppins', 'circe', 'sans-serif'].join(','),
  },
});

export default muiTheme;
