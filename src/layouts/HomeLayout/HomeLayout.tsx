import { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Grid,
  Typography,
  Stack,
  useTheme,
  useMediaQuery,
  Container
} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloudIcon from '@mui/icons-material/Cloud'
import TerminalIcon from '@mui/icons-material/Terminal'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import SecurityIcon from '@mui/icons-material/Security'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { styles } from './HomeLayout.styles'
import {
  METRICS,
  FEATURES,
  DEVOPS_FEATURES,
  SOFTWARE_FEATURES
} from './HomeLayout.constants'

import { GradientText } from '~components/GradientText/GradientText'
import { SpotlightCard } from '~components/SpotlightCard/SpotlightCard'
import { TiltedCard } from '~components/TiltedCard/TiltedCard'

const iconMap = {
  FlashOn: FlashOnIcon,
  Security: SecurityIcon,
  TrendingUp: TrendingUpIcon,
  GpsFixed: GpsFixedIcon
}

export const HomeLayout = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [scrollY, setScrollY] = useState(0)
  const navigate = useNavigate()
  const { t } = useTranslation()

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const renderIcon = (iconName: string) => {
    const IconComponent = iconMap[iconName as keyof typeof iconMap]
    return IconComponent ? (
      <IconComponent sx={styles.featureIcon} />
    ) : (
      <FlashOnIcon sx={styles.featureIcon} />
    )
  }

  const getFeaturesList = (featuresKey: string): string[] => {
    const raw = t(featuresKey, { returnObjects: true }) as unknown
    if (Array.isArray(raw)) {
      return raw.filter((item): item is string => typeof item === 'string')
    }
    return []
  }

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <Box
      sx={{
        ...styles.layoutWrapper,
        backgroundPositionY: `${scrollY * 0.5}px`
      }}
    >
      {/* Hero Section */}
      <Box sx={styles.heroWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Typography sx={styles.heroTitle} variant={isMobile ? 'h4' : 'h3'}>
            {t('hero.title')}{' '}
            <GradientText
              animationSpeed={15}
              className='inline-gradient-text'
              colors={[
                '#FADF11',
                '#83758F',
                '#1E1BF9',
                '#FADF11',
                '#83758F',
                '#1E1BF9'
              ]}
              showBorder={false}
            >
              {t('hero.titleHighlight')}
            </GradientText>{' '}
            {t('hero.titleEnd')}
          </Typography>
          <Typography sx={styles.heroSubtitle} variant='body1'>
            {t('hero.subtitle')}
          </Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={5}
            sx={styles.heroButtons}
          >
            <Button
              color='primary'
              fullWidth={isMobile}
              onClick={() => handleNavigate('/contact')}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              variant='contained'
            >
              {t('hero.primaryButton')}
            </Button>
            <Button
              color='primary'
              fullWidth={isMobile}
              onClick={() => handleNavigate('/case-studies')}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              variant='outlined'
            >
              {t('hero.secondaryButton')}
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* Metrics Section */}
      <Box sx={styles.metricsWrapper}>
        <Container maxWidth={false} sx={styles.container}>
          <Grid container justifyContent='center' spacing={10}>
            {METRICS.map((metric, i) => (
              <Grid item key={i} sm={3} xs={6}>
                <SpotlightCard
                  className='custom-spotlight-card'
                  spotlightColor='rgba(30, 27, 249, 0.2)'
                >
                  <Typography sx={styles.metricValue} variant='h4'>
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
          <Grid container justifyContent='center' spacing={0}>
            {/* DevOps & Cloud Services */}
            <Grid item md={6} sx={styles.solutionGridItem} xs={12}>
              {isMobile ? (
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
                  <Box component='ul' sx={styles.solutionList}>
                    {getFeaturesList(DEVOPS_FEATURES).map((text, i) => (
                      <li key={i}>
                        <CheckIcon sx={styles.checkIcon} /> {text}
                      </li>
                    ))}
                  </Box>
                </Box>
              ) : (
                <TiltedCard
                  altText='Solution Card Background'
                  containerHeight='auto'
                  containerWidth='60%'
                  displayOverlayContent
                  imageHeight='10px'
                  imageWidth='100%'
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
                      <Box component='ul' sx={styles.solutionList}>
                        {getFeaturesList(DEVOPS_FEATURES).map((text, i) => (
                          <li key={i}>
                            <CheckIcon sx={styles.checkIcon} /> {text}
                          </li>
                        ))}
                      </Box>
                    </Box>
                  }
                  rotateAmplitude={0.2}
                  scaleOnHover={1.02}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              )}
            </Grid>

            {/* Software Development */}
            <Grid item md={6} sx={styles.solutionGridItem} xs={12}>
              {isMobile ? (
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
                  <Box component='ul' sx={styles.solutionList}>
                    {getFeaturesList(SOFTWARE_FEATURES).map((text, i) => (
                      <li key={i}>
                        <CheckIcon sx={styles.checkIcon} /> {text}
                      </li>
                    ))}
                  </Box>
                </Box>
              ) : (
                <TiltedCard
                  altText='Software Development Card Background'
                  containerHeight='auto'
                  containerWidth='60%'
                  displayOverlayContent
                  imageHeight='10px'
                  imageWidth='100%'
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
                      <Box component='ul' sx={styles.solutionList}>
                        {getFeaturesList(SOFTWARE_FEATURES).map((text, i) => (
                          <li key={i}>
                            <CheckIcon sx={styles.checkIcon} /> {text}
                          </li>
                        ))}
                      </Box>
                    </Box>
                  }
                  rotateAmplitude={0.2}
                  scaleOnHover={1.02}
                  showMobileWarning={false}
                  showTooltip={false}
                />
              )}
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
          <Grid container justifyContent='center' spacing={4}>
            {FEATURES.map((feature, index) => (
              <Grid
                item
                key={index}
                md={3}
                sm={6}
                sx={styles.featureGridItem}
                xs={12}
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
          <Typography sx={styles.ctaTitle}>{t('cta.title')}</Typography>
          <Typography sx={styles.ctaSubtitle}>{t('cta.subtitle')}</Typography>
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            sx={styles.ctaButtons}
          >
            <Button
              color='primary'
              fullWidth={isMobile}
              onClick={() => handleNavigate('/contact')}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              variant='contained'
            >
              {t('cta.primaryButton')}
            </Button>
            <Button
              color='primary'
              fullWidth={isMobile}
              onClick={() => handleNavigate('/case-studies')}
              sx={{ minWidth: { xs: 'auto', sm: 300 } }}
              variant='outlined'
            >
              {t('cta.secondaryButton')}
            </Button>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
