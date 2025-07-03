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
          props: { variant: 'contained' },
          style: { 
          backgroundColor: '#F8F3F3',
          color: '#000',
          fontWeight: 'bold',
          borderRadius: '12px',
          textTransform: 'none',
          px: 3,
          py: 1,
          padding: '8px 22px',
          '&:hover': { backgroundColor: '#e0dede' }, }
        },
      ]
    }
  },
  palette: {
    mode: 'light',
    text: {
      primary: '#F8F3F3',  
    },
    primary: {
      main: '#FADF11',   
      contrastText: '#000000',
    },
    action: {
      active: '#FADF11',   
    }
  },
  
})
