import { SxProps, Theme } from '@mui/system'

export const styles: { [key: string]: SxProps<Theme> } = {
  cardSpotlight: {
    position: 'relative',
    borderRadius: '1.5rem',
    border: '1px solid #222',
    backgroundColor: '#f8f3f3',
    p: '2rem',
    overflow: 'hidden',
    '--mouse-x': '50%',
    '--mouse-y': '50%',
    '--spotlight-color': 'rgba(255, 255, 255, 0.05)',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background:
        'radial-gradient(circle at var(--mouse-x) var(--mouse-y), var(--spotlight-color), transparent 80%)',
      opacity: 0,
      transition: 'opacity 0.5s ease',
      pointerEvents: 'none'
    },
    '&:hover::before, &:focus-within::before': {
      opacity: 0.6
    }
  }
}
