import { SxProps } from '@mui/system';

export const styles: { [key: string]: SxProps } = {
  appBar: {
    backgroundColor: '#0E0E0E',
    boxShadow: 'none',
  },
  container: {
    maxWidth: 1200,
    px: { xs: 2, sm: 3, md: 4 },
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  logoBox: {
    cursor: 'pointer',
  },
  burgerIcon: {
    color: '#FFFFFF',
  },
  drawerPaper: {
    backgroundColor: '#0E0E0E',
    color: '#F8F3F3',
  },
  drawerList: {
    width: 250,
  },
  drawerSubItem: {
    pl: 4,
  },
  navLinksBox: {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
    flexGrow: 1,
    justifyContent: 'center',
  },
  navLink: {
    cursor: 'pointer',
    '&:hover': { color: '#FADF11' },
  },
  servicesSlider: {
    position: 'absolute',
    top: '64px',
    left: 0,
    width: '100%',
    backgroundColor: '#0E0E0E',
    zIndex: 1200,
    py: 4,
    px: { xs: 2, sm: 6, md: 12 },
    display: 'flex',
    justifyContent: 'center',
    gap: 8,
    flexWrap: 'wrap',
  },
  sliderCategory: {
    fontWeight: 'bold',
    mb: 2,
  },
  sliderItem: {
    mb: 1,
    borderRadius: '4px',
    p: 1,
    cursor: 'pointer',
    border: '1px solid transparent',
    '&:hover': {
      border: '1px solid #FADF11',
    },
  },
};
