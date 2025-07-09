import { SxProps, Theme } from '@mui/material'

export const styles: { [key: string]: SxProps<Theme> | React.CSSProperties } = {
  cardWrapper: {
    backgroundColor: '#fff',
    borderRadius: 2,
    p: 3,
    textAlign: 'center',
    boxShadow: 3,
    minHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    gap: 3
  },

  iconWrapper: {
    width: 64,
    height: 64,
    borderRadius: '50%',
    border: '2px solid #6C63FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },

  iconImage: {
    width: 32,
    height: 32,
    objectFit: 'contain'
  }
}
