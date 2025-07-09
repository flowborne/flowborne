import { SxProps, Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> } = {
  wrapper: {
    py: { xs: 6, md: 10 },
    px: { xs: 2, md: 8 },
    textAlign: 'center',
    maxWidth: 1500,
    mx: 'auto',
    width: '100%'
  },

  title: {
    variant: 'h4',
    fontWeight: 'bold',
    mb: 1,
    fontSize: { s: ' 1rem', sm: '1.5rem', md: '2.5rem' }
  },

  subtitle: {
    maxWidth: 700,
    mx: 'auto',
    mb: 6,
    fontSize: { s: ' 1rem', sm: '1rem', md: '1.5rem' }
  },

  gridContainer: {
    justifyContent: 'center'
  }
}
