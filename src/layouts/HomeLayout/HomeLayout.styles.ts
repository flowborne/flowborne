import { SxProps } from '@mui/system';
import backgroundImage from '../../assets/Home.png';

export const styles: { [key: string]: SxProps } = {
  layoutWrapper: {
    minHeight: '100vh',
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPositionX: 'center', 
    backgroundPositionY: '0px',
    backgroundRepeat: 'no-repeat',
    display: 'flex',
    flexDirection: 'column',
    color: 'text.primary',
  },

  container: {
    textAlign: 'center',
    maxWidth: 1500,
  },

  // === HERO SECTION ===
  heroWrapper: {
    py: { xs: 45, md: 40 },
    mb: { xs: 6, md: 8},
  },
  heroTitle: {
    lineHeight: 1.5,
    fontWeight: 'bold',
    fontSize: { xs: '3rem', md: '4rem' },
    maxWidth: 900,
    mx: 'auto',
  },
  highlightText: {
    color: 'primary.main',
    display: 'inline',
  },
  heroSubtitle: {
    mt: { xs: 3, md: 5 },
    color: '#CFCFCF',
    fontSize: { xs: '0.95rem', md: '1rem' },
    maxWidth: 650,
    mx: 'auto',
  },
  heroButtons: {
    mt: { xs: 5, md: 7 },
    justifyContent: 'center',
    alignItems: 'center',
  },

  // === METRICS SECTION ===
  metricsWrapper: {
    py: { xs: 6, md: 8 },
    mb: { xs: 6, md: 8 },
  },
  metricsCard: {
    bgcolor: 'background.white',
    textAlign: 'center',
    py: { xs: 3, md: 4 },
    px: 2,
    borderRadius: 4,
    border: '1px solid rgba(248,243,243,0.05)',
  },
  metricValue: {
    fontWeight: 800,
    color: 'secondary.main',
    fontSize: { xs: '2.8rem', md: '4.2rem' },
  },
  metricLabel: {
    mt: 1,
    fontSize: { xs: '0.75rem', md: '0.85rem' },
    fontWeight: 1000,
    textTransform: 'uppercase',
    color: 'text.secondary',
  },

  // === SOLUTIONS SECTION ===
  solutionsWrapper: {
    py: { xs: 10, md: 14 },
    mb: { xs: 6, md: 8 },
    textAlign: 'center',
  },

  solutionsTitle: {
    fontSize: { xs: '1.8rem', md: '2.4rem' },
    fontWeight: 700,
    color: '#FFFFFF',
    mb: 2,
  },

  solutionsSubtitle: {
    maxWidth: 700,
    mx: 'auto',
    mb: { xs: 6, md: 8 },
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    color: '#CFCFCF',
  },

  solutionGridItem: {
    display: 'flex',
    justifyContent: 'center',
  },

  solutionCard: {
    bgcolor: 'background.white',
    borderRadius: 6,
    p: { xs: 3, md: 4 },
    width: '100%',
    maxWidth: 420,
    textAlign: 'left',
    boxShadow: '0 0 20px rgba(0,0,0,0.05)',
    display: 'flex',
    flexDirection: 'column',
    gap: 1,
  },

  solutionIconBox: {
    width: 50,
    height: 50,
    bgcolor: 'secondary.main',
    borderRadius: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mb: 1,
  },

  solutionCardTitle: {
    fontSize: '1.4rem',
    fontWeight: 800,
    color: '#000',
  },

  solutionCardDescription: {
    fontSize: '1rem',
    color: '#333',
  },

  solutionList: {
    listStyle: 'none',
    pl: 0,
    mt: 1,
    '& li': {
      display: 'flex',
      alignItems: 'center',
      gap: 1,
      color: '#000',
      mb: 1,
      fontSize: '1rem',
    },
  },

  checkIcon: {
    color: 'secondary.main',
    fontSize: '1.3rem',
    mt: '2px',
  },

  // === WHY US SECTION ===

  industryLeadersWrapper: {
    py: { xs: 10, md: 14 },
    mb: { xs: 6, md: 8 },
    textAlign: 'center',
  },
  
  industryLeadersTitle: {
    fontSize: { xs: '1.8rem', md: '2.4rem' },
    fontWeight: 700,
    color: '#FFFFFF',
    mb: 2,
  },
  
  industryLeadersSubtitle: {
    maxWidth: 600,
    mx: 'auto',
    mb: { xs: 6, md: 8 },
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    color: '#CFCFCF',
  },
  
  featureGridItem: {
    display: 'flex',
    justifyContent: 'center',
    mb: { xs: 4, md: 0 },
  },
  
  featureCard: {
    textAlign: 'center',
    maxWidth: 300,
    px: { xs: 2, md: 3 },
  },
  
  featureIconBox: {
    width: 80,
    height: 80,
    bgcolor: 'rgba(250, 223, 17, 0.06)',
    border: '2px solid #FADF11',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    mx: 'auto',
    mb: 3,
  },
  
  featureIcon: {
    color: '#FADF11',
    fontSize: '2rem',
  },
  
  featureTitle: {
    fontSize: { xs: '1.1rem', md: '1.2rem' },
    fontWeight: 600,
    color: '#FFFFFF',
    mb: 2,
  },
  
  featureDescription: {
    fontSize: { xs: '0.9rem', md: '1rem' },
    color: '#CFCFCF',
    lineHeight: 1.6,
  },
  
  // === CTA SECTION ===
  ctaWrapper: {
    py: { xs: 8, md: 12 },
    bgcolor: '#1E1BF9',
    textAlign: 'center',
  },
  
  ctaTitle: {
    fontSize: { xs: '1.8rem', md: '2.4rem' },
    fontWeight: 700,
    color: '#FFFFFF',
    mb: 3,
  },
  
  ctaSubtitle: {
    maxWidth: 700,
    mx: 'auto',
    mb: { xs: 5, md: 7 },
    fontSize: { xs: '0.95rem', md: '1.05rem' },
    color: '#FFFFFF',
    opacity: 0.9,
    lineHeight: 1.6,
  },
  
  ctaButtons: {
    justifyContent: 'center',
    alignItems: 'center',
  },
};
