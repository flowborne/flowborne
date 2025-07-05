import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,  
      sm: 600,  
      md: 900,  
      lg: 1200, 
      xl: 1536, 
    },
  },

  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'contained', color: 'primary' },
          style: { 
            backgroundColor: '#FADF11',
            color: '#000000',
            fontWeight: 'bold',
            borderRadius: '17px',
            textTransform: 'none',
            padding: '12px 32px', // Increased padding for wider buttons
            fontSize: '18px',
            minWidth: '160px', // Added minimum width
            '&:hover': { 
              backgroundColor: '#e8c900',
              transform: 'translateY(-1px)', // Reduced movement
              boxShadow: '0 2px 8px rgba(250, 223, 17, 0.3)' // Reduced shadow
            },
          }
        },
        {
          props: { variant: 'contained', color: 'secondary' },
          style: { 
            backgroundColor: '#F8F3F3',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '12px',
            textTransform: 'none',
            px: 3,
            py: 1,
            padding: '8px 22px',
            '&:hover': { backgroundColor: '#e0dede' }, 
          }
        },
        {
          props: { variant: 'outlined', color: 'primary' },
          style: { 
            borderColor: '#FADF11',
            color: '#FADF11',
            fontWeight: 'bold',
            borderRadius: '17px',
            textTransform: 'none',
            padding: '12px 32px',
            fontSize: '18px',
            minWidth: '160px',
            '&:hover': { 
              borderColor: '#e8c900',
              backgroundColor: 'rgba(250, 223, 17, 0.1)',
              color: '#e8c900',
              transform: 'translateY(-1px)',
              // Removed transform to prevent content movement
              boxShadow: '0 2px 8px rgba(250, 223, 17, 0.2)' // Reduced shadow
            },
          }
        },
      ]
    }
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#F8F3F3',
      secondary: '#000000',
    },
    primary: {
      main: '#FADF11',   
      contrastText: '#000000',
    },
    secondary: {
      main: '#1E1BF9',
      contrastText: '#000000',
    },
    background: {
      default: '#0F0F23',
      paper: 'rgba(248, 243, 243, 0.05)',
      white: '#F8F3F3',
    },
    action: {
      active: '#FADF11',   
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})
