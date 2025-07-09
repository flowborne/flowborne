import { SxProps, Theme } from '@mui/system'
import backgroundImage from '~assets/Home.png'
export const styles: { [key: string]: SxProps<Theme> } = {
  root: {
    minHeight: '100vh',
    backgroundColor: '#0E0E0E',
    display: 'flex',
    flexDirection: 'column'
  },
  main: {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    color: 'text.primary'
  },
  container: {
    width: '100%',
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
    marginLeft: '0 !important',
    marginRight: '0 !important'
  }
}
