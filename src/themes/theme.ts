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
  }
})
