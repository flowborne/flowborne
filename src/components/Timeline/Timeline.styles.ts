import { SxProps, Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> } = {
  timelineWrapper: {
    position: 'relative',
    px: { xs: 2, md: 8 },
    py: { xs: 6, md: 10 },
    display: 'flex',
    flexDirection: 'column',
    gap: { xs: 4, md: 10 },
    textAlign: 'center',
    maxWidth: 1500,
    mx: 'auto',
    width: '100%'
  },

  verticalLine: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: '50%',
    width: '2px',
    backgroundColor: '#FFD700',
    transform: 'translateX(-50%)',
    zIndex: 0,
    display: { xs: 'none', md: 'block' }
  },

  timelineRow: {
    display: 'grid',
    gridTemplateColumns: {
      xs: '1fr',
      md: '1fr auto 1fr'
    },
    alignItems: 'center',
    position: 'relative',
    zIndex: 1,
    width: '100%'
  },

  timelineColumn: {
    minHeight: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  timelineColumnFull: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },

  timelineCenter: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    px: 2,
    zIndex: 2
  },

  dateBadge: {
    backgroundColor: '#FFD700',
    color: '#000',
    borderRadius: 999,
    px: 2,
    py: 0.5,
    fontSize: '0.8rem',
    fontWeight: 600,
    whiteSpace: 'nowrap'
  },

  card: {
    backgroundColor: '#fff',
    color: '#000',
    p: 2,
    borderRadius: 3,
    maxWidth: 360,
    boxShadow: 3,
    textAlign: 'center'
  },

  cardTitle: {
    fontWeight: 700,
    fontSize: '1rem',
    mb: 1
  },

  cardText: {
    fontSize: '0.9rem',
    color: 'text.secondary'
  },

  mobileDateWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mb: 2
  }
}
