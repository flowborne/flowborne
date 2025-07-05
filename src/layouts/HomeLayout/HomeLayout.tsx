import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Grid,
  Typography,
  Paper,
  Stack,
  useTheme,
  useMediaQuery,
  Container,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloudIcon from '@mui/icons-material/Cloud';
import TerminalIcon from '@mui/icons-material/Terminal';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import SecurityIcon from '@mui/icons-material/Security';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { styles } from './HomeLayout.styles';
import { 
  METRICS, 
  FEATURES, 
  DEVOPS_FEATURES, 
  SOFTWARE_FEATURES,
} from './HomeLayout.constants';

import { 
  GradientText,
  SpotlightCard,
  TiltedCard,
  DotGrid,
} from '~components/ui';

// Icon mapping
const iconMap = {
  FlashOn: FlashOnIcon,
  Security: SecurityIcon,
  TrendingUp: TrendingUpIcon,
  GpsFixed: GpsFixedIcon,
};

const HomeLayout = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap];
    if (!IconComponent) {
      return <FlashOnIcon sx={styles.featureIcon} />;
    }
    return <IconComponent sx={styles.featureIcon} />;
  };

  const getFeaturesList = (featuresKey: string): string[] => {
    const { t } = useTranslation();
    const featuresObj = t(featuresKey, { returnObjects: true });
    return Array.isArray(featuresObj) ? featuresObj : [];
  };

  const handleNavigate = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
    setServicesMobileOpen(false);
    setServicesDesktopOpen(false);
  };

  return (
    <Box sx={{
      ...styles.layoutWrapper,
      backgroundPositionY: `${scrollY * 0.5}px`,
    }}>
      
      {/* Hero Section */}
      <Box sx={styles.heroWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Typography
            variant={isMobile ? 'h4' : 'h3'}
            sx={styles.heroTitle}
          >
            {t('hero.title')}{' '}
            <GradientText
              colors={['#FADF11', '#83758F', '#1E1BF9', '#FADF11', '#83758F', '#1E1BF9']}
              animationSpeed={15}
              showBorder={false}
              className="inline-gradient-text"
            >
              {t('hero.titleHighlight')}
            </GradientText>{' '}
            {t('hero.titleEnd')}
          </Typography>

          <Typography variant="body1" sx={styles.heroSubtitle}>
            {t('hero.subtitle')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={5}
            sx={styles.heroButtons}
          >
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth={isMobile}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              onClick={() => handleNavigate('/contact')}
            >
              {t('hero.primaryButton')}
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              fullWidth={isMobile}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              onClick={() => handleNavigate('/case-studies')}
            >
              {t('hero.secondaryButton')}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Metrics Section */}
      <Box sx={styles.metricsWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Grid container spacing={10} justifyContent="center">
            {METRICS.map((metric, i) => (
              <Grid item xs={6} sm={3} key={i}>
                <SpotlightCard className="custom-spotlight-card" spotlightColor="rgba(30, 27, 249, 0.2)">
                  <Typography variant="h4" sx={styles.metricValue}>
                    {t(metric.value)}
                  </Typography>
                  <Typography sx={styles.metricLabel}>
                    {t(metric.label)}
                  </Typography>
                </SpotlightCard>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Solutions Section */}
      <Box sx={styles.solutionsWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Typography sx={styles.solutionsTitle}>
            {t('solutions.title')}
          </Typography>
          <Typography sx={styles.solutionsSubtitle}>
            {t('solutions.subtitle')}
          </Typography>

          <Grid container spacing={0} justifyContent="center">
            {/* DevOps & Cloud Services */}
            <Grid item xs={12} md={6} sx={styles.solutionGridItem}>
              <TiltedCard
                imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23ffffff'/%3E%3C/svg%3E"
                altText="Solution Card Background"
                captionText=""
                containerHeight="auto"
                containerWidth="60%"
                imageHeight="10px"
                imageWidth="100%"
                rotateAmplitude={0.2}
                scaleOnHover={1.02}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <Box sx={styles.solutionCard}>
                    <Box sx={styles.solutionIconBox}>
                      <CloudIcon sx={{ color: 'text.white' }} />
                    </Box>
                    <Typography sx={styles.solutionCardTitle}>
                      {t('solutions.devopsCloud.title')}
                    </Typography>
                    <Typography sx={styles.solutionCardDescription}>
                      {t('solutions.devopsCloud.description')}
                    </Typography>
                    <Box component="ul" sx={styles.solutionList}>
                      {getFeaturesList(DEVOPS_FEATURES).map((text, i) => (
                        <li key={i}>
                          <CheckIcon sx={styles.checkIcon} />
                          {text}
                        </li>
                      ))}
                    </Box>
                  </Box>
                }
              />
            </Grid>

            {/* Software Development */}
            <Grid item xs={12} md={6} sx={styles.solutionGridItem}>
              <TiltedCard
                imageSrc="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23ffffff'/%3E%3C/svg%3E"
                altText="Software Development Card Background"
                captionText=""
                containerHeight="auto"
                containerWidth="60%"
                imageHeight="10px"
                imageWidth="100%"
                rotateAmplitude={0.2}
                scaleOnHover={1.02}
                showMobileWarning={false}
                showTooltip={false}
                displayOverlayContent={true}
                overlayContent={
                  <Box sx={styles.solutionCard}>
                    <Box sx={styles.solutionIconBox}>
                      <TerminalIcon sx={{ color: 'text.white' }} />
                    </Box>
                    <Typography sx={styles.solutionCardTitle}>
                      {t('solutions.softwareDev.title')}
                    </Typography>
                    <Typography sx={styles.solutionCardDescription}>
                      {t('solutions.softwareDev.description')}
                    </Typography>
                    <Box component="ul" sx={styles.solutionList}>
                      {getFeaturesList(SOFTWARE_FEATURES).map((text, i) => (
                        <li key={i}>
                          <CheckIcon sx={styles.checkIcon} />
                          {text}
                        </li>
                      ))}
                    </Box>
                  </Box>
                }
              />
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Industry Leaders Choose Us Section */}
      <Box sx={styles.industryLeadersWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Typography sx={styles.industryLeadersTitle}>
            {t('industryLeaders.title')}
          </Typography>
          <Typography sx={styles.industryLeadersSubtitle}>
            {t('industryLeaders.subtitle')}
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {FEATURES.map((feature, index) => (
              <Grid 
                item 
                xs={12} 
                sm={6} 
                md={3} 
                key={index}
                sx={styles.featureGridItem}
              >
                <Box sx={styles.featureCard}>
                  <Box sx={styles.featureIconBox}>
                    {renderIcon(feature.icon)}
                  </Box>
                  <Typography sx={styles.featureTitle}>
                    {t(feature.title)}
                  </Typography>
                  <Typography sx={styles.featureDescription}>
                    {t(feature.description)}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Ready to Accelerate CTA Section */}
      <Box sx={styles.ctaWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Typography sx={styles.ctaTitle}>
            {t('cta.title')}
          </Typography>
          <Typography sx={styles.ctaSubtitle}>
            {t('cta.subtitle')}
          </Typography>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={styles.ctaButtons}
          >
            <Button 
              variant="contained" 
              color="primary" 
              fullWidth={isMobile}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              onClick={() => handleNavigate('/contact')}
            >
              {t('cta.primaryButton')}
            </Button>
            <Button 
              variant="outlined" 
              color="primary" 
              fullWidth={isMobile}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              onClick={() => handleNavigate('/case-studies')}
            >
              {t('cta.secondaryButton')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};

export default HomeLayout;
