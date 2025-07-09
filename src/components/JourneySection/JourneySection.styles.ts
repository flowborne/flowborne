import { SxProps } from '@mui/system'
import { Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> } = {
  journeySection: {
    py: { xs: 10, md: 16 },
    textAlign: 'center',
    maxWidth: 1500,
    px: { xs: 2, sm: 3, md: 4 },
    mx: 'auto',
    width: '100%'
  },

  journeyContent: {
    display: 'flex',
    flexDirection: { xs: 'column', md: 'row' },
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 6
  },

  journeyText: {
    flex: 1,
    textAlign: 'left'
  },

  journeyTitle: {
    fontWeight: 'bold',
    fontSize: { xs: '1.8rem', md: '2.2rem' },
    mb: 3
  },

  journeyParagraph: {
    fontSize: { xs: '1rem', md: '1.1rem' },
    color: '#CFCFCF',
    mb: 2
  },

  journeyImageWrapper: {
    flex: 1,
    display: { xs: 'none', md: 'flex' },
    justifyContent: 'center',
    alignItems: 'center',
    transform: 'rotate(-160deg)'
  }
}
