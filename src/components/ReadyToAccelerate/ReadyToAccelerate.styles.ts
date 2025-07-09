import { SxProps, Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> } = {
  container: {
    textAlign: 'center',
    maxWidth: 1500,
    px: { xs: 2, sm: 3, md: 4 },
    mx: 'auto',
    width: '100%'
  },

  ctaWrapper: {
    py: { xs: 8, md: 12 },
    textAlign: 'center'
  },

  blueBg: {
    bgcolor: '#1E1BF9'
  },

  transparentBg: {
    bgcolor: 'transparent'
  },

  ctaTitle: {
    fontSize: { xs: '1.6rem', sm: '2rem', md: '2.4rem' },
    fontWeight: 700,
    color: '#FFFFFF',
    mb: 3
  },

  ctaSubtitle: {
    maxWidth: 700,
    mx: 'auto',
    mb: { xs: 5, md: 7 },
    fontSize: { xs: '1rem', md: '1.05rem' },
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 1.6
  },

  ctaButtons: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: { xs: 'column', sm: 'row' },
    gap: 6
  }
}
