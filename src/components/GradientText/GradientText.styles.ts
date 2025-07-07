import { SxProps, Theme, keyframes } from '@mui/system'

const gradientKeyframes = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`

export const styles: { [key: string]: SxProps<Theme> } = {
  animatedGradientText: {
    position: 'relative',
    margin: '0 auto',
    display: 'flex',
    maxWidth: 'fit-content',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '1.25rem',
    fontWeight: 500,
    backdropFilter: 'blur(10px)',
    transition: 'box-shadow 0.5s ease-out',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  gradientOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundSize: '300% 100%',
    animation: `${gradientKeyframes} linear infinite`,
    borderRadius: 'inherit',
    zIndex: 0,
    pointerEvents: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      borderRadius: 'inherit',
      width: 'calc(100% - 2px)',
      height: 'calc(100% - 2px)',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#060010',
      zIndex: -1
    }
  },
  textContent: {
    display: 'inline-block',
    position: 'relative',
    zIndex: 2,
    backgroundSize: '300% 100%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'transparent',
    animation: `${gradientKeyframes} linear infinite`
  }
}
