import { Box, Typography, Grid } from '@mui/material'
import { COREVALUESDATA } from './CoreValues.constants'
import { CoreValueCard } from '~components/CoreValueCard/CoreValueCard'
import { styles } from './CoreValuesSection.styles'
import { useTranslation } from 'react-i18next'

export const CoreValuesSection = () => {
  const { t } = useTranslation()

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title}>{t('aboutUs.coreValues.title')}</Typography>

      <Typography sx={styles.subtitle}>
        {t('aboutUs.coreValues.subtitle')}
      </Typography>

      <Grid
        columnSpacing={16}
        container
        rowSpacing={8}
        sx={styles.gridContainer}
      >
        {COREVALUESDATA.map((item, index) => (
          <Grid item key={index} md={4} sm={6} xs={12}>
            <CoreValueCard
              delay={index * 0.1}
              description={t(item.descriptionKey)}
              image={item.image}
              title={t(item.titleKey)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
