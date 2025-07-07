import { SxProps, Theme } from '@mui/system'

export const styles: { [key: string]: SxProps<Theme> } = {
  figure: {
    position: 'relative',
    width: '100%',
    height: '100%',
    perspective: 800,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  mobileAlert: {
    position: 'absolute',
    top: '1rem',
    textAlign: 'center',
    fontSize: '0.875rem',
    display: 'none',
    '@media (max-width:640px)': {
      display: 'block'
    }
  },
  inner: {
    position: 'relative',
    transformStyle: 'preserve-3d'
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover',
    borderRadius: '15px',
    willChange: 'transform',
    transform: 'translateZ(0)'
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    willChange: 'transform',
    transform: 'translateZ(30px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  caption: {
    pointerEvents: 'none',
    position: 'absolute',
    left: 0,
    top: 0,
    borderRadius: '4px',
    backgroundColor: '#fff',
    padding: '4px 10px',
    fontSize: '10px',
    color: '#2d2d2d',
    opacity: 0,
    zIndex: 3,
    '@media (max-width:640px)': {
      display: 'none'
    }
  }
}
