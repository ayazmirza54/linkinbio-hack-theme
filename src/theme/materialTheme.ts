import { createTheme } from '@mui/material/styles';

const materialTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#53CB96',
    },
    secondary: {
      main: '#53CB96',
    },
    background: {
      default: '#53CB96',
      paper: '#53CB96',
    },
  },
  typography: {
    fontFamily: [
      'JetBrains Mono',
      'monospace',
    ].join(','),
    button: {
      fontFamily: 'JetBrains Mono, monospace',
    },
    body1: {
      fontFamily: 'JetBrains Mono, monospace',
    },
    h4: {
      fontFamily: 'JetBrains Mono, monospace',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'JetBrains Mono, monospace',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          textTransform: 'none',
          padding: '10px 20px',
          borderWidth: '1px',
          borderStyle: 'solid',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          background: 'rgba(18, 18, 18, 0.7)',
          backdropFilter: 'blur(10px)',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderColor: '#53CB96',
          overflow: 'hidden',
          '&:hover': {
            borderColor: '#90caf9',
            boxShadow: '0 0 8px #53CB96',
          },
        },
      },
    },
    MuiCardActionArea: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          '&:hover': {
            backgroundColor: 'rgba(144, 202, 249, 0.05)',
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: '16px 20px',
          '&:last-child': {
            paddingBottom: '16px',
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            backgroundColor: 'rgba(144, 202, 249, 0.1)',
          },
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(144, 202, 249, 0.3) transparent',
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'transparent',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgba(144, 202, 249, 0.3)',
            borderRadius: '16',
            border: '2px solid transparent',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            backgroundColor: 'rgba(144, 202, 249, 0.5)',
          },
        },
      },
    },
  },
});

export default materialTheme; 