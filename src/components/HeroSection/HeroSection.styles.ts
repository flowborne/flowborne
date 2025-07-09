import { SxProps, Theme } from '@mui/system'

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    textAlign: 'center',
    maxWidth: 1500,
    px: { xs: 2, sm: 3, md: 4 },
    mx: 'auto',
    width: '100%'
  },

  heroWrapper: {
    py: { xs: 12, md: 20 },
    mb: { xs: 6, md: 8 }
  },
  heroTitle: {
    lineHeight: 1.5,
    fontWeight: 'bold',
    fontSize: { xs: '2.2rem', sm: '3rem', md: '4rem' },
    maxWidth: 1000,
    mx: 'auto'
  },
  highlightText: {
    display: 'inline'
  },
  heroSubtitle: {
    mt: { xs: 3, md: 5 },
    color: '#CFCFCF',
    fontSize: { xs: '1rem', md: '1.1rem' },
    maxWidth: 650,
    mx: 'auto'
  },
  heroButtons: {
    mt: { xs: 5, md: 7 },
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 2
  }
}
