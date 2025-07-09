import { Grid, Typography, useTheme, useMediaQuery, Box } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
import CloudIcon from '@mui/icons-material/Cloud'
import TerminalIcon from '@mui/icons-material/Terminal'
import FlashOnIcon from '@mui/icons-material/FlashOn'
import SecurityIcon from '@mui/icons-material/Security'
import TrendingUpIcon from '@mui/icons-material/TrendingUp'
import GpsFixedIcon from '@mui/icons-material/GpsFixed'
import { useTranslation } from 'react-i18next'
import { styles } from './HomeLayout.styles'
import {
  METRICS,
  FEATURES,
  DEVOPS_FEATURES,
  SOFTWARE_FEATURES
} from './HomeLayout.constants'
import { SpotlightCard } from '~components/SpotlightCard/SpotlightCard'
import { TiltedCard } from '~components/TiltedCard/TiltedCard'
import { ReadyToAccelerate } from '~components/ReadyToAccelerate/ReadyToAccelerate'
import { HeroSection } from '~components/HeroSection/HeroSection'

const iconMap = {
  FlashOn: FlashOnIcon,
  Security: SecurityIcon,
  TrendingUp: TrendingUpIcon,
  GpsFixed: GpsFixedIcon
}

export const HomeLayout = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const { t } = useTranslation()

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

  return (
    <Box>
      <HeroSection
        primaryButtonText={t('hero.primaryButton')}
        secondaryButtonText={t('hero.secondaryButton')}
        showButtons
        subtitle={t('hero.subtitle')}
        titleEnd={t('hero.titleEnd')}
        titleHighlight={t('hero.titleHighlight')}
        titleStart={t('hero.title')}
      />

      <Box sx={styles.metricsWrapper}>
        <Box sx={styles.container}>
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
        </Box>
      </Box>

      <Box sx={styles.solutionsWrapper}>
        <Box sx={styles.container}>
          <Typography sx={styles.solutionsTitle}>
            {t('solutions.title')}
          </Typography>
          <Typography sx={styles.solutionsSubtitle}>
            {t('solutions.subtitle')}
          </Typography>
          <Grid container justifyContent='center' spacing={0}>
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
        </Box>
      </Box>

      <Box sx={styles.industryLeadersWrapper}>
        <Box sx={styles.container}>
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
        </Box>
      </Box>
      <ReadyToAccelerate isBlue />
    </Box>
  )
}
