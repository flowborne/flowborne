import { SxProps, Theme } from '@mui/system'

export const styles: { [key: string]: SxProps<Theme> } = {
  footer: {
    background: 'linear-gradient(180deg, #0F0F23 0%, #000 100%)',
    color: '#FFFFFF',
    pt: 6,
    pb: 4
  },
  container: {
    width: 1420,
    maxWidth: '100%',
    mx: 'auto'
  },
  logoImg: {
    width: 60,
    height: 30
  },
  titleH6: {
    fontWeight: 'bold'
  },
  description: {
    maxWidth: 300,
    lineHeight: 1.6
  },
  iconButton: {
    color: '#FFFFFF'
  },
  subtitle: {
    fontWeight: 'bold',
    mb: 1,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: 30,
      height: '1px',
      backgroundColor: '#FADF11'
    }
  },
  link: {
    fontSize: 14,
    color: '#FFFFFF',
    '&:hover': {
      color: '#FADF11'
    }
  },
  getInTouchCaption: {
    color: '#F8F3F3',
    fontWeight: 300,
    fontSize: '0.6rem',
    lineHeight: 1.2
  },
  emailLink: {
    ml: 1,
    color: '#F8F3F3',
    fontSize: 14
  },
  newsletterTitle: {
    fontWeight: 'bold',
    mb: 1,
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: -2,
      left: 0,
      width: 30,
      height: '1px',
      backgroundColor: '#FADF11'
    }
  },
  newsletterText: {
    mb: 1,
    fontSize: 12
  },
  newsletterForm: {
    display: 'flex',
    width: '100%',
    gap: 1
  },
  emailField: {
    flex: 2,
    '& .MuiOutlinedInput-root': {
      height: 32,
      '& fieldset': {
        borderColor: 'rgba(255,255,255,0.8)'
      },
      '&:hover fieldset': {
        borderColor: 'rgba(255,255,255,1)'
      },
      '&.Mui-focused fieldset': {
        borderColor: '#FADF11'
      }
    },
    '& .MuiInputBase-input': {
      fontSize: '0.6rem',
      color: '#FFFFFF',
      padding: '0 8px'
    }
  },
  subscribeButton: {
    flex: 1,
    height: '32px',
    width: '20px',
    fontSize: '0.6rem',
    textTransform: 'none',
    bgcolor: '#FADF11',
    color: '#000000',
    '&:hover': {
      bgcolor: '#E6C811'
    }
  },
  divider: {
    borderColor: 'rgba(255,255,255,0.2)',
    my: 3
  },
  bottomText: {
    color: '#F8F3F3'
  },
  bottomLink: {
    fontSize: 14,
    color: '#FFFFFF',
    '&:hover': {
      color: '#FADF11'
    }
  }
}
