import CssBaseline from '@mui/material/CssBaseline'
import RoutesComponent from './router/router'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '~themes/theme'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RoutesComponent />
    </ThemeProvider>
  )
}
