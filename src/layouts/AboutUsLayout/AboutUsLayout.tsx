import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { Timeline } from '~components/Timeline/Timeline'
import { CoreValuesSection } from '~components/CoreValuesSection/CoreValuesSection'
import { ReadyToAccelerate } from '~components/ReadyToAccelerate/ReadyToAccelerate'
import { HeroSection } from '~components/HeroSection/HeroSection'
import { JourneySection } from '~components/JourneySection/JourneySection'

export const AboutUsLayout = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <HeroSection
        subtitle={t('aboutUs.hero.subtitle')}
        titleEnd={t('aboutUs.hero.titleEnd')}
        titleHighlight={t('aboutUs.hero.titleHighlight')}
        titleStart={t('aboutUs.hero.titleStart')}
      />
      <JourneySection />
      <Timeline />
      <CoreValuesSection />
      <ReadyToAccelerate />
    </Box>
  )
}
